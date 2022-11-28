import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../everything.css";
import "./SingleProject.css";
import { useLoginStore } from "../../stores/LoginStore";
import axios from "axios";
import Nav from "../../components/nav/Nav";

function SingleSheet({ mongoId, name }) {
  const navigate = useNavigate();
  let { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  //const [isLoading, setIsLoading] = useState(true);
  const parentProject = useLoginStore((state) => state.parentProject);
  const setParentProject = useLoginStore((state) => state.setParentProject);
  const sheetId = useLoginStore((state) => state.sheetId);
  const setSheetId = useLoginStore((state) => state.setSheetId);

  useEffect(() => {
    const getUrl = "";
  }, []);

  return <div>SingleSheet</div>;
}

export default SingleSheet;
