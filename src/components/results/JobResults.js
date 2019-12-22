import React from "react";
var DataTable = require("react-data-components").DataTable;
// require("../../stylesheets/table-twbs.css");

// import { Link } from "react-router-dom";

// const Job = props => {

//   const truncate = (length, string) => {
//     const arr = string.split(' ');
//     let truncString = string
//     if (arr.length > length){
//       truncString = arr.splice(0, length)
//                        .concat('...')
//                        .join(' ');
      
//       return truncString;
//     }
//       return truncString
//   } 

//   return (
//     <div className="container">
//       <h4>{truncate(5, props.job.title)}</h4>
//       <h5>{props.job.postedBy}|{props.job.jobBoardSite}</h5>
//      </div>
//   )
//   };

const JobResults = props => {
  
  const columns = [
    { title: 'Name', prop: 'title'  },
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
