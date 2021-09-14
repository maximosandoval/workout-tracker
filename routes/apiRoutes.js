// The user should be able to:
// Add exercises to the most recent workout plan. - PUT
// Add new exercises to a new workout plan. - POST
// View the combined weight of multiple exercises from the past seven workouts on the stats page. - GET
// View the total duration of each workout from the past seven workouts on the stats page. - GET

// routes
const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout.js");

// Add exercises PUT
router.put("/api/workouts/:id", async (req, res) => {
  try {
    const addExercise = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          exercises: req.body,
        },
      },
      { new: true }
    );
    res.json(addExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add new exercises POST
router.post("/api/workouts", async (req, res) => {
  try {
    const createWorkout = await Workout.create(req.body);
    res.json(createWorkout);
  } catch (err) {
    res.json(err);
  }
});

// View combined weight GET
router.get("/api/workouts", async (req, res) => {
  try {
    const totalDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);
    res.json(totalDuration);
  } catch (err) {
    res.status(400).json(err);
  }
});

// View total duration GET
router.get("/api/workouts/range", async (req, res) => {
  // console.log('route hit')
  try {
    const totalDuration = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
      .sort({ _id: 1 })
      .limit(7);
    res.json(totalDuration);
    console.log(totalDuration);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
