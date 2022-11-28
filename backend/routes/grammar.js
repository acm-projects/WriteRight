const dotenv = require("dotenv").config({ path: "../.env" });
const express = require("express");
const router = express.Router();
const Grammar = require("../models/grammar.model");
const axios = require("axios");

router.post("/", async (req, res) => {
  console.log(req.body.story);
  const { story } = req.body.story;

  if (!req.body.story) {
    res.status(400);
    throw new Error("Can't submit empty form!");
  }

  const grammarText = await Grammar.create({ story: req.body.story });

  const encodedParams = new URLSearchParams();
  encodedParams.append("text", grammarText.story);
  const apiKey = process.env.API_KEY;

  const options = {
    method: "POST",
    url: "https://grammarbot.p.rapidapi.com/check",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": `${apiKey}`,
      "X-RapidAPI-Host": "grammarbot.p.rapidapi.com",
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(400);
      console.log(error);
      throw new Error("Error has been logged in console!");
    });
});

module.exports = router;
