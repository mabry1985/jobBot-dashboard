const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skillsQuerySchema = new Schema({
  query: { type: String, required: true },
});

const SkillsQuery = mongoose.model("SkillsQuery", skillsQuerySchema);

module.exports = SkillsQuery;
