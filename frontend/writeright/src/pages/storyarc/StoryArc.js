import React from "react";
import "./StoryArc.css";
import { useState, useEffect } from "react";
import "../../everything.css";
import Nav from "../../components/nav/Nav";
import SubNav from "../../components/subnav/SubNav";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../stores/LoginStore";
import axios from "axios";

function StoryArc() {
  const getLogin = useLoginStore((state) => state.login);
  const navigate = useNavigate();

  /*
  useEffect(() => {
    if (getLogin == false) {
      alert(`You must sign in before accessing WriteRight's tools!`);
      navigate("/");
    }
  }, [getLogin]);*/

  //UseState with variables that will be sent to database
  const [storyData, setStoryData] = useState({
    title: "",
    sheetType: 1,
    stasis: "",
    trigger: "",
    quest: "",
    surprise: "",
    critical: "",
    climax: "",
    reversal: "",
    resolution: "",
  });

  let {
    title,
    sheetType,
    stasis,
    trigger,
    quest,
    surprise,
    critical,
    climax,
    reversal,
    resolution,
  } = storyData;

  const handleChange = (e) => {
    setStoryData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postUrl = "http://localhost:8080/storyarcs";
    axios
      .post(postUrl, storyData)
      .then(function (response) {
        alert("Successfully added StoryArc to database");
        console.log(response);
      })
      .catch(function (error) {
        alert("Error, check console!");
        console.log(error);
      });
  };

  return (
    <div className="arc-outer">
      <Nav />
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
              New Blank Sheet
            </a>
          </li>
          <li class="a">
            <p className="sNavRed"> &gt; </p>
          </li>
          <li class="a">
            <input
              required
              type="text"
              className="form-fieldCLstory"
              name="title"
              id="title"
              value={title}
              onChange={handleChange}
              placeholder="Sheet Name"
            ></input>
          </li>
        </ul>
        <nav className="rightBtn">
          <button type="submit" className="redButton" onClick={handleSubmit}>
            Save To
          </button>
        </nav>
      </nav>
      <hr class="redSolid"></hr>
      <div className="story-arc">
        <div className="arc-section">
          <h2 className="arc-title">Stasis</h2>
          <textarea
            type="text"
            id="stasis"
            value={stasis}
            className="arc-text"
            onChange={handleChange}
            placeholder="Write about the stage of your story where everything is peaceful, before major events occur."
          />
        </div>

        <div className="arc-section">
          <h2 className="arc-title">Trigger</h2>
          <textarea
            type="text"
            id="trigger"
            className="arc-text"
            value={trigger}
            onChange={handleChange}
            placeholder="This is almost identical to the inciting incident. Write about an event that starts the plot and leads to the main conflict."
          />
        </div>

        <div className="arc-section">
          <h2 className="arc-title">Quest</h2>
          <textarea
            type="text"
            id="quest"
            className="arc-text"
            value={quest}
            onChange={handleChange}
            placeholder="This is the main part of the story, and tends to be a large part of it. Write about the protangist's pursuit of a need."
          />
        </div>

        <div className="arc-section">
          <h2 className="arc-title">Surprise</h2>
          <textarea
            type="text"
            id="surprise"
            className="arc-text"
            value={surprise}
            onChange={handleChange}
            placeholder="Write about an event that solidifies the conflict and the character development."
          />
        </div>

        <div className="arc-section">
          <h2 className="arc-title">Critical Choice</h2>
          <textarea
            type="text"
            id="critical"
            className="arc-text"
            value={critical}
            onChange={handleChange}
            placeholder="The critical choice tends to be the protagonist's greatest obstacle. Write about this event and how it effects them."
          />
        </div>

        <div className="arc-section">
          <h2 className="arc-title">Climax</h2>
          <textarea
            type="text"
            id="climax"
            value={climax}
            className="arc-text"
            onChange={handleChange}
            placeholder="The climax is the key part of most stories. This is the highest point of a story's conflict and shows how the protagonist deals with it"
          />
        </div>

        <div className="arc-section">
          <h2 className="arc-title">Reversal</h2>
          <textarea
            type="text"
            id="reversal"
            value={reversal}
            className="arc-text"
            onChange={handleChange}
            placeholder="The reversal is the stage in which the climax is being resolved, which is usually beneficial for the protagonist."
          />
        </div>

        <div className="arc-section">
          <h2 className="arc-title">Resolution</h2>
          <textarea
            type="text"
            id="resolution"
            value={resolution}
            className="arc-text"
            onChange={handleChange}
            placeholder="Write about how the protagonist resolves the issue that they faced in the climax "
          />
        </div>
      </div>
    </div>
  );
}

export default StoryArc;
