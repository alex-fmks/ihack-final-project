const Event = require("../models/Event");
const router = require("express").Router();

// create a project
router.post("/create-event", (req, res, next) => {
  const { title, client, date, street, houseNumber, postcode } = req.body;
  Event.create({ title, client, date, street, houseNumber, postcode })
    .then((createdEvent) => {
      res.status(201).json(createdEvent);
    })
    .catch((err) => next(err));
});

module.exports = router;
