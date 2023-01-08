import React, { useRef } from "react";
import { Link } from "react-router-dom";

import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts } = props;
  const inputRef = useRef("");

  const removeContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContact = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={removeContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    // props.searchKeyword(inputRef.current.value);
    props.searchkeyword(inputRef.current.value);
  };

  return (
    <div style={styles.listBox}>
      <h2 style={styles.contact}>
        Contact List
        <Link to='add'>
          <button style={styles.button}>Add Contact</button>
        </Link>
      </h2>
      <div style={styles.search}>
        <div>
          <input
            ref={inputRef}
            type='text'
            placeholder='search'
            value={props.searchTerm}
            onChange={getSearchTerm}
            style={styles.input}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        {renderContact.length > 0 ? renderContact : "No Contact Available"}
      </div>
    </div>
  );
};

export default ContactList;

const styles = {
  listBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  contact: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    padding: "6px",
    fontSize: "1.1rem",
    color: "#52050a",
    borderRadius: "10px",
  },

  button: {
    backgroundColor: "#76E7CD",
    padding: "8px",
    fontWeight: "bold",
    fontSize: "1.3rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
