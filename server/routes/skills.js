const router = require("express").Router();
const barGraph = require("../graphs/barGraph");
const Skill = require("../models/SkillsQuery");

router.route("/").get( async (req, res) => {
  const results = await barGraph.barGraphData()
  const data = await Promise.all(results);
  Skill.find()
    .then(skills => res.json(skills))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const query = req.body.query;

  const newSkill = new Skill({
    query
  });

  newSkill
    .save()
    .then(() => res.json("Skill added"))
    .catch(err => res.status(400).json("Error " + err));
});

router.route("/bar-graph").get(async (req, res) => {
  try {
    const results = await barGraph.barGraphData();
    const data = await Promise.all(results);
    res.json(data);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
