import React, { Component } from 'react';
import Form from '../forms/Form';

class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    return this.props.showEditModal ? (
      <div className="edit-modal-backdrop">
        <div className="edit-modal">
          {this.props.children}
          <div className="edit-modal-footer">
            <input
              className="btn btn-dark"
              type="button"
              value="Close"
              onClick={e => {
                this.onClose(e);
              }}
            />
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
