import React from 'react';
import "./Reminders.css";
import fetch from "../../constants/profile_example.json";
import Reminder from './Reminder';

function Reminders() {
  return (
    <div className='reminders card'>
        <div className="reminders__header margin__bottom">
            <h1 className='p__highlight'>Reminders</h1>
            <button className='custom__button'>Add</button>
        </div>
        <div className="card__body">
            {fetch.profile.reminders.map((item) => (
                <Reminder item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default Reminders