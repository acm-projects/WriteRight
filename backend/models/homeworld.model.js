const mongoose = require("mongoose");

const HomeWorld = new mongoose.Schema(
  {
    title: { type: String, required: true },
    projectID: { type: String, required: true },
    //come back and add this :)
  },
  { collection: "Sheets" }
);

const model = mongoose.model("HomeWorldData", HomeWorld);

module.exports = model;
