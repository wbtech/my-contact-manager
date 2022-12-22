import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EditContact = (props) => {
  console.log(props);
  let navigate = useNavigate();
  const { name, email, num, id } = props;

  const [state, setState] = useState({
    name: "",
    email: "",
    num: "",
  });

  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.value === "") {
      alert("Please fill all fields");
      return;
    }
    props.updateContact(state);
    setState({ name: "", email: "", num: "" });
    navigate("/");
  };

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
            value={state.name}
            onChange={(e) => setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label>Number</label>
          <input
            type='tel'
            name='num'
            placeholder='Phone Number'
            value={state.num}
            onChange={(e) => setState({ num: e.target.value })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={state.email}
            onChange={(e) => setState({ email: e.target.value })}
          />
        </div>
        <button>Update </button>
      </form>
    </div>
  );
};

export default EditContact;

// import React,{useState} from "react";
// import { Link, useNavigate } from "react-router-dom";

// export class EditContact extends React.Component {
//   constructor(props) {
//     super(props);
//     const { name, email, num, id } = props.useNavigate;
//     state = {
//       name,
//       email,
//       num,
//       id,
//     };
//   }
//   state = {
//     name: "",
//     email: "",
//     num: "",
//   };

//   update = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.value === "") {
//       alert("Please fill all fields");
//       return;
//     }
//     this.props.updateContact(this.state);
//     this.setState({ name: "", email: "", num: "" });
//     useNavigate("-1");
//   };

//   render() {
//     return (
//       <div>
//         <h2>Edit Contact</h2>
//         <form onSubmit={this.update} className='addContact'>
//           <div>
//             <label>Name</label>
//             <input
//               type='text'
//               name='name'
//               placeholder='Name'
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div>
//             <label>Number</label>
//             <input
//               type='tel'
//               name='num'
//               placeholder='Phone Number'
//               value={this.state.num}
//               onChange={(e) => this.setState({ num: e.target.value })}
//             />
//           </div>
//           <div>
//             <label>Email</label>
//             <input
//               type='email'
//               name='email'
//               placeholder='Email'
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button>Update </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default EditContact;
