import React from "react";
import user from "../Images/user.svg";

const ContactCard = (contact) => {
  const { id, name, email } = contact;
  return (
    <div key={id}>
      <img src={user} alt={user} />
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <h4>Del</h4>
    </div>
  );
};

export default ContactCard;
