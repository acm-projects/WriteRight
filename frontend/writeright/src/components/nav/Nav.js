import React from "react";
import logo from "../../images/writerightTitle.png";
//import "./Nav.css";
import "../../everything.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="main">
      <img src={logo} className="logoBS" alt="Logo" />
      <ul class="a">
        <li class="a" id="myprojects">
          <a href="">My Projects</a>
        </li>
        <li class="a" id="sheets">
          <a href="">Sheets</a>
        </li>
        <li class="a" id="grammarchecker">
          <Link to="/grammar">Grammar Checker</Link>
        </li>
        <li class="a" id="writingtips">
          <a href="">Writing Tips</a>
        </li>
      </ul>
      <button className="submit-btnNB">log out</button>
    </nav>
  );
}

export default Nav;
