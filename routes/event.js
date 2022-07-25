const Event = require("../models/Event");
const router = require("express").Router();

// create a project
router.post("/", (req, res, next) => {
  const { title, client, date, street, houseNumber, postcode } = req.body;
  Event.create({ title, client, date, street, houseNumber, postcode })
    .then((createdEvent) => {
      res.status(201).json(createdEvent);
    })
    .catch((err) => next(err));
});
