import React, { useState, useRef } from 'react';
import './Event.css';
import DueDate from '../DueDate/DueDate';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Event(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="event">
      <div className="event-header" onClick={toggleExpand}>
        <div className="event-title p__detail">{props.item.title}</div>
        <div className="event-due-date p__small">
          <DueDate due={props.item.due} />
        </div>
        <div className="event-arrow">
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div
        className={`event-details ${isExpanded ? 'expanded' : 'collapsed'}`}
        style={{ height: isExpanded ? `fit-content` : '0px' }}
      >
        <div ref={contentRef}>
          <p className="event-due-date p__small">Here are the event details...</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
