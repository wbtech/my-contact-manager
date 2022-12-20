import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import AddContact from "./Component/AddContact";
import ContactList from "./Component/ContactList";
import Header from "./Component/Header";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const LOCALSTORAGE = "contacts";

  const contactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: Math.random().toString(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  //set and get local storage
  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCALSTORAGE));
    if (retrieveContact) setContacts(retrieveContact);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path='/add'
            element={<AddContact contactHandler={contactHandler} />}
          />
        </Routes>

        {/* <AddContact contactHandler={contactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </>
  );
};

export default App;
