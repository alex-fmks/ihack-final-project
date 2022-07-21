const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/signup", (req, res, next) => {
  const { email, password, username } = req.body;
  if (email === "" || password === "" || username === "") {
    res.status(400).json({ message: "Please provide all credentials" });
    return;
  }

  if (password.length < 5) {
    res.status(400).json({ message: "Password must be min 5 chars long" });
    return;
  }

  User.findOne({ email }).then((foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // hash password
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    // create user
    return User.create({ email, password: hashedPassword, username })
      .then((createdUser) => {
        const { email, username, _id } = createdUser;
        const user = { email, username, _id };
        res.status(201).json({ user: user });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  });
});

module.exports = router;
