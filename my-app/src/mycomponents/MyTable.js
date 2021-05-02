import React, { Component } from "react";
import ReactTable from "react-table-v6";
import "../../node_modules/react-table-v6/react-table.css";
import axios from "axios";

class MyTable extends Component {
  constructor() {
    super();
    this.state = {
      TableInfos: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        this.setState({ TableInfos: response.data });
      })
      .catch((error) => {
        alert("Something Went Wrong");
      });
  }
  render() {
    const tableData = this.state.TableInfos;
    const columns = [
      {
        Header: "Country Name",
        accessor: "name",
      },
      {
        Header: "Capital",
        accessor: "capital",
      },
      {
        Header: "Population",
        accessor: "population",
      },
    ];
    return (
      <div>
        <ReactTable
          data={tableData}
          columns={columns}
          defaultPageSize={10}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      </div>
    );
  }
}

export default MyTable;
