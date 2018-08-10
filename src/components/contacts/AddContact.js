import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    address: '',
    email: ''
  };
  render() {
    const { name, address, email } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Full name"
                value={name}
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
