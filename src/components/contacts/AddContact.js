import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    address: '',
    email: '',
    errors: {}
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, address, email } = this.state;

    //Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (address === '') {
      this.setState({ errors: { address: 'Address is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      address,
      email
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
  };

  render() {
    const { name, address, email, errors } = this.state;
    return (
      <Consumer>
        {state => {
          const { dispatch } = state;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Full name"
                    value={name}
                    onChange={this.handleChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Address"
                    name="address"
                    placeholder="Enter address"
                    value={address}
                    onChange={this.handleChange}
                    error={errors.address}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />
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
