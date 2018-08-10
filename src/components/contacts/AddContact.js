import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    address: '',
    email: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, address, email } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Full name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                className="form-control form-control-lg"
                placeholder="Address"
                value={address}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-warning btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
