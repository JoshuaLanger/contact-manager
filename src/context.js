import React, { Component } from 'react';

const Context = React.createContext();

const REMOVE_CONTACT = 'REMOVE_CONTACT';
const ADD_CONTACT = 'ADD_CONTACT';

const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
