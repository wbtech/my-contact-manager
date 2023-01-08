import React from "react";
import { Link, useNavigate } from "react-router-dom";

import del from "../Images/del.png";
import user from "../Images/user.svg";

const ContactCard = (props) => {
  const navigate = useNavigate();
  const { id, name, email, num } = props.contact;

  const openProfile = ({ id, name, email }) => {
    navigate(`/contact/${id}`, {
      ...props.contact,
    });
  };

  return (
    <>
      <div style={contactCard}>
        <div style={contactBox}>
          <img src={user} alt={user} width='70' />
          <Link
            to={`/contact/$s{id}`}
            state={{
              ...props.contact,
            }}
            onClick={openProfile}
            className='render'>
            <div className='name'>{name}</div>
            <div className='num'>{num}</div>
            <div className='email'>{email}</div>
          </Link>
        </div>
        <div style={controls}>
          <Link
            to={`/edit `}
            state={{
              ...props.contact,
            }}>
            <h4 style={items}>Edit</h4>
          </Link>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => props.clickHandler(id)}>
            <img src={del} alt='delete' width='25' height='25' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

const contactCard = {
  display: "flex",
  justifyContent: "space-between",
  /* margin-top: 1.5rem; */
  boxShadow: "0px 1px 2px #52050a",
  margin: "9px",
  padding: "10px 4px",
};
const contactBox = {
  display: "flex",
  flex: 1,
};
const controls = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};
const items = {
  cursor: "pointer",
  margin: "1rem",
};
