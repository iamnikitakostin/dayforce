import React from 'react';
import './ExpandProfile.css';
import fetch from "../../constants/profile_example.json";
import Button from '../Button/Button';

function ExpandProfile() {
  const profile = fetch.profile;

  return (
    <div className="profile-expanded card">
      <div className="profile-expanded__details margin__bottom">
        <h2>{profile.name}</h2>
        <p className='p__regular'>Employee #{profile.id}</p>
      </div>
      <div className="profile-expanded__controls">
        <Button icon="exit"></Button>
        <Button icon="edit">Edit</Button>
      </div>
    </div>
  );
}

export default ExpandProfile;
