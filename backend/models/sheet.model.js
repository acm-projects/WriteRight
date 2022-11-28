const extendSchema = require("mongoose-extend-schema");
const mongoose = require("mongoose");

const SheetSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sheetType: { type: Number, required: true },
  },
  { collection: "Sheets" }
);

const model = mongoose.model("SheetData", SheetSchema);

module.exports = model;
