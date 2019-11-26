import React, { Component } from "react";
import GuestForm from './GuestForm';

import "../styles/Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.show && (
          <div className="modal">
            <h1>Guest Info</h1>
            <GuestForm apiId={this.props.apiId} guestName={this.props.guestName}/>
            <button onClick={this.props.onHide}>Close Form</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
