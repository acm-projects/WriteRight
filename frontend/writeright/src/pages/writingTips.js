//Import CSS sheet from same folder
import "../everything.css";
import logo from "../images/writerightTitle.png";
import idk from "../images/idk.png";
import { useState } from "react";
import axios from "axios";

function WritingTips() {
  return (
    <body>
      <div className="bgBlue">
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
              <a href="">Grammar Checker</a>
            </li>
            <li class="a" id="writingtips">
              <a href="">Writing Tips</a>
            </li>
          </ul>
          <button className="submit-btnNB">log out</button>
        </nav>
        <div class="parentWT">
          <br></br>
          <br></br>
          <div class="row1WT">
            <a href="https://www.writingforward.com/writing-tips/avoid-adverbs">
              <button className="postWT">
                <img src={idk} className="imageWT" alt="idk" />
                hi??<br></br>
                <span className="articleWT">some other text</span>
              </button>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href="https://github.com/acm-projects/WriteRight#readme">
              <button className="postWT">
                <img src={idk} className="imageWT" alt="idk" />
                hi??<br></br>
                <span className="articleWT">some other text</span>
              </button>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href="https://github.com/acm-projects/WriteRight#readme">
              <button className="postWT">
                <img src={idk} className="imageWT" alt="idk" />
                hi??<br></br>
                <span className="articleWT">some other text</span>
              </button>
            </a>
          </div>
          <div class="row2WT">
            <br></br>
            <br></br>
            <a href="https://github.com/acm-projects/WriteRight#readme">
              <button className="postWT">
                <img src={idk} className="imageWT" alt="idk" />
                row 2<br></br>
                <span className="articleWT">some other text</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default WritingTips;
