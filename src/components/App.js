import './App.css';
import React, { useState ,useEffect}from 'react';
import Header from './Header';
import Addcontact from './Addcontact';
import Contactlist from './Contactlist';
import { uuid } from 'uuidv4';

function App() {
  console.log(uuid);
  const [contacts, SetConteact] = useState([]);
  const Addcontacthandler = (contact) => {
    SetConteact([...contacts, {id:uuid() , ...contact}]);
  }

  const removecontact = (id) => {
    const newlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    SetConteact(newlist);

  }


  useEffect(() => {
    const retcontact = JSON.parse(localStorage.getItem('contact'));
    if (retcontact) SetConteact(retcontact);
  }, [])
  
  useEffect(() => {
    localStorage.setItem('contact',JSON.stringify(contacts))
  }, [contacts])
  

  
  return (
  
    <div className="ui container">
      < Header />
      < Addcontact Addcontacthandler={ Addcontacthandler }/>
      < Contactlist contact={contacts} getcontactid = {removecontact} />
    </div>
  );
}

export default App;
