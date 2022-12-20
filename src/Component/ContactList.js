import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const renderContact = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return <div>{renderContact}</div>;
};

export default ContactList;
