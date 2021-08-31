//Initialization of variables
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//Mongo DB Connection
mongoose
  .connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose is running"))
  .catch((error) => console.log(error));

//middleware settings (server settings)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routing options
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});

//app listening
app.listen(PORT, () => console.log("I am your server and I am up and running"));
