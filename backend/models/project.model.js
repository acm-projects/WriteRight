const mongoose = require("mongoose");

const Project = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    //array of the ids of the sheets contained with in it
    //contents: { type: [Object], required: true },
    contents: { type: [String], required: true },
  },
  { collection: "Projects" }
);

const model = mongoose.model("ProjectData", Project);

module.exports = model;
