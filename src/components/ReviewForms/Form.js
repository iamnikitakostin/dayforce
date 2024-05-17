import React from 'react';
import "./Form.css"
import DueDate from '../DueDate/DueDate';

function Form (props) {
    console.log(props.item)
    const color = props.item.done ? "var(--color-green)" : "var(--color-red)";
  return (
    <div className='reviewForms__item margin__bottom'>
        <div className='reviewForms__item-status' style={{backgroundColor: `${color}`}}></div>
        <div className="reviewForms__item-content">
            <div className='reviewForms__item-title p__detail'>{props.item.title}</div>
            <div className='reviewForms__item-requestor p__small'>{props.item.requestor}</div>
            <div className='reviewForms__item-due p__small'>
                <DueDate due={props.item.due} />
            </div>
            <div className='reviewForms__item-sign p__small custom__button'>Sign</div>
        </div>
    </div>
  )
}

export default Form