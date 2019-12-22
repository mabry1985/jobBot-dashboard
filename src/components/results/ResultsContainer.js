import React, { Component } from "react";
// import JobFilters from "./JobFilters"
import JobResults from "./JobResults"
import axios from "axios";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endpoint: 'main',
      jobs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/jobs/")
      .then(response => {
        console.log(response);
        this.setState({ jobs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container" style={{maxWidth:"500px"}}>
        {/* <JobFilters/> */}
        <JobResults  jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default ResultsContainer;
