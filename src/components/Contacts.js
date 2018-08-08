import React, { Component } from 'react';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Billy Bob',
          address: '1234 Mary Lane',
          email: 'billybob@gmail.com'
        },
        {
          id: 2,
          name: 'Bob Billybob',
          address: '1234 Mary Lane',
          email: 'bobthebilly@yahoo.com'
        },
        {
          id: 3,
          name: 'Billy Jean',
          address: '1234 Mary Lane',
          email: 'billyjean@netscape.net'
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return <div>{contacts.map(contact => <h1>{contact.name}</h1>)}</div>;
  }
}

export default Contacts;
