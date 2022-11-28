const mongoose = require("mongoose");

const Grammar = new mongoose.Schema(
  {
    story: { type: String, required: true },
  },
  { collection: "Grammar" }
);

const model = mongoose.model("GrammarData", Grammar);

module.exports = model;
