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

    const link = !applyUrl ? null : <a href={applyUrl}>Apply</a>;
    
    return (
      <div key={_id} className="container">
        <h5>{title}</h5>
        <h6>{postedBy} | {jobBoardSite}</h6>
        <p>{description}</p>
        {link}
        <p>{timeStamp}</p>
      </div>
    );
  }
};

export default Job;