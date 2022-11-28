const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");
const SheetSchema = require("./sheet.model");

const BlankSheet = extendSchema(
  SheetSchema,
  {
    title: { type: String, required: true },
    sheetType: { type: Number, required: true },
    content: { type: String, required: true },
  },
  { collection: "Sheets" }
);

const model = mongoose.model("BlankSheetData", BlankSheet);

module.exports = model;
