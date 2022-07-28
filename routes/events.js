const Event = require("../models/Event");
const router = require("express").Router();

// create an event
router.post("/", (req, res, next) => {
  const { title, client, date, location } = req.body;
  Event.create({ title, client, date, location })
    .then((createdEvent) => {
      res.status(201).json(createdEvent);
    })
    .catch((err) => next(err));
});

// get an specific event
router.get("/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .populate("timers")
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => next(err));
});

router.get("/", (req, res, next) => {
  Event.find()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((err) => next(err));
});

module.exports = router;
