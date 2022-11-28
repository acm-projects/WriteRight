import React from "react";
import { useState, useEffect } from "react";
import "./ProjectButton.css";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../stores/LoginStore";
import axios from "axios";

function SheetButton({ mongoId, name }) {
  const sheetId = useLoginStore((state) => state.sheetId);
  const setSheetId = useLoginStore((state) => state.setSheetId);
  const [runEff, setRunEff] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    console.log(`The mongoID is ${mongoId}`);
    console.log(`The sheet id is currently ${sheetId}`);
    setSheetId(mongoId);
    getReq(mongoId);
    console.log(`The sheet id is ${sheetId}`);
  };

  const getReq = async (id) => {
    const getUrl = `http://localhost:8080/blanksheets/${id}`;

    axios
      .get(getUrl)
      .then(function (response) {
        console.log("Data has been fetched!");
        console.log(response.data);
        navigate(`/sheets/${id}`);
      })
      .catch(function (err) {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <div onClick={handleClick} className="sheet-btn">
      <p className="project-btn-text">{name}</p>
    </div>
  );
}

export default SheetButton;
