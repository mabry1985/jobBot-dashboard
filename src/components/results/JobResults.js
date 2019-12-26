import React from "react";
import Job from './Job';
import styled from "styled-components";
const DataTable = require("react-data-components").DataTable;

const StyledDiv = styled.div`
  div.container {
    max-width: 500px;
  }

  div.col-xs-4 > div:nth-child(1) {
    display: none;
  }

  table {
    background-color: white;
  }

  tr th {
    color: #f9f9f9;
    background-color: #428bca;
  }

  tr:hover {
    cursor: pointer;
  }
`;

const ResultsDiv = styled.div`
  height: 600px;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

class JobResults extends React.Component {
  constructor(props){
    super(props);

    this.state={
      _id: '', 
      title: '',
      postedBy: '',
      jobBoardSite: '',
      description: '',
      applyUrl: '',
      timeStamp: ''
    }
  }
  
  columns = [
    { title: 'Name', prop: 'title' },
    { title: 'Posted By', prop: 'postedBy' },
    { title: 'Job Board', prop: 'jobBoardSite' },
    { title: 'Date', prop: 'timeStamp'}
  ];
 
  selectRow = (row) => {
    this.props.onClickJobRow();
    this.setState(
      { 
        _id: row._id,
        title: row.title,
        postedBy: row.postedBy,
        jobBoardSite: row.jobBoardSite,
        description: row.description,
        applyUrl: row.applyUrl,
        timeStamp: row.timeStamp, 
      }
    );
  };
  
  buildRowOptions = (row) => {
    return {
      onClick: this.selectRow.bind(this, row),
    };
  }

  render(){
    let content;
    
    if (!this.props.jobSelected){
      content =        
        <div>
          <h5 style={{ marginLeft: 14 }}>
            Total Listings: {this.props.jobs.length}
          </h5>
          <StyledDiv>
          <DataTable
            buildRowOptions={this.buildRowOptions}
            className="container"
            style={{ height: 500 }}
            keys="_id"
            columns={this.columns}
            initialData={this.props.jobs}
            initialPageLength={5}
            initialSortBy={{ prop: "timeStamp", order: "descending" }}
            pageLengthOptions={[5, 10, 20, 50]}
          />
          </StyledDiv>
        </div>
    } else {
        content = 
          <StyledDiv>
            <Job job={this.state}/>
          </StyledDiv>
    }

    return (
      <ResultsDiv>
        {content}
      </ResultsDiv>
    );
  }
}


export default JobResults;
