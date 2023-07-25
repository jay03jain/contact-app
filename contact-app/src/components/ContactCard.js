import React, { useState } from 'react'
import user from'../images/user.png'
import './styles.css'
import { Link } from 'react-router-dom';
import Popup from './Popup';

const ContactCard=(contact)=> {

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const {id,name,email}=contact.contacts;
  return (
    <div className="item card">
      <img src={user} alt='profile' className='ui avatar image'/>
      <div className="content">
        <Link to={{pathname:'/contact/${id}' , state:{contact:contact.contacts}}}>
          <div className="header name">{name}</div>
          <div className="header email">{email}</div>
        </Link>

      <Link to={{pathname:'/edit' , state:{contact:contact.contacts}}}>
        <i className='photo edit alternate outline icon'
      onClick={()=> contact.clickHander(id)}
      ></i>
      </Link>


        <i className='photo trash alternate outline icon'
      onClick={handleOpenPopup}></i>
       <Popup show={showPopup} handleClose={handleClosePopup} erase={()=>contact.clickHander(id)}>
        {/* Your content for the pop-up goes here */}
        <h2>Are you sure you wanna delete this contact?</h2>
        <p>{name}  :-  {email}</p>
      </Popup>
      </div>
    </div>
    
  );
}

export default ContactCard;

{/* <i className='photo trash alternate outline icon'
onClick={()=>contact.clickHander(id)}></i> */}