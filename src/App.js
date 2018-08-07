import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

class App extends Component {
  state = {
    contact: {
      name: 'Joe Lorem',
      address: '2345 Mary Lane',
      email: 'joelorem@gmail.com'
    }
  };

  render() {
    const { name, address, email } = this.state.contact;
    return (
      <div>
        <Header branding={'Contact Manager'} />
        <Contact name={name} address={address} email={email} />
      </div>
    );
  }
}

export default App;
