import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./index.css";
import AddContact from "./Component/AddContact";
import ContactList from "./Component/ContactList";
import Header from "./Component/Header";
import ContactDetail from "./Component/ContactDetails";

const App = (props) => {
  const [contacts, setContacts] = useState([]);
  const LOCALSTORAGE = "contacts";

  const contactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]); //for id
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    alert();
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
      <div style={container}>
        <BrowserRouter className='container'>
          <Header />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <ContactList
                  authed={true}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              }
            />
            <Route
              exact
              path='/add'
              element={
                <AddContact authed={true} contactHandler={contactHandler} />
              }
            />

            <Route exact path='/contact/:id' element={<ContactDetail />} />
          </Routes>

          {/* <AddContact contactHandler={contactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

const container = {
  maxWidth: "1000px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  padding: "15px",
  backGroundColor: "blue",
};
