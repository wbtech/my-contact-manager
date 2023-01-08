import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditContact = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    user: {
      name: "",
      email: "",
      num: "",
    },
  });
  let { user } = state;

  const updateForm = (e) => {
    setState((state) => ({
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    }));
  };

  function update(e) {
    e.preventDefault();
    if (user.name === "" && user.value === "") {
      alert("Please fill all fields");
      return;
    }
    props.updateContact(user);
    setState({ name: "", email: "", num: "" });
    navigate("/");
  }

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={update} className='addContact'>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={user.name}
            onChange={updateForm}
            style={styles.input}
          />
        </div>
        <div>
          <label>Number</label>
          <input
            type='tel'
            name='num'
            placeholder='Phone Number'
            value={user.num}
            onChange={updateForm}
            style={styles.input}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={user.email}
            onChange={updateForm}
            style={styles.input}
          />
        </div>
        <button style={styles.button}>Update</button>
      </form>
    </div>
  );
};

export default EditContact;

const styles = {
  button: {
    backgroundColor: "#76E7CD",
    width: "10rem",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "1.3rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  input: {
    maxWidth: "30rem",
    fontSize: "1.1rem",
  },
};
