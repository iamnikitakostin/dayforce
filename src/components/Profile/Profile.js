import React from 'react';
import "./Profile.css";
import fetch from "../../constants/profile_example.json";
import { CiMail } from "react-icons/ci";
import Button from '../Button/Button';

const profileImage = require(`../../assets/profiles/${fetch.profile.photo}`);

function Profile () {
  return (
    <div className='profile card'>
        <div className="profile__img">
          <img src={profileImage} alt='profile' />
        </div>
        <div className="profile__details margin__bottom">
          <div className="profile__details-name p__highlight">{fetch.profile.name}</div>
          <div className="profile__details-position p__detail">{fetch.profile.position}</div>
          <div className="profile__details-email p__small"><CiMail /> {fetch.profile.email}</div>
        </div>
        <div className="profile__control">
          <Button icon="edit">Edit</Button>
          <Button icon="arrow">View More</Button>

        </div>
    </div>
  )
}

export default Profile