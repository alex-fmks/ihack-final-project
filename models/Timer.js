const { Schema, model } = require("mongoose");

const timerSchema = new Schema({
  starttime: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  duration: Number,
  title: String,
  role: String,
});

const Timer = model("Timer", timerSchema);

module.exports = Timer;
