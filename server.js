const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

//Connect the database
connectDB();

// This is handle the cors requests error
app.use(cors());

//This is handle Unicode encoding errors
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API running");
});

// Define routes

app.use("/api/users", require("./route/api/users"));
app.use("/api/auth", require("./route/api/auth"));
app.use("/api/profile", require("./route/api/profile"));
app.use("/api/posts", require("./route/api/posts"));

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
