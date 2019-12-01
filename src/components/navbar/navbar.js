import React from "react";
import logo from "../../assets/img/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar--wrapper">
      <div className="container">
        <div className="navbar--list">
          <ul>
            <li>
              <a href="#!" className="navbar--link-active">Home</a>
            </li>
            <li>
              <a href='#!'>About SM</a>
            </li>
            <li>
              <a href='#!'>Member</a>
            </li>
            <li>
              <a href="#!">
                <img style={{ maxWidth: 70 }} src={logo} />
              </a>
            </li>
            <li>
              <a href='#!'>Fans</a>
            </li>
            <li>
              <a href='#!'>Event</a>
            </li>
            <li>
              <a href='#!'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
