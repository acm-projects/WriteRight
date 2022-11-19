//Import CSS sheet from same folder
import "../everything.css";
import logo from "../images/writerightTitle.png";
import idk from "../images/idk.png";
import Nav from "../components/nav/Nav";
import { useState } from "react";
import axios from "axios";

function WritingTips() {
  return (
    <body>
      <div className="bgBlue">
        <Nav />
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
