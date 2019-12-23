import React, { Component } from "react";
import TabMenu from './TabMenu';
import JobResults from "./JobResults";
import SearchQueries from "./SearchQueries";

import axios from "axios";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queries: false,
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

  handleClickQueries = () => {
    this.setState({ queries: true })
  }

  handleClickJobs = () => {
    this.setState({ queries: false })
  }

  manipulateJobData(jobs){
    jobs.map(job => {
      job.title = this.truncate(job.title, 3);    
      job.timeStamp = new Date(job.timeStamp).toLocaleDateString();
      return job
    });
    return jobs
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/jobs/")
      .then(response => {
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
    let content;
    if(!this.state.queries){
      content = <JobResults jobs={this.state.jobs} />;
    } else {
      content = <SearchQueries/>
    }
    return (
      <div>
        <TabMenu 
          onClickQueries={this.handleClickQueries}
          onClickJobs={this.handleClickJobs}/>
        {content}
      </div>
    );
  }
}

export default ResultsContainer;
