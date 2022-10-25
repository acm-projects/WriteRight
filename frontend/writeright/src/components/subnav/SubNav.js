import React from "react";
import "../../everything.css";

function SubNav({ subName }) {
  return (
    <>
      <nav className="sub">
        <ul class="a">
          <li class="a">
            <a className="sNavRed" href="">
              Sheets
            </a>
          </li>
          <li class="a">
            <p className="sNavRed"> &gt; </p>
          </li>
          <li class="a">
            <a className="sNavRed" href="">
              {subName}
            </a>
          </li>
        </ul>
        <nav className="rightBtn">
          <button type="submit" className="redButton">
            Save
          </button>
          <button type="submit" className="redButton">
            Save To
          </button>
        </nav>
      </nav>
      <hr class="redSolid"></hr>
    </>
  );
}

export default SubNav;
