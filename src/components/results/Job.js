import React from 'react';
import styled from "styled-components";

const JobDiv = styled.div`
  margin-top: 50px;
`;

const DescriptionDiv = styled.div`
  height: 345px;
  width: 475px;
  overflow: auto;
  margin-top: 15px;
`;

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
    
    const link = !applyUrl ? null : <div style={{marginTop: 5}}>{content}</div>
    
    return (
      <JobDiv key={_id} className="container">
        <h4>{title}</h4>
        <h5>{postedBy}</h5>
        <h6>{jobBoardSite} | {timeStamp}</h6>
        {link}
        <DescriptionDiv>
          <p>{description}</p>
        </DescriptionDiv>
      </JobDiv>
    );
  }
};

export default Job;