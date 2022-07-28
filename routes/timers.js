const Timer = require("../models/Timer");
const Event = require("../models/Event");
const router = require("express").Router();

// create a timer
router.post("/", (req, res, next) => {
  const { starttime, duration, title, eventId, role } = req.body;
  Timer.create({ starttime, duration, title, role })
    .then((createdTimer) => {
      Event.findByIdAndUpdate(eventId, {
        $push: { timers: createdTimer },
      }).then(() => {
        console.log("Event updated");
      });
      res.status(201).json(createdTimer);
    })
    .catch((err) => next(err));
});

router.post("/edit", (req, res, next) => {
  const { starttime, duration, title, timerId, role } = req.body;
  Timer.findByIdAndUpdate(timerId, { starttime, duration, title, role })
    .then(() => {
      res.status(200).json("Timer updated");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res, next) => {
  Timer.findById(req.params.id)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => next(err));
});

module.exports = router;
