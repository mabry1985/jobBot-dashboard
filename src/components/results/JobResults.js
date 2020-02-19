import React from "react";
import Job from './Job';
import styled from "styled-components";
const DataTable = require("react-data-components").DataTable;

const TableDiv = styled.div`
  div.container {
    max-width: 600px;
    position: relative;
    top: 36px;
  }

  div.col-xs-4 > div:nth-child(1) {
    display: none;
  }

  div.col-xs-4 {
    color: #428bca;
    margin-top: 30px;
  }

  table {
    background-color: white;
  }

  tr th {
    color: #f9f9f9;
    background-color: #428bca;
  }

  th:nth-child(1),
  th:nth-child(2) {
    width: 290px;
  }

  h5 {
    text-align: center;
    margin-top: 30px;
    color: #428bca;
  }
`;

const JobDiv = styled.div`
  div.container {
    max-width: 600px;
    position: relative;
    top: 80px;
  }

  div.col-xs-4 > div:nth-child(1) {
    display: none;
  }
`;

const ResultsDiv = styled.div`
  height: 650px;
  background-color: #f9f9f9;
  padding: 25px;
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
      createdAt: '',
    }
  }
  
  columns = [
    { title: 'Name', prop: 'title' },
    { title: 'Posted By', prop: 'postedBy' },
    { title: 'Job Board', prop: 'jobBoardSite' },
    { title: 'Date', prop: 'createdAt'}
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
        createdAt: row.createdAt, 
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
      content = (

          <TableDiv>
            <DataTable
              buildRowOptions={this.buildRowOptions}
              className="container"
              keys="_id"
              columns={this.columns}
              initialData={this.props.jobs}
              initialPageLength={6}
              initialSortBy={{ prop: "createdAt", order: "descending" }}
            />
            <h5>
              Total Listings
              <br/>
              {this.props.jobs.length}
            </h5>
          </TableDiv>
      );
    } else {
        content = 
          <JobDiv>
            <Job job={this.state}/>
          </JobDiv>
    }

    return (
      <ResultsDiv>
        {content}
      </ResultsDiv>
    );
  }
}


export default JobResults;
