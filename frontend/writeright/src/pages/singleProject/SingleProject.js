import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../everything.css";
import "./SingleProject.css";
import { useLoginStore } from "../../stores/LoginStore";
import SheetButton from "../../components/projectButton/SheetButton";
import axios from "axios";
import Nav from "../../components/nav/Nav";

function SingleProject({ mongoId, name }) {
  const navigate = useNavigate();
  let { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  //const [isLoading, setIsLoading] = useState(true);
  const [projSheets, setProjSheets] = useState();
  const parentProject = useLoginStore((state) => state.parentProject);
  const setParentProject = useLoginStore((state) => state.setParentProject);
  const projId = useLoginStore((state) => state.projId);
  const setProjId = useLoginStore((state) => state.setProjId);
  const projContents = useLoginStore((state) => state.projContents);

  setParentProject(id);

  const handleClick = (e) => {
    setShowForm((current) => !current);
  };

  const newSheetNav = (e) => {
    navigate(`/sheets/blank-sheet`);
  };

  const newArcNav = (e) => {
    navigate(`/sheets/story-arc`);
  };

  const newCharNav = (e) => {
    navigate("/sheets/character-log");
  };

  const newWorldNav = (e) => {
    navigate("/sheets/at-home-with-your-character");
  };

  useEffect(() => {
    const getUrl = "";
  }, []);

  console.log(`The project id is ${projId}`);
  /*
  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading Projects . . .</h2>
      </div>
    );
  }*/

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
          <div className="new-sheet-btn" onClick={newSheetNav}>
            + New<br></br> Blank <br></br>Sheet
          </div>
          <div className="new-sheet-btn" onClick={newArcNav}>
            + New<br></br> Eight Point <br></br>Story Arc
          </div>
          <div className="new-sheet-btn" onClick={newCharNav}>
            + New<br></br>Character Building <br></br>Questionnaire
          </div>
          <div className="new-sheet-btn" onClick={newWorldNav}>
            + New<br></br>Worldbuilding<br></br>Worksheet
          </div>
        </div>
        <div className="existing-sheet-btns">
          {projContents.map((sheet) => (
            <div className="project-btn" key={sheet}>
              <SheetButton mongoId={sheet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
