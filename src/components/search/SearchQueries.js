import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Loading from "../Loading";
const DataTable = require("react-data-components").DataTable;

require("dotenv").config();

const SearchDiv = styled.div`
  height: 650px;
  width: 650px;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const InputDiv = styled.div`
  position: relative;
  left: 15px;
  top: 52px;
`;

const StyledTableDiv = styled.div`
  div.container {
    width: 583px;
  }

  div.col-xs-4 {
    visibility: hidden;
  }
  label {
    color: #428bca;
  }

  table {
    background-color: white;
  }

  tr th {
    color: #f9f9f9;
    background-color: #428bca;
  }

  tr:hover {
    cursor: pointer;
  }
`;

class SearchQueries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queriesList: [],
      newQuery: "",
      loading: true,
    };
  }

  componentDidMount = () => {
    this.getQueryData();
  };

  componentDidUpdate = () => {
    this.setState=({ loading: true })
    this.getQueryData();
  };
  
  getQueryData = () => {
    axios
      .get(process.env.API_ADDRESS + "search/")
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
    {
      title: "Query",
      prop: "query"
    }
  ];
  
  selectRow = row => {
    this.props.onClickQueryRow(row);
  };

  buildRowOptions = row => {
    return {
      onClick: this.selectRow.bind(this, row)
    };
  };

  handleNewQuery = e => {
    this.setState({
      newQuery: e.target.value
    });
  };

  handleSubmitNew = e => {
    e.preventDefault();

    if (this.props.isAdmin) {
      const query = {
        query: this.state.newQuery
      };

      axios
        .post(process.env.API_ADDRESS + "search/add", query)
        .then(res => console.log(res.data));

      this.setState({ newQuery: "" });
    } else {
      this.props.onError("Must be an admin to add queries");
      this.setState({ newQuery: "" });
    }
  };

  handleSubmitEdit = e => {
    e.preventDefault();

    const query = {
      query: this.props.query
    };

    axios
      .post(
        process.env.API_ADDRESS + "search/update/" +
          this.props.queryId,
        query
      )
      .then(res => console.log(res.data))
      .catch(err => console.error(err));

    this.props.onClearQueryPage();
  };

  handleDeleteQuery = () => {
    axios
      .delete(
        process.env.API_ADDRESS + "search/" + this.props.queryId
      )
      .then(response => {
        console.log(response.data);
      });
  };

  render() {
    const queryList = (
      <div>
        <InputDiv>
          <form onSubmit={this.handleSubmitNew}>
            <label htmlFor="add-query">Add Query:</label>
            <br />
            <input
              id="add-query"
              value={this.state.newQuery}
              onChange={this.handleNewQuery}
            />
            {/* <input 
              type="submit" 
              value="Submit" 
              className="btn-primary" /> */}
          </form>
        </InputDiv>
        <DataTable
          buildRowOptions={this.buildRowOptions}
          className="queries"
          id="query"
          keys="_id"
          columns={this.columns}
          initialData={this.state.queriesList}
          initialPageLength={9}
        />
      </div>
    );

    const editQuery = (
      <div className="">
        <form onSubmit={this.handleSubmitEdit}>
          <label htmlFor="">Edit Query:</label>
          <br />
          <input defaultValue={this.props.query} onChange={this.props.onChangeQuery} />
          <input type="submit" value="Edit" className="btn-primary" />
          <button className="btn-primary" onClick={this.handleDeleteQuery}>
            Delete
          </button>
        </form>
      </div>
    );

    const content =
      this.props.querySelected && this.props.isAdmin ? editQuery : queryList;

    if (this.state.loading) {
      return (
        <Loading/>
      )
    }

    return (
      <SearchDiv>
        <StyledTableDiv>{content}</StyledTableDiv>
      </SearchDiv>
    );
  }
}

export default SearchQueries