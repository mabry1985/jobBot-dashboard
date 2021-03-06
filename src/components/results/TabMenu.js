import React from 'react';

const TabMenu = (props) => {
  return (
    <div>
      <p
        style={{
          float: "left",
          marginLeft: 20,
          marginTop: 10,
          color: "red"
        }}
      >
        {props.error}
      </p>

      <ul
        className="nav nav-pills"
        style={{
          float: "right",
          marginRight: 40,
          marginTop: 30
        }}
      >
        <li className="nav-item">
          <button
            className="btn-primary"
            style={{ borderRadius: 3 }}
            onClick={props.onClickJobs}
          >
            Jobs
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn-primary"
            style={{ borderRadius: 3 }}
            onClick={props.onClickQueries}
          >
            Queries
          </button>
        </li>
      </ul>
    </div>
  );
}

export default TabMenu