import React from 'react';
import "./Reminder.css"
import DueDate from '../DueDate/DueDate';

function Reminder (props) {
  return (
    <div className='reminders__item margin__bottom'>
        <div className='reminders__item-status' style={{backgroundColor: `var(--color-red)`}}></div>
        <div className="reminders__item-content">
            <div className='reviewForms__item-title p__detail'>{props.item.title}</div>
            <div className='reviewForms__item-details p__small'>{props.item.details}</div>
            <div className='reviewForms__item-due p__small'>
                <DueDate due={props.item.due} />
            </div>
        </div>
    </div>
  )
}

export default Reminder