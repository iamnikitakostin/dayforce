import React from 'react';
import Profile from '../Profile/Profile';
import ReviewForms from '../ReviewForms/ReviewForms';
import "./Dashboard.css";
import Reminders from '../Reminders/Reminders';
import MyTeam from '../MyTeam/MyTeam';
import Events from '../Events/Events';
import TeamOutlook from '../TeamOutlook/TeamOutlook';

function Dashboard({setLoading}) {
  return (
    <div className='dashboard' onLoad={() => setLoading(false)}>
        <Profile />
        <ReviewForms />
        <Events />
        <Reminders />
        <MyTeam />
        <TeamOutlook />
    </div>
  )
}

export default Dashboard