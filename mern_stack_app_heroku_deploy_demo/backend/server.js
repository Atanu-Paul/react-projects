const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const User = require("./model/user");
const connectDB = require("./dbcon");

const app = express();

const PORT = 8080;

connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => console.log(err));
});

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Express server Listing on Port: ${PORT}`);
});
