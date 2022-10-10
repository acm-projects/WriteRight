import React from "react";
import logo from "../../images/logo.png";
import "./Nav.css";

function Nav() {
  return (
    <div className="bg">
      <nav>
        <img src={logo} className="logoBS" alt="Logo" />
        <ul class="a">
          <li class="a" id="myprojects">
            <a href="">My Projects</a>
          </li>
          <li class="a" id="sheets">
            <a href="">Sheets</a>
          </li>
          <li class="a" id="grammarchecker">
            <a href="">Grammar Checker</a>
          </li>
          <li class="a" id="writingtips">
            <a href="">Writing Tips</a>
          </li>
        </ul>
        <button type="submit" className="submit-btnNB">
          login
        </button>
      </nav>
    </div>
  );
}

export default Nav;
