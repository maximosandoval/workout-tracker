// Build model in this file
//Outline how an end user places data in the app

const { Schema, model } = require("mongoose");

//Date Tracker
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        require: [true, "Please fill this out"],
      },

      name: {
        type: String,
        require: [true, "Please fill this out"],
      },

      duration: {
        type: Number,
        require: [true, "Please fill this out"],
      },

      weight: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      },
    },
  ],
});

module.exports = model('workout', workoutSchema);
