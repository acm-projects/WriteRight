//Import CSS sheet from same folder
import "../everything.css";
import logo from '../images/writerightTitle.png';
import SubmitButton from './login/SubmitButton';
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
            <button type="submit" className="submit-btnNB">login</button>
        </nav>
        <div>
          <a className="sNavRed" href="">Sheets</a><p className="sNavRed"> &gt; </p><a className="sNavRed" href="">New Blank Sheet</a>
          <button className="redButton">Save</button>
          <button className="redButton">Save To</button>
          <hr class="redSolid"></hr>
        </div>

    </div>
    </body>
  );
}

export default BlankSheet;