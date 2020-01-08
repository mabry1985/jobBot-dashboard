const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const barGraphSchema = new Schema(
  {
    query: { type: String, required: true },
    count: { type: Number, required: true },
  }
);

const BarGraph = mongoose.model("BarGraph", barGraphSchema);

module.exports = BarGraph;
