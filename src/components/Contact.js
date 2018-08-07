import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { name, address, email } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{address}</li>
          <li>{email}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
