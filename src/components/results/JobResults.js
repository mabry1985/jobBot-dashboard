import React from "react";
// import { Link } from "react-router-dom";

const Job = props => {

  const truncate = (length, title) => {
    const titleArray = title.split('');
    console.log(titleArray.length)
    const truncTitle = titleArray.splice(length, titleArray.length).concat('...');
    return truncTitle
  } 

  return (
    <div className="container">
      <h4>{truncate(5, props.job.title)}</h4>
      <h5>{props.job.postedBy}|{props.job.jobBoardSite}</h5>
     </div>
  )
  };

const JobResults = props => {

  const jobList = () => {
    return props.jobs.map(currentjob => {
      return (
        <Job
          job={currentjob}
          key={currentjob._id}
        />
      );
    });
  }

    return (
      <div className='container'>
          <h4>{props.jobs.length} jobs in database</h4>
          <div className="container">{jobList()}</div>
      </div>
    );
  }


export default JobResults;
