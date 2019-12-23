import React, { Component } from "react";
// import JobFilters from "./JobFilters"
import JobResults from "./JobResults"

import axios from "axios";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endpoint: 'main',
      loading: true,
      jobs: []
    };
  }

  truncate(string, length) {
    let strArray = string.split(' ');
    if (strArray.length < length){
      return string;
    } else {
      strArray.splice(length, strArray.length);
      const ellipsis = strArray.pop() + '...';
      strArray.push(ellipsis);
      string = strArray.join(' ');
      return string;
    }
  }

  manipulateJobData(jobs){
    jobs.map(job => {
      job.title = this.truncate(job.title, 4);    
      job.timeStamp = new Date(job.timeStamp).toLocaleDateString();
      return job
    });
    return jobs
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/jobs/")
      .then(response => {
        console.log(response);
        this.setState(
          { 
           jobs: this.manipulateJobData(response.data),
           loading: false
          });
      })
      .catch(error => {
        console.log(error);
      });

    
  }

  render() {
    return (
      <div className="container">
        {/* <JobFilters/> */}
        <JobResults  jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default ResultsContainer;
