import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../everything.css";
import "./SingleProject.css";
import { useLoginStore } from "../../stores/LoginStore";
import axios from "axios";
import Nav from "../../components/nav/Nav";

function SingleProject({ key, name }) {
  const navigate = useNavigate();
  let { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projSheets, setProjSheets] = useState();
  const parentProject = useLoginStore((state) => state.parentProject);
  const setParentProject = useLoginStore((state) => state.setParentProject);
  setParentProject(id);

  const handleClick = (e) => {
    setShowForm((current) => !current);
  };

  console.log(`The parent project is ${parentProject}`);

  return (
    <div className="bgRainbowWhite">
      <Nav />
      <nav className="sub">
        <ul class="a">
          <li class="a">
            <a className="sNavRed" href="">
              {parentProject}
            </a>
          </li>
          <li class="a">
            <p className="sNavRed"> &gt; </p>
          </li>
          <li class="a">
            <a className="sNavRed" href="">
              Sheets
            </a>
          </li>
        </ul>
      </nav>
      <hr class="redSolid"></hr>

      <div className="my-sheets">
        <div className="new-sheet-btns">
          <div className="new-sheet-btn">
            + New<br></br> Blank <br></br>Sheet
          </div>
          <div className="new-sheet-btn">
            + New<br></br> Eight Point <br></br>Story Arc
          </div>
          <div className="new-sheet-btn">
            + New<br></br>Character Building <br></br>Questionnaire
          </div>
          <div className="new-sheet-btn">
            + New<br></br>Worldbuilding<br></br>Worksheet
          </div>
        </div>
        <div className="existing-sheet-btns"></div>
      </div>
    </div>
  );
}

export default SingleProject;
