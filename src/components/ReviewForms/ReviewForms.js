import React from 'react';
import "./ReviewForms.css";
import fetch from "../../constants/profile_example.json";
import Form from './Form';

function ReviewForms() {
  return (
    <div className='reviewForms card'>
        <div className="margin__bottom">
            <h1 className='p__highlight'>Review Forms</h1>
        </div>
        <div className="card__body">
            {fetch.profile.forms.map((item) => (
                <Form item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default ReviewForms