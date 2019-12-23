import React from "react";
var DataTable = require("react-data-components").DataTable;
require('../../stylesheets/job-table.css');
require("../../stylesheets/table-twbs.css");

const JobResults = props => {
  
  const columns = [
    { title: 'Name', prop: 'title' },
    { title: 'Posted By', prop: 'postedBy' },
    { title: 'Job Board', prop: 'jobBoardSite' },
    { title: 'Date', prop: 'timeStamp'}
  ];

    return (
        <DataTable
          className="container"
          keys="_id"
          columns={columns}
          initialData={props.jobs}
          initialPageLength={5}
          initialSortBy={{ prop: "timeStamp", order: "descending" }}
          pageLengthOptions={[5, 10, 20, 50]}
        />
    );
}


export default JobResults;
