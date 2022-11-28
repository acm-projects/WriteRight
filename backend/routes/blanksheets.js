const express = require("express");
const SheetSchema = require("../models/sheet.model");
const BlankSheet = require("../models/blanksheet.model");
const router = express.Router();

//Creating a new blank sheet
router.post("/", async (req, res) => {
  const blankSheet = new BlankSheet({
    title: req.body.title,
    sheetType: req.body.sheetType,
    content: req.body.content,
  });

  try {
    const newBlankSheet = await blankSheet.save();
    res.status(201).json(newBlankSheet);
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "error creating blank sheet" });
  }
});

//Creating a new blank sheet
// router.post('/', async (req, res) => {
//     const blankSheet = new SheetSchema ({
//         title: req.body.title,
//         sheetType: req.body.sheetType,
//         content: req.body.content,
//     })

//     try {
//         const newBlankSheet = await blankSheet.save()
//         res.status(201).json(newBlankSheet)
//     }
//     catch (err) {
//         console.log(err)
//         res.json({status: 'error', error: 'error creating blank sheet'})
//     }
// })

//Getting blank sheet by sheet id
router.get("/:id", getSingleBlankSheet, async (req, res) => {
  console.log(`Res is ${res.blanksheet}`);
  res.status(200).json(res.blanksheet);
});

async function getSingleBlankSheet(req, res, next) {
  let blanksheet;
  console.log(`The params are ${req.params.id}`);
  try {
    blanksheet = await BlankSheet.findById(req.params.id);
    if (blanksheet == null) {
      return res
        .status(404)
        .json({ message: "Cannot find blanksheet associated with id" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.blanksheet = blanksheet;
  next();
}

module.exports = router;
