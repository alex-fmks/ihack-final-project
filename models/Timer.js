const { Schema, model } = require("mongoose");

let dtFormat = new Intl.DateTimeFormat("de-DE", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

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
