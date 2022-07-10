const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to MongoDB");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
    res.send("welcome to home page");
});
app.get("/users", (req, res) => {
    res.send("welcome to user page");
});

app.listen(9000, () => {
    console.log("Backend server is running!");
});
