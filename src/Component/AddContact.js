import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    user: {
      name: "",
      email: "",
      num: "",
    },
  });
  let { user } = state;

  const addForm = (e) => {
    setState((state) => ({
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    }));
  };

  function add(e) {
    e.preventDefault();
    if (user.name === "" && user.value === "") {
      alert("Please fill all fields");
      return;
    }
    props.contactHandler(user);
    setState({ name: "", email: "", num: "" });
    console.log(user);
    navigate("/");
  }

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={add} className='addContact'>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={user.name}
            onChange={addForm}
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
            onChange={addForm}
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
            onChange={addForm}
            style={styles.input}
          />
        </div>
        <button style={styles.button}>Add</button>
      </form>
    </div>
  );
};

export default AddContact;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import App from "../App";

// export class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//     num: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" && this.state.value === "") {
//       alert("Please fill all fields");
//       return;
//     }
//     this.props.contactHandler(this.state);
//     this.setState({ name: "", email: "", num: "" });

//   };

//   render() {
//     return (
//       <div>
//         <h2>Add Contact</h2>
//         <form onSubmit={this.add} className='addContact'>
//           <div style={{ margin: "10px" }}>
//             <label>Name</label>
//             <input
//               type='text'
//               name='name'
//               placeholder='Name'
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//           <div style={{ margin: "10px" }}>
//             <label>Number</label>
//             <input
//               type='tel'
//               name='num'
//               placeholder='Phone Number'
//               value={this.state.num}
//               onChange={(e) => this.setState({ num: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//           <div style={{ margin: "10px" }}>
//             <label>Email</label>
//             <input
//               type='email'
//               name='email'
//               placeholder='Email'
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//               style={styles.input}
//             />
//           </div>
//           <button style={styles.button}>Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;

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
