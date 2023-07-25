import React from 'react'
import user from'../images/7309681.jpg'
import { Link } from 'react-router-dom';
import './contactDetails.css';

const ContactDetail=(contact)=> {
    const info=contact.location.state.contact;
  return (
<div className='main'>
    <div className='ui card card1 centered'>
        <div className='image'>
            <img src={user} alt='user'/>
        </div>
        <div className='content'>
            <div className='header'>{info.name}</div>
            < div className='description'>{info.email}</div>
        </div>
    </div>
        <div className='center-div'>
            <Link to='/'>
            <button className='btn'>Back To Contacts</button>
            </Link>
        </div>
</div>
    
  );
}

export default ContactDetail;