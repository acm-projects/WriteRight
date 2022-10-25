import React from "react";
import "./StoryArc.css";
import { useState } from "react";
import "../../everything.css";
import Nav from "../../components/nav/Nav";
import SubNav from "../../components/subnav/SubNav";

function StoryArc() {
  //UseState with variables that will be sent to database
  const [storyData, setStoryData] = useState({
    stasis: "",
    trigger: "",
    quest: "",
    surprise: "",
    critical: "",
    climax: "",
    reversal: "",
    resolution: "",
  });

  const handleChange = (e) => {
    setStoryData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(storyData);
  };

  return (
    <div className="arc-outer">
      <Nav />
      <SubNav subName="New 8 Point Story-Arc" />
      <div className="story-arc">
        <div className="arc-section">
          <h2 className="arc-title">Stasis</h2>
          <textarea
            type="text"
            id="stasis"
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
            onChange={handleChange}
            placeholder="The critical choice tends to be the protagonist's greatest obstacle. Write about this event and how it effects them."
          />
        </div>

        <div className="arc-section">
          <h2 className="arc-title">Climax</h2>
          <textarea
            type="text"
            id="climax"
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
            className="arc-text"
            onChange={handleChange}
            placeholder="Write about how the protagonist resolves the issue that they faced in the climax "
          />
        </div>
      </div>
      <button className="arc-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default StoryArc;
