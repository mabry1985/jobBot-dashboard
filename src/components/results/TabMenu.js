import React from 'react';
import styled from "styled-components";


const TabLink = styled.h5`
  color: blue;
  :hover {
    color: teal;
    cursor: pointer;
  }
`;
const TabMenu = (props) => {
  return(
    <ul 
      className="nav nav-pills" 
      style={{float: 'right', marginRight: 15}}>
      <li className="nav-item">
        <TabLink 
          className="" 
          onClick={props.onClickJobs}
          > 
          Jobs
        </TabLink>
      </li>
      <li>
        <h5>|</h5>
      </li>
      <li className="nav-item">
        <TabLink
          className="" 
          onClick={props.onClickQueries}
          >
          Queries
        </TabLink>
      </li>
    </ul>
  )
}

export default TabMenu