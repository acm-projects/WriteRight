const express = require("express");
const router = express.Router();
const util = require("util");
const User = require("../models/user.model");
const Project = require("../models/project.model");

//Creating a new project
router.post("/", async (req, res) => {
  const userProject = new Project({
    title: req.body.title,
    username: req.body.username,
    contents: req.body.contents,
  });

  try {
    const newProjectData = await userProject.save();
    res.status(201).json(newProjectData);
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate project title" });
  }
});

//Getting all projects for a single user
router.get("/:username", getUserProjects, (req, res) => {
  res.status(200).json(res.projectInput);
});

//Updating an existing project
/*router.patch('/update/:id', getSingleProject, async (req, res) => {
    if(req.body.title != null) {
        res.project.title = req.body.title
    }

    if(req.body.contents != null) {
        res.project.contents = req.body.contents
    }
    try {
        const updatedProject = await res.project.save()
        res.json(updatedProject)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})*/

router.patch("/update/:id", getSingleProject, async (req, res) => {
  const project = await Project.findById(req.params.id);
  console.log(`The request body is ${req.body.id}`);
  if (!project) {
    res.status(400);
    throw new Error("Project not found!");
  }
  if (!req.body.id) {
    res.status(400);
    throw new Error(`Invalid request body! ID is currently: ${req.body.id}`);
  }

  try {
    project.contents.push(req.body.id);
    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  console.log(`The projects contents is currently ${project.contents}`);
  console.log(`The projects title is currently ${project.title}`);
});

async function getUserProjects(req, res, next) {
  let projectInput;
  try {
    projectInput = await Project.find({ username: req.params.username });
    if (projectInput == null) {
      return res
        .status(404)
        .json({ message: "Cannot find any projects for user" });
    }
    projectInput.sort((a, b) =>
      a.title > b.title ? 1 : a.title < b.title ? -1 : 0
    );
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.projectInput = projectInput;
  next();
}

async function getSingleProject(req, res, next) {
  let project;
  try {
    project = await Project.findById(req.params.id);
    if (project == null) {
      return res
        .status(404)
        .json({ message: "Cannot find project associated with id" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.project = project;
  next();
}

module.exports = router;
