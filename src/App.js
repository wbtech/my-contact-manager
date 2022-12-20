import React, { useState } from "react";
import "./index.css";
import AddContact from "./Component/AddContact";
import ContactList from "./Component/ContactList";
import Header from "./Component/Header";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const contactHandle = (contact) => {
    console.log(contact);
    setContacts(...contacts, contact);
  };

  return (
    <>
      <Header />
      <AddContact contactHandle={contactHandle} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
