import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import ContactCard from './ContactCard';
const ContactList=(props)=> {
  const inputE1=useRef("")
  const deleteContactHandler= (id)=>{
    props.getContactId(id)
  }
  const list =props.contacts;
  const renderContactList =list.map((contact) =>{
    return <ContactCard 
    key={contact.id} 
    contacts={contact}
    clickHander={deleteContactHandler}
    />
  })
 const getSearchTerm=()=>{
  props.searchKeyword(inputE1.current.value)
 }
  return (
    <div className='main padd'>
      <div className='ending'>
      <h2 className='list-h2'>Contact List
        <Link to="/add">
      <button className='ui button green bttn' >New Contact</button>
        </Link>
      </h2>
      <div className='ui search'>
          <div className='ui icon input '>
            <input 
            ref={inputE1}
            type='text' 
            placeholder='search contact' 
            className='prompt' 
            value={props.term} 
            onChange={getSearchTerm} >
            </input>
              <i className='search icon'></i>
          </div>
      </div>
        </div>
      <div className='ui celled list'>
        {renderContactList}
      </div>
    </div>
  )
}
export default ContactList;