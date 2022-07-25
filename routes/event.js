const Event = require("../models/Event");
const router = require("express").Router();

// create an event
router.post("/create-event", (req, res, next) => {
  const { title, client, date, street, houseNumber, postcode } = req.body;
  Event.create({ title, client, date, street, houseNumber, postcode })
    .then((createdEvent) => {
      res.status(201).json(createdEvent);
    })
    .catch((err) => next(err));
});

// get an specific event
router.get("events/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => next(err));
});

module.exports = router;
