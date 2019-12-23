import React from 'react';
import axios from 'axios';
const DataTable = require("react-data-components").DataTable;
require("../../stylesheets/query-table.css");

class SearchQueries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queriesList: [],
      loading: true,
      selected: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/search/")
      .then(response => {
        this.setState({
          queriesList: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  columns = [
    { title: "Query", prop: "query" },
  ];

  selectRow = row => {
    this.setState({ selected: row._id });
  };

  buildRowOptions = row => {
    return {
      onClick: this.selectRow.bind(this, row),
      className: this.state.selected === row._id ? "active" : null
    };
  };

  render() {
    return (
      <div
        style={{
          height: 600,
          backgroundColor: "#F8F8FF",
          padding: 40,
          borderRadius: 5,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <DataTable
          buildRowOptions={this.buildRowOptions}
          className="container queries"
          id="query"
          keys="_id"
          columns={this.columns}
          initialData={this.state.queriesList}
          initialPageLength={10}
        />
      </div>
    );
  }
}

export default SearchQueries