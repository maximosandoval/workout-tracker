//Initialization of variables
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware settings (server settings)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routing options
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});

//app listening
app.listen(PORT, () => {
  console.log("some stuff, I'm living");
});
