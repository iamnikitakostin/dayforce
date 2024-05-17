import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import logo from '../../assets/logo.svg';
import fetch from "../../constants/profile_example.json";
import { IoIosArrowDown } from "react-icons/io";
import ExpandProfile from '../ExpandProfile/ExpandProfile';

import "./Header.css";

const profileImage = require(`../../assets/profiles/${fetch.profile.photo}`);

function Header() {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  return (
    <div className='header'>
      <div className="header__top">
        <div className="header__logo">
          <img src={logo} alt='logo' />
        </div>
        <div 
          className="header__profile" 
          onMouseEnter={() => setShowProfileDetails(true)} 
          onMouseLeave={() => setShowProfileDetails(false)}
        >
          <div className="header__profile-img profile__mini">
            <img src={profileImage} alt='profile' />
          </div>
          <IoIosArrowDown />
          {showProfileDetails && <ExpandProfile/>}
        </div>
      </div>
      <NavBar />
    </div>
  )
}

export default Header;
