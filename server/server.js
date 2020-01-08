const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_CONNECTION;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to DB");
});

const searchRouter = require("./routes/search");
const jobRouter = require("./routes/jobs");
const skillsRouter = require("./routes/skills")

app.use("/skills", skillsRouter)
app.use("/search", searchRouter);
app.use("/jobs", jobRouter);
app.use

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});