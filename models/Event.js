const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: String,
  client: String,
  date: String,
  location: {
    street: String,
    houseNumber: String,
    postcode: String,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
