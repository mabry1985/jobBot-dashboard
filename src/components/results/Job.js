import React from 'react';
import styled from "styled-components";

const JobDiv = styled.div`
  position: relative;
  top: 80px;
`;

const SubHeading = styled.h6`
  padding-left: 5px;
`

const Description = styled.p`
  height: 345px;
  width: 577px;
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
      createdAt,
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
        <SubHeading>{postedBy}</SubHeading>
        <SubHeading>{jobBoardSite} | {createdAt}</SubHeading>
        {link}
        <Description>{description}</Description>
      </JobDiv>
    );
  }
};

export default Job;