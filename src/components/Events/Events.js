import React from 'react';
import "./Events.css";
import Event from './Event';
import fetch from "../../constants/profile_example.json";

function Events() {
  return (
    <div className='events card'>
        <div className="margin__bottom">
            <h1 className='p__highlight'>Upcoming Events</h1>
        </div>
        <div className="reviewForms__body">
            {fetch.profile.events.map((item) => (
                <Event item={item} />
            ))}
        </div>
    </div>
  )
}

export default Events