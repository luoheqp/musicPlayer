import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing = true, hide = () => {} }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div>
          <div>
            <button type="button" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>Hello, I'm a modal.</p>
        </div>,
        document.body
      )
    : null;

export default Modal;
