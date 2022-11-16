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
          <li class="a">
            <p className="sNavRed"> &gt; </p>
          </li>
          <li class="a">
            <input
              required
              type="story"
              className="form-fieldCLstory"
              name="story"
              id="story"
              placeholder="Sheet Name"
            ></input>
          </li>
        </ul>
        <nav className="rightBtn">
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
