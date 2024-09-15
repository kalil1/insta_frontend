import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../redux/userSlice';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    nickname: '',
    email: '',
    website: '',
    public_info: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  return (
    <div className="card">
        <div className="card-body">
        <form onSubmit={handleSubmit}>
        <div className="form-group row">
            <label htmlFor="username" className="col-4 col-form-label">User Name*</label>
            <div className="col-8">
            <input id="username" name="username" placeholder="Username" className="form-control here" required type="text" value={formData.username} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="first_name" className="col-4 col-form-label">First Name</label>
            <div className="col-8">
            <input id="first_name" name="first_name" placeholder="First Name" className="form-control here" type="text" value={formData.first_name} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="last_name" className="col-4 col-form-label">Last Name</label>
            <div className="col-8">
            <input id="last_name" name="last_name" placeholder="Last Name" className="form-control here" type="text" value={formData.last_name} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="nickname" className="col-4 col-form-label">Nick Name*</label>
            <div className="col-8">
            <input id="nickname" name="nickname" placeholder="Nick Name" className="form-control here" required type="text" value={formData.nickname} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="email" className="col-4 col-form-label">Email*</label>
            <div className="col-8">
            <input id="email" name="email" placeholder="Email" className="form-control here" required type="text" value={formData.email} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="website" className="col-4 col-form-label">Website</label>
            <div className="col-8">
            <input id="website" name="website" placeholder="website" className="form-control here" type="text" value={formData.website} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="public_info" className="col-4 col-form-label">Public Info</label>
            <div className="col-8">
            <textarea id="public_info" name="public_info" cols="40" rows="4" className="form-control" value={formData.public_info} onChange={handleChange}></textarea>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="password" className="col-4 col-form-label">New Password</label>
            <div className="col-8">
            <input id="password" name="password" placeholder="New Password" className="form-control here" type="password" value={formData.password} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <div className="offset-4 col-8">
            <button name="submit" type="submit" className="btn btn-primary">Update My Profile</button>
            </div>
        </div>
        </form>
    </div>
</div>
  );
};

export default ProfileForm;