const mongoose = require("mongoose");

const CharacterLog = new mongoose.Schema(
  {
    title: { type: String, required: true },
    //: {type: String, required: true},
    projectID: { type: String, required: true },

    //come back and add this :)
  },
  { collection: "Sheets" }
);

const model = mongoose.model("CharacterLogData", CharacterLog);

module.exports = model;
