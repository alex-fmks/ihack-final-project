const router = require("express").Router();
const { IconCloudFog } = require("@tabler/icons");
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

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (username === "" || password === "") {
    res.status(400).json({ message: "Please provide credentials" });
  }
  User.findOne({ username })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(400).json({ message: "User does not exist" });
      }
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
      if (passwordCorrect) {
        const { _id, email, name } = foundUser;
        const payload = { _id, email, name };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });
        console.log(authToken);
        return res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: "Username or password incorrect" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

router.get("/verify", (req, res, next) => {
  console.log(`req.payload`, req.payload);
  res.status(200).json(req.payload);
});

module.exports = router;
