import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfileForm = () => {
  const { id: userId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    bio: '',
    phone: '',
    profile_pic: '', 
  });
  const [fileInput, setFileInput] = useState(null);
  const [originalPic, setOriginalPic] = useState(''); 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/profiles/${userId}`);
        if (response.data?.profile) {
          const { name, website, bio, phone, profile_pic } = response.data.profile;
          setFormData({ name, website, bio, phone, profile_pic });
          setOriginalPic(profile_pic);
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileInput(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let profilePicUrl = formData.profile_pic;

      if (fileInput && profilePicUrl !== originalPic) {
        const presignRes = await axios.post(`${process.env.REACT_APP_API_URL}/generate_presigned_url`, {
          filename: fileInput.name,
          contentType: fileInput.type,
        });

        const { url, key } = presignRes.data;

        await axios.put(url, fileInput, {
          headers: {
            'Content-Type': fileInput.type,
          },
        });

        profilePicUrl = `${process.env.REACT_APP_S3_BASE_URL}/${key}`;
      }

      const updatedProfile = {
        ...formData,
        profile_pic: profilePicUrl,
      };

      await axios.put(`${process.env.REACT_APP_API_URL}/profiles/${userId}`, updatedProfile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Profile update failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {['name', 'website', 'phone'].map(field => (
            <div className="form-group row" key={field}>
              <label htmlFor={field} className="col-4 col-form-label text-capitalize">
                {field.replace('_', ' ')}
              </label>
              <div className="col-8">
                <input
                  id={field}
                  name={field}
                  className="form-control here"
                  type="text"
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}

          <div className="form-group row">
            <label htmlFor="bio" className="col-4 col-form-label">Bio</label>
            <div className="col-8">
              <textarea
                id="bio"
                name="bio"
                className="form-control"
                rows="4"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="profile_pic" className="col-4 col-form-label">Profile Picture</label>
            <div className="col-8">
              <input
                type="file"
                accept="image/*"
                className="form-control-file"
                onChange={handleFileChange}
              />
              {formData.profile_pic && (
                <img
                  src={formData.profile_pic}
                  alt="Current"
                  className="mt-2"
                  style={{ maxWidth: '150px', display: 'block' }}
                />
              )}
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-4 col-8">
              <button type="submit" className="btn btn-primary">
                Update My Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
