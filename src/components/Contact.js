import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { name, address, email } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">{address}</li>
          <li className="list-group-item">{email}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
