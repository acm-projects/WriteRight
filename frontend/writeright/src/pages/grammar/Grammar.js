import React, { useState } from "react";
import logo from '../../images/writerightTitle.png';
import "./Grammar.css";
import axios from "axios";

function Grammar() {
  const [story, setStory] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setStory(e.target.value);
    setCount(e.target.value.length);
  };

  //Function to send request to API
  const handleSubmit = (e) => {
    e.preventDefault();

    const postUrl = "";

    axios
      .post(postUrl, story)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error, please try again!");
      });

    setStory("");
  };

  return (
    <div className="grammar-outer">
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
      <div className="grammar">
        <div className="grammar-nav">
          <div className="upload-buttons">
            <button className="upload-button">Upload from Computer</button>
            <button className="upload-button">Upload from WriteRight</button>
          </div>
          <div className="content-buttons">
            <button className="content-btn-1">Save</button>
            <button className="content-btn-2">Save to</button>
            <button className="content-btn-1">Clear</button>
          </div>
        </div>
        <div className="checker-section">
          <div className="checker-header">
            <p className="character-counter">{count} / 10,000 Characters</p>
          </div>
          <textarea
            className="grammar-box"
            value={story}
            onChange={handleChange}
            placeholder="Import an existing story, or copy and paste one here and then click the button to check your grammar!  (Max Limit: 10,000 Characters)"
          />
          <button className="grammar-submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Grammar;