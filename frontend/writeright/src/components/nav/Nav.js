import React from "react";
import logo from "../../images/writerightTitle.png";
//import "./Nav.css";
import "../../everything.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLoginStore } from "../../stores/LoginStore";

function Nav() {
  const getLogin = useLoginStore((state) => state.login);
  const signOut = useLoginStore((state) => state.signOut);
  const parentProject = useLoginStore((state) => state.parentProject);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${parentProject}`);
  };

  const handleLogout = () => {
    if (getLogin == false) {
      alert(
        `Error, user isn't currently signed in. Redirecting to home page...`
      );
      navigate("/");
    } else {
      signOut();
      navigate("/");
    }
  };

  return (
    <nav className="main">
      <img src={logo} className="logoBS" alt="Logo" />
      <ul class="a">
        <li class="a" id="myprojects">
          <Link to="/projects">My Projects</Link>
        </li>
        <li class="a" id="sheets">
          <a href="" onClick={handleClick}>
            Sheets
          </a>
        </li>
        <li class="a" id="grammarchecker">
          <Link to="/grammar">Grammar Checker</Link>
        </li>
        <li class="a" id="writingtips">
          <Link to="/sheets/writing-tips">Writing Tips</Link>
        </li>
      </ul>
      <button className="submit-btnNB" onClick={handleLogout}>
        log out
      </button>
    </nav>
  );
}

export default Nav;
