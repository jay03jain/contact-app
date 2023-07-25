import './App.css';
import api from '../api/contacts'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactDetail from './ContactDetails';
import EditContact from './EditContact';

function App() {
  const [searchTerm,setSearchTerm] =useState("");

  const [searchResult,setSearchResult] =useState([])
  //REtrienve contacts
  const retrieveContacts =async() => {
    const response=await api.get('/contacts');
    return response.data;
  }
  const [contacts,setContacts] =useState([]);

  useEffect(() => {

  const getAllContacts =async() =>{
    const allContacts =await retrieveContacts();
    if(allContacts) setContacts(allContacts);
  }
  getAllContacts();
},[]);

  const searchHandler=(searchTerm)=>{
    setSearchTerm(searchTerm);
    if(searchTerm!==""){
      const newContactList=contacts.filter((contact) =>{
       return Object.values(contact)
       .join(" ")
       .toLowerCase()
       .includes(searchTerm.toLowerCase())
      });
      setSearchResult(newContactList)
    }
    else {
      setSearchResult(contacts )
    }
  };


const addContactHandler = async (contact) => {
  const newContact = {
      id: uuidv4(),
      ...contact,
    };
    const response=await api.post('/contacts',newContact)
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler= async(id) => {
    await api.delete(`/contacts/` + id);
    const newContact = contacts.filter((contact) => 
    {return contact.id !== id})
    setContacts(newContact);
  }
  
  
  return (
    <div className="ui container">
      <Router>
      <Header/>
      <Switch>
        <Route path='/add' 
        render={(props)=>(
          <AddContact
          {...props}
          addContactHandler={addContactHandler}
          />
          )
        }/>
        
        <Route path="/contact/:id" component={ContactDetail}/>

        <Route path='/edit' 
        render={(props)=>(
          <EditContact
          {...props}
          addContactHandler={addContactHandler}
          />
          )
        }/>

        <Route path='/' exact 
        render={(props)=>(
          <ContactList className="list" 
          {...props}
          contacts={searchTerm.length<1? contacts:searchResult} 
          getContactId={removeContactHandler}
            term={searchTerm}
            searchKeyword={searchHandler}
          />
          )}
          />


      </Switch>
    </Router>
    </div>
  );
}

export default App;