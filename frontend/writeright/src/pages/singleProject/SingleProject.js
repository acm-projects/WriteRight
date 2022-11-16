import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../everything.css";
import "./SingleProject.css";
import axios from "axios";
import Nav from "../../components/nav/Nav";

function SingleProject() {
  let { id } = useParams();

  return (
    <div className="bgRainbowWhite">
      <Nav>
        <div className="my-sheets"></div>
      </Nav>
    </div>
  );
}

export default SingleProject;
