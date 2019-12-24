import React from "react";
import Job from './Job';
const DataTable = require("react-data-components").DataTable;
require('../../stylesheets/job-table.css');

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
        </div>
    } else {
        content = 
          <div>
            <Job job={this.state}/>
          </div>
    }

    return (
      //refactor to be styled component
      <div
        style={{
          height: 600,
          backgroundColor: "#f9f9f9",
          padding: 40,
          borderRadius: 5,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        {content}
      </div>
    );
  }
}


export default JobResults;
