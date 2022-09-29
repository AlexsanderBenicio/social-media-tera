const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv-safe").config();

const db = require("./database/database");
const userRoutes = require("./routes/userRoutes");

db.connect();

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
