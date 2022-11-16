import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectButton.css";

function ProjectButton({ name }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/projects/${name}`);
  };

  return (
    <div onClick={handleClick} className="project-btn">
      <p className="project-btn-text">{name}</p>
    </div>
  );
}

export default ProjectButton;
