require("dotenv").config();

const express = require("express");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);

const usersRouter = require("./routes/users");
const projectsRouter = require("./routes/projects");
const grammarRouter = require("./routes/grammar");
const blankSheetsRouter = require("./routes/blanksheets");
const storyArcRouter = require("./routes/storyarcs");
const sheetsRouter = require("./routes/sheets");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/grammar", grammarRouter);
app.use("/sheets", sheetsRouter);
app.use("/blanksheets", blankSheetsRouter);
app.use("/storyarcs", storyArcRouter);

app.listen(8080, () => {
  console.log("server started on port 8080");
});
