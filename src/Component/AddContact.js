import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.value === "") {
      alert("Please, fill all fields");
      return;
    }
    this.props.contactHandle(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          <div>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
