//Import CSS sheet from same folder
import "../everything.css";
import logo from '../images/writerightTitle.png';
import { useState } from "react";
import axios from "axios";

function BlankSheet() {
  //Hook to store form data and submit it as a single object
  const [blankSheet, setBlankSheet] = useState({
    text: ""
  });

  let { text } = blankSheet;

  //When field in form is changed, variables are updated to take in whatever is in the field
  const onChange = (e) => {
    setBlankSheet((prevState) => ({
      [e.target.text]: e.target.value
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();

    const userData = {
      text
    };

    //Replace with URL that will be used to send post request to the DB
    const postUrl = "";
    //Below here write out post request

    //After post request clear form data, set up redirect to new page after user signs up
  };
  return (
    <body>
    <div className="bgRedGray">
        <nav className="main">
            <img src={logo} className="logoBS" alt="Logo" />
            <ul class="a">
            <li class="a" id="myprojects">
              <a href="../my-projects">My Projects</a>
            </li>
            <li class="a" id="sheets">
              <a href="../sheets">Sheets</a>
            </li>
            <li class="a" id="grammarchecker">
              <a href="../grammar-checker">Grammar Checker</a>
            </li>
            <li class="a" id="writingtips">
              <a href="../writing-tips">Writing Tips</a>
            </li>
          </ul>
            <button className="submit-btnNB">log out</button>
        </nav>
        <nav className="sub">
          <ul class="a">
            <li class="a">
              <a className="sNavRed" href="/sheets">Sheets</a>
            </li>
            <li class="a">
              <p className="sNavRed"> &gt; </p>
            </li>
            <li class="a">
              <a className="sNavRed" href="/sheets/blank-sheet">Blank Sheet</a>
            </li>
          </ul>
          <nav className="rightBtn">
            <button type="submit" className="redButton">Save</button>
            <button type="submit" className="redButton">Save To</button>
          </nav>
        </nav>
        <hr class="redSolid"></hr>

        <div class='parentNBS'>
            <div class='child1NBS'>
                <nav className="textStyle">
                  <ul className="b">
                    <li>
                      <button className="textStyleBtn" id="N">
                        N
                      </button>
                    </li>
                    <li>
                      <button className="textStyleBtn" id="B">
                        B
                      </button>
                    </li>
                    <li>
                      <button className="textStyleBtn" id="I">
                        I
                      </button>
                    </li>
                    <li>
                      <button className="textStyleBtn" id="U">
                        U
                      </button>
                    </li>
                  </ul>
                </nav>
            </div>
            <div class='child2NBS'>
            <form onSubmit={handleSubmit} className="formBS">
              <textarea
                required                 
                type="text"
                className="blankSheet"
                name="text"
                id="text"
                defaultvalue={text}
                placeholder="Start typing here . . ."
              ></textarea>
              </form>
            </div>
        </div>

    </div>
    </body>
  );
}

export default BlankSheet;