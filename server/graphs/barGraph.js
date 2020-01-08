const BarGraph = require('../models/BarGraph');
const JobBoard = require('../models/JobBoard')
const SkillsQuery = require('../models/SkillsQuery')

async function createBarGraphData(skillsQuery) {
  const jobs = await JobBoard.find({ "description":{"$regex": skillsQuery, "$options": "i" } });
  let job;
  const barGraphDB = await BarGraph.findOne({ query: [skillsQuery] });
    if (!barGraphDB) {
      const barGraph = new BarGraph(
        {
          query: skillsQuery,
          count: jobs.length
        }
      );  
      barGraph.save();
      job = barGraph;
      return job;
    } else {
        barGraphDB.overwrite(
          { 
            query: skillsQuery,
            count: jobs.length 
          }
        );
        await barGraphDB.save();
        job = barGraphDB;
        return job;
    }
}

async function loadSkillsQuery() {
  const skills = await SkillsQuery.find();
  return skills
}

async function barGraphData(){
  try {
    const skillsArray = await loadSkillsQuery();
    const results = skillsArray.map(async el => {
      const result = await createBarGraphData(el.query);
      return result
    })
    return results
  } catch (error) {
    console.error(error)
  }
}

module.exports={
  loadSkillsQuery,
  barGraphData,
  createBarGraphData
}


