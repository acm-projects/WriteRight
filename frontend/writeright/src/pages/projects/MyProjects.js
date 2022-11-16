import React, { useEffect } from "react";
import "../../everything.css";
import "./MyProjects.css";
import { useState } from "react";
import axios from "axios";
import Nav from "../../components/nav/Nav";
import { useLoginStore } from "../../stores/LoginStore";
import ProjectForm from "../../components/projectform/ProjectForm";
import ProjectButton from "../../components/projectButton/ProjectButton";

function MyProjects() {
  const globalUsername = useLoginStore((state) => state.globalUsername);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userProjs, setUserProjs] = useState();

  const handleClick = (e) => {
    setShowForm((current) => !current);
  };

  useEffect(() => {
    console.log(`My username is ${globalUsername}`);
    const getUrl = `http://localhost:8080/projects/${globalUsername}`;

    axios
      .get(getUrl)
      .then(function (response) {
        console.log("Data has been fetched!");
        console.log(response.data);
        setUserProjs(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error fetching projects, please check console and try again!");
      });
  }, [userProjs]);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading Projects . . .</h2>
      </div>
    );
  }

  return (
    <div className="bgRainbowWhite">
      <Nav />
      <div className="my-projects">
        <button onClick={handleClick} id="new-proj-btn" className="proj-btn">
          <p className="proj-btn-text-white">+ New Project</p>
        </button>
        {showForm && <ProjectForm setShowForm={setShowForm} />}
        {userProjs.map((project) => (
          <div className="project-btn" key={project._id}>
            <ProjectButton name={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
