import React from "react";

const Profile_icon = () => {
  return (
    <div className="d-flex bd-highlight">
      <div className="img_cont">
        <img
          src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
          className="rounded-circle user_img"
        />
        <span className="online_icon"></span>
      </div>
      <div className="user_info">
        <span>Khalid</span>
      </div>
    </div>
  );
};

export default Profile_icon;
