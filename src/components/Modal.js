import React, { Component } from "react";
import GuestForm from './GuestForm';

import "../styles/Modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div className="modal">
            <h1>Guest Info</h1>
            <GuestForm />
            <button onClick={this.props.onHide}>Close Form</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
