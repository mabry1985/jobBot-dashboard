const barGraph = require('../graphs/barGraph');
const mongoose = require('mongoose');
require("dotenv").config();

beforeAll(async () => {

  const uri = process.env.MONGO_CONNECTION;

  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("Connected to DB");
  });
});

it("should give correct skills array length", async () => {
  const skills = await barGraph.loadSkillsQuery();
  expect(skills.length).toBe(5);
});

it("should return an object", async () => {
  const query = { query: "React"}
  const object = await barGraph.createBarGraphData(query.query)
  expect(object.query).toBe("React")
})

it("should return an array of data", async () => {
  const results = await barGraph.barGraphData()
  const data = await Promise.all(results);
  expect(data.length).toBe(5);
})

