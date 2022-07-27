const Timer = require("../models/Timer");
const router = require("express").Router();

// create a timer
router.post("/", (req, res, next) => {
  const { starttime, duration, title } = req.body;
  Timer.create({ starttime, duration, title })
    .then((createdTimer) => {
      res.status(201).json(createdTimer);
    })
    .catch((err) => next(err));
});

module.exports = router;
