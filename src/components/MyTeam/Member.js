import React from 'react';
import './Member.css';

function Member({ profile }) {
  const profileImage = require(`../../assets/profiles/${profile.id}.webp`);
  return (
    <div className="member">
      <div className="member__img">
        <img src={profileImage} alt="profile" loading="lazy"/>
      </div>
      <div className="member__details">
        <p className="member__name p__regular">{profile.name}</p>
        <p className="member__role">{profile.role}</p>
      </div>
    </div>
  );
}

export default Member;
