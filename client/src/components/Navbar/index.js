import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
<<<<<<< Updated upstream
import Logo from "../../logo.svg";
=======
import Logo from "../../movact.png";
>>>>>>> Stashed changes
import Modal from "../Modal";
/* import { useContext } from "react";
import { AuthContext } from "../../context/auth"; */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  /*   const { isLoggedIn, user } = useContext(AuthContext); */
  return (
    <div className="nav-header">
<<<<<<< Updated upstream
      <img src={Logo} alt="Header Logo" width="60px" />
=======
      <img src={Logo} alt="Header Logo" height="40px" />
>>>>>>> Stashed changes
      <div className="auth-btns">
        <nav>
          <Link to="/signup">
            <button className="nav-sign-btn">Sign Up</button>
          </Link>
        </nav>
        <nav>
          <button onClick={() => setIsOpen(true)} className="nav-log-btn">
            Log In
          </button>
          {<Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
