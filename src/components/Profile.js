import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Profile.module.css';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [posts, setPosts] = useState([]);
  const { id: userId } = useParams();


  useEffect(() => {
    const id = (!isNaN(userId) && Number(userId) > 0) ? Number(userId) : Math.floor(Math.random() * 100) + 1;
    getProfile(id);
  }, [userId]);

  // profile link is broken on purpose untill all features are complete 
  const getProfile = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/profiles/${id}`);
      if (response.data && response.data.profile) {
        setProfileData(response.data.profile);
        setPosts(response.data.posts);
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  const fallbackProfile = {
    name: "Areal Alien",
    bio: "This is the user biography 😄\nIt also has another line.",
    profile_pic: { url: "https://i.imgur.com/Qv1WDJq.jpg" },
    website: "#",
    username: "areal_alien"
  };

  const profile = profileData || fallbackProfile;
  console.log(profile)
  return (
    <div className={styles["profile-wrapper"]}>
      <div>
        <div className={styles["user-header-wrapper"]}>
          <div className={styles["user-header-inner"]}>
            <div className={styles["uh-left"]}>
              <div className={styles["uh-image"]}>
                <img
                  className={styles["uh-image-inner"]}
                  src={profile.profile_pic?.url?.startsWith("/") ? process.env.REACT_APP_API_URL + profile.profile_pic.url : profile.profile_pic.url}
                  alt="Profile"
                />
                <div className={styles.gradient}></div>
              </div>
            </div>
            <div className={styles["uh-right"]}>
              <div className={styles["user-info"]}>
                <h3>{profile.name}</h3>
                {profile.id && (
                  <NavLink to={`/form/${profile.id}`}>
                    <button className={styles.btn}>Edit Profile</button>
                  </NavLink>
                )}
              </div>
              <div className={styles["user-links"]}>
                <a href="#"><span>{posts.length || "2.1k"}</span> Posts</a>
                <a href="#"><span>421k</span> Followers</a>
                <a href="#">Following <span>388</span></a>
              </div>
              <div className={styles["user-bio"]}>
                <p className={styles["user-bio-name"]}>{profile.name}</p>
                <br />
                <p>{profile.bio}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["user-page-wrapper"]}>
          <div className={styles["user-page-inner"]}>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className={styles["image-wrapper"]}>
                  <div className={styles["img-overlay-wrapper"]}>
                    <div className={styles["img-btns"]}>
                      <p>
                        {/* Placeholder likes/comments until backend sends those */}
                        465<i className="uil uil-heart-alt"></i> &nbsp;&nbsp;
                        25<i className="uil uil-comment"></i>
                      </p>
                    </div>
                    <div className={styles["img-overlay"]}></div>
                  </div>
                  <img
                    className={styles.image}
                    src={
                      post.post_img?.url?.startsWith("/")
                        ? process.env.REACT_APP_API_URL + post.post_img.url
                        : post.post_img?.url || "/fallbacks/fallback1.jpg"
                    }
                    alt={post.caption || "Post"}
                  />
                </div>
              ))
            ) : (
              [...Array(9)].map((_, index) => {
                const fallbackImage = "/fallbacks/fallback" + (Math.floor(Math.random() * 10) + 1) + ".jpg";
                return (
                  <div key={index} className={styles["image-wrapper"]}>
                    <div className={styles["img-overlay-wrapper"]}>
                      <div className={styles["img-btns"]}>
                        <p>
                          465<i className="uil uil-heart-alt"></i> &nbsp;&nbsp;
                          25<i className="uil uil-comment"></i>
                        </p>
                      </div>
                      <div className={styles["img-overlay"]}></div>
                    </div>
                    <img className={styles.image} src={fallbackImage} alt="Fallback post" />
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className={styles["user-loader"]}>
          <div className={styles.loader}>
            <svg className={styles.circular} viewBox="25 25 50 50">
              <circle className={styles.path} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
