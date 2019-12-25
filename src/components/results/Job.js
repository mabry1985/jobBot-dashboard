import React from 'react';

class Job extends React.Component {

  render(){
    const { 
      applyUrl, 
      title, 
      description,
      postedBy,
      timeStamp, 
      jobBoardSite, 
      _id
    } = this.props.job
    
    const content =
      <a href={applyUrl} target="_blank">
        <button className="btn-primary">
          Apply
        </button>
      </a>
    
    const link = !applyUrl ? null : <div>{content}</div>
    
    return (
      <div key={_id} className="container">
        <h4>{title}</h4>
        <h5>{postedBy}</h5>
        <h6>{jobBoardSite} | {timeStamp}</h6>
        <p>{description}</p>
        {link}
      </div>
    );
  }
};

export default Job;