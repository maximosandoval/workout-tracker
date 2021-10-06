//Initialization of variables
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/index")

//Mongo DB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose is running"))
  .catch((error) => console.log(error));

//middleware settings (server settings)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes)


//routing options
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

// app.get("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/stats.html"));
// });

// app.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/exercise.html"));
// });

//app listening
app.listen(PORT, () => console.log("I am your server and I am up and running"));

//API Routes
