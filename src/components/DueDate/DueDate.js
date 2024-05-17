import React from 'react';
import "./DueDate.css";

function DueDate(props) {
    const currentDate = new Date();
    const dueDateTime = new Date(props.due);
    
    const timeDiff = dueDateTime.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let dueText = '';
    if (daysDiff > 0) {
        dueText = `Due in ${daysDiff} day${daysDiff === 1 ? '' : 's'}`;
    } else if (daysDiff < 0 && !props.done) {
        dueText = `Due date ${Math.abs(daysDiff)} day${Math.abs(daysDiff) === 1 ? '' : 's'} ago`;
    } else {
        dueText = 'Due today';
    }
    return (
        <>{dueText}</>
    )
}

export default DueDate