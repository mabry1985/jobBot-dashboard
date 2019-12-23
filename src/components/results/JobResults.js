import React from "react";
const DataTable = require("react-data-components").DataTable;
require('../../stylesheets/job-table.css');

class JobResults extends React.Component {
  constructor(props){
    super(props);

    this.state={
      selected: ''
    }
  }
  
  columns = [
    { title: 'Name', prop: 'title' },
    { title: 'Posted By', prop: 'postedBy' },
    { title: 'Job Board', prop: 'jobBoardSite' },
    { title: 'Date', prop: 'timeStamp'}
  ];
 
  selectRow = (row) => {
    this.setState({ selected: row._id });
  };
  
  buildRowOptions = (row) => {
    return {
      onClick: this.selectRow.bind(this, row),
      className: this.state.selected === row._id ? 'active' : null
    };
  }
  
  render(){
    return (
      <div
        style={{
          height: 600,
          backgroundColor: "#F8F8FF",
          padding: 40,
          borderRadius: 5,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
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
    );
  }
}


export default JobResults;
