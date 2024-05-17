import React from 'react';
import Profile from '../Profile/Profile';
import ReviewForms from '../ReviewForms/ReviewForms';
import "./Dashboard.css";
import Reminders from '../Reminders/Reminders';
import MyTeam from '../MyTeam/MyTeam';
import Events from '../Events/Events';
import TeamOutlook from '../TeamOutlook/TeamOutlook';

function Dashboard() {
  return (
    <div className='dashboard'>
        <Profile />
        <ReviewForms />
        <Reminders />
        <MyTeam />
        <Events />
        <TeamOutlook />
    </div>
  )
}

export default Dashboard