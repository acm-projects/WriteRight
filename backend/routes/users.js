const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      username: req.body.username,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate username" });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (!user) {
    res.status(400);
    throw new Error("User does not exist!");
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    res.status(200);
    return res.json({ user: true });
  } else {
    res.status(400);
    throw new Error("Error, invalid password!");
    return res.json({ user: false });
  }
});

module.exports = router;
