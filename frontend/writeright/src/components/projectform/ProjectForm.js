import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoginStore } from "../../stores/LoginStore";
import "./ProjectForm.css";

function ProjectForm({ setShowForm }) {
  const navigate = useNavigate();
  const globalUsername = useLoginStore((state) => state.globalUsername);
  const projId = useLoginStore((state) => state.projId);
  const setProjId = useLoginStore((state) => state.setProjId);

  const [projectData, setProjectData] = useState({
    title: "",
    username: globalUsername,
    contents: [],
  });

  let { title, username, contents } = projectData;

  const handleChange = (e) => {
    setProjectData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postUrl = `http://localhost:8080/projects`;

    axios
      .post(postUrl, projectData)
      .then(function (response) {
        console.log(`Response data: ${response.data._id}`);
        setProjId(response.data._id);
        console.log(`The proj id is ${projId}`);
        setShowForm(false);
        navigate(`/projects/${projectData.title}`);
      })
      .catch(function (error) {
        alert("Error, check console!");
        console.log(error);
      });
  };

  return (
    <div className="project-form">
      <form className="proj-inner-form">
        <p className="proj-form-title">Create a new Project!</p>
        <div className="proj-form-group">
          <input
            required
            type="text"
            className="form-field"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            placeholder="Project Name"
          />
        </div>

        <div className="proj-form-group">
          <button
            onClick={handleSubmit}
            type="submit"
            className="proj-form-btn"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
