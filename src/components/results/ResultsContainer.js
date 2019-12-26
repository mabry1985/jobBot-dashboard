import React, { Component } from "react";
import TabMenu from './TabMenu';
import JobResults from "./JobResults";
import SearchQueries from "../search/SearchQueries";
import Admin from "../Admin";

import axios from "axios";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queries: false,
      querySelected: false,
      adminSelected: false,
      //move to search query component
      query: "",
      queryId: "",
      //
      jobSelected: false,
      jobs: [],
      isAdmin: false,
      error: "",
      password: '',
    };
  }

  //move function to job results component
  truncate(string, length) {
    let strArray = string.split(" ");
    if (strArray.length < length) {
      return string;
    } else {
        strArray.splice(length, strArray.length);
        const ellipsis = strArray.pop() + "...";
        strArray.push(ellipsis);  
        string = strArray.join(" ");
        return string;
    }
  }

  handleClickQueries = () => {
    this.setState(
      { 
        queries: true, 
        jobSelected: false, 
        querySelected: false, 
        adminSelected: false
      }
    );
  };

  handleClickQueryRow = row => {
    this.setState(
      { 
        querySelected: true, 
        //move to search query component
        query: row.query, 
        queryId: row._id 
        //
      }
    );
  };
  
  handleClearQueryPage = () => {
    this.setState({ querySelected: false });
  };

  // move to search query component
  handleChangeQuery(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleClickJobs = () => {
    this.setState(
      { 
        queries: false, 
        jobSelected: false, 
        querySelected: false, 
        adminSelected: false
      }
    );
  };

  handleClickJobRow = () => {
    this.setState({ jobSelected: true });
  };

  handleClickAdmin = () => {
    this.setState(
      {
        queries: false,
        jobSelected: false,
        querySelected: false,
        adminSelected: true
      }
    );
  }

  handlePasswordSwitch = () => {
    this.setState(
      {
        isAdmin: true,
        adminSelected: false
      }
    );
  }

  handleError = async (err) => {
    this.setState(
      {
        error: err
      }
    );
    await this.sleep(3000);
    this.setState(
      {
        error: ""
      }
    );
  }

  manipulateJobData(jobs) {
    jobs.map(job => {
      //move truncation to job results component
      job.title = this.truncate(job.title, 3);
      job.timeStamp = new Date(job.timeStamp).toLocaleDateString();
      return job;
    });
    return jobs;
  }

  async sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }


  componentDidMount() {
    axios
      .get("http://localhost:5000/jobs/")
      .then(response => {
        this.setState({
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

    if (!this.state.queries && !this.state.adminSelected) {
      content = (
        <JobResults
          jobs={this.state.jobs}
          onClickJobRow={this.handleClickJobRow}
          jobSelected={this.state.jobSelected}
        />
      );
    } else if (this.state.adminSelected) {
      content = (
        <Admin
          onPasswordSwitch={this.handlePasswordSwitch}
          onError={this.handleError}
        />
      );
    } else {
      content = (
        <SearchQueries
          onClickQueryRow={this.handleClickQueryRow}
          onClearQueryPage={this.handleClearQueryPage}
          querySelected={this.state.querySelected}
          query={this.state.query}
          queryId={this.state.queryId}
          onChange={this.handleChangeQuery}
          isAdmin={this.state.isAdmin}
          onError={this.handleError}
        />
      );
    }

    return (
      <div>
        <TabMenu
          onClickQueries={this.handleClickQueries}
          onClickJobs={this.handleClickJobs}
          onClickAdmin={this.handleClickAdmin}
          error={this.state.error}
          isAdmin={this.state.isAdmin}
        />
        {content}
      </div>
    );
  }
}

export default ResultsContainer;
