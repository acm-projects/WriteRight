import React from "react";
import "./Grammar.css";
import Nav from "../../components/nav/Nav";

function Grammar() {
  return (
    <div className="grammar-outer">
      <Nav />
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
          <textarea
            className="grammar-box"
            placeholder="Import an existing story, or copy and paste one here and then click the button to check your grammar!"
          />
          <button className="grammar-submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Grammar;
