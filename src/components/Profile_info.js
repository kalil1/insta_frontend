import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import SettingsForm from './SettingsForm';
// Import other form components as needed

const Profile_info = () => {
  const [activeComponent, setActiveComponent] = useState('profile');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <ProfileForm />;
      case 'settings':
        return <SettingsForm />;
      
      default:
        return <ProfileForm />;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <a href="#" className={`list-group-item list-group-item-action ${activeComponent === 'profile' ? 'active' : ''}`} onClick={() => setActiveComponent('profile')}>
              Profile
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${activeComponent === 'settings' ? 'active' : ''}`} onClick={() => setActiveComponent('settings')}>
              Settings
            </a>
            
          </div>
        </div>
        <div className="col-md-9">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Profile_info;
