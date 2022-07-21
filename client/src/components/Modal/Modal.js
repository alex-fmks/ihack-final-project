import React from "react";
import "./Modal.css";
import Logo from "../../logo.svg";
import XIcon from "../../xclose.svg";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal-container">
        <img
          src={XIcon}
          onClick={onClose}
          alt="Close Login"
          className="close-modal"
        />
        <img src={Logo} alt="Logo" className="login-logo" />
        <form>
          <div className="modal-header">
            <p>LOGIN</p>
          </div>
          {/*           <img src={Logo} style={{ width: "80px" }} alt="Logo Login" /> */}
          <input className="login-name" type="text" placeholder="Username" />
          <input className="login-pw" type="password" placeholder="Password" />
        </form>
        <button className="login-btn">Login</button>
      </div>
    </>
  );
}

export default Modal;
