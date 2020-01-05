import React, { Component } from "react";
import TabMenu from './TabMenu';
import JobResults from "./JobResults";
import SearchQueries from "../search/SearchQueries";
import Loading from '../Loading';
import axios from "axios";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      jobs: [],
      queries: false,
      querySelected: false,
      jobSelected: false,
      loading: true,
      //move to search query component
      query: "",
      queryId: "",
    };
  }
  
  componentDidMount() {
    axios
      .get("https://jobbot-server.herokuapp.com/jobs/")
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

  handleClickQueriesButton = () => {
    this.setState(
      { 
        queries: true, 
        jobSelected: false, 
        querySelected: false, 
      }
    );
  };

  //move to search query component
  handleClickQueryRow = row => {
    this.setState(
      { 
        querySelected: true, 
        query: row.query, 
        queryId: row._id 
      }
    );
  };
  
  handleClearQueryPage = () => {
    this.setState({ querySelected: false });
  };

  // move to search query component
  handleChangeQuery = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  handleClickJobsButton = () => {
    this.setState(
      { 
        queries: false, 
        jobSelected: false, 
        querySelected: false, 
      }
    );
  };

  handleClickJobRow = () => {
    this.setState({ jobSelected: true });
  };

  manipulateJobData = (jobs) => {
    jobs.map(job => {
      //move truncation to job results component
      job.title = this.truncate(job.title, 3);
      job.timeStamp = new Date(job.timeStamp).toLocaleDateString();
      return job;
    });
    return jobs;
  }

  render() {
    let content;

    if(this.state.loading) {
      content = <Loading />
    } else if (!this.state.queries) {
        content = (
          <JobResults
            jobs={this.state.jobs}
            onClickJobRow={this.handleClickJobRow}
            jobSelected={this.state.jobSelected}
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
              onChangeQuery={this.handleChangeQuery}
              isAdmin={this.props.isAdmin}
              onError={this.props.onError}
            />
        );
    }

    return (
      <div>
        <TabMenu
          onClickQueries={this.handleClickQueriesButton}
          onClickJobs={this.handleClickJobsButton}
          error={this.state.error}
        />
        {content}
      </div>
    );
  }
}

export default ResultsContainer;
