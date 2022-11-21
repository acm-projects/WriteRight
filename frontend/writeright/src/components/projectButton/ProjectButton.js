import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectButton.css";
import { useLoginStore } from "../../stores/LoginStore";

function ProjectButton({ mongoId, name }) {
  const projId = useLoginStore((state) => state.projId);
  const setProjId = useLoginStore((state) => state.setProjId);
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(`The mongoID is ${mongoId}`);
    setProjId(mongoId);
    console.log(`The project id is ${projId}`);
    navigate(`/projects/${name}`);
  };

  return (
    <div onClick={handleClick} className="project-btn">
      <p className="project-btn-text">{name}</p>
    </div>
  );
}

export default ProjectButton;
