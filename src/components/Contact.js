import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  handleClickDown = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleClickDanger = (id, dispatch) => {
    dispatch({ type: 'REMOVE_CONTACT', payload: id });
  };

  render() {
    const { id, name, address, email } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {state => {
          const { dispatch } = state;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                {showContactInfo ? (
                  <i
                    className="fas fa-sort-down"
                    style={{ cursor: 'pointer' }}
                    onClick={this.handleClickDown}
                  />
                ) : (
                  <i
                    className="fas fa-sort-up"
                    style={{ cursor: 'pointer' }}
                    onClick={this.handleClickDown}
                  />
                )}
                <i
                  className="fas fa-times text-danger"
                  style={{ cursor: 'pointer', float: 'right' }}
                  onClick={this.handleClickDanger.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">{address}</li>
                  <li className="list-group-item">{email}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
