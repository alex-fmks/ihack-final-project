const { Schema, model } = require("mongoose");

const timerSchema = new Schema({
  starttime: Date,
  duration: Number,
  name: String,
});

const Timer = model("Timer", timerSchema);

module.exports = Timer;
