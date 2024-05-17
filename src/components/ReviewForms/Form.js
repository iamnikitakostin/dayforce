import React from 'react';
import "./Form.css"
import DueDate from '../DueDate/DueDate';

function Form (props) {
  const color = props.item.done ? "var(--color-green)" : "var(--color-red)";
  return (
    <div className='reviewForms__item'>
        <div className='reviewForms__item-status' style={{backgroundColor: `${color}`}}></div>
        <div className="reviewForms__item-content">
          <div className="reviewForms__item-details">
            <p className='reviewForms__item-title p__detail'>{props.item.title}</p>
            <p className='reviewForms__item-requestor p__small'>{props.item.requestor}</p>
            <p className='reviewForms__item-due p__small'>
                <DueDate due={props.item.due} />
            </p>
          </div>
          <button className='p__small custom__button'>Sign</button>
        </div>
    </div>
  )
}

export default Form