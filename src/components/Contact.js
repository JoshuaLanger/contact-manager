import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  handleClickDown = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleClickDanger = () => {
    this.props.handleRemoveContact();
  };

  render() {
    const { name, address, email } = this.props.contact;
    const { showContactInfo } = this.state;
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
            onClick={this.handleClickDanger}
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
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  handleRemoveContact: PropTypes.func.isRequired
};
export default Contact;
