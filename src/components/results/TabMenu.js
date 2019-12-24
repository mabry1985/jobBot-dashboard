import React from 'react';

const TabMenu = (props) => {
  return (
    <ul
      className="nav nav-pills"
      style={{ float: "right", marginRight: 55, marginTop: 30 }}
    >
      <li className="nav-item">
        <button className="btn-primary" onClick={props.onClickJobs}>
          Jobs
        </button>
      </li>
      <li className="nav-item">
        <button className="btn-primary" onClick={props.onClickQueries}>
          Queries
        </button>
      </li>
      <li className="nav-item">
        <button className="btn-primary" onClick={props.onClickAdmin}>
          Admin
        </button>
      </li>
    </ul>
  );
}

export default TabMenu