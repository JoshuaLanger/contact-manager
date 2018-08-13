import React, { Component } from 'react';
import axios from 'axios';

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
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
