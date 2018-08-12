import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    address: '',
    email: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, address, email } = this.state;
    const newContact = {
      id: uuid(),
      name,
      address,
      email
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
  };

  render() {
    const { name, address, email } = this.state;
    return (
      <Consumer>
        {state => {
          const { dispatch } = state;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
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
        }}
      </Consumer>
    );
  }
}

export default AddContact;
