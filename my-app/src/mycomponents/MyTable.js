import React, { Component } from "react";
import ReactTable from "react-table-v6";
import "../../node_modules/react-table-v6/react-table.css";

class MyTable extends Component {
  render() {
    const tableData = [
      {
        Name: "Sazzad",
        Age: 38,
      },
      {
        Name: "Sazzad",
        Age: 38,
      },
      {
        Name: "Sazzad",
        Age: 38,
      },
      {
        Name: "Sazzad",
        Age: 38,
      },
      {
        Name: "Sazzad",
        Age: 38,
      },
    ];
    const columns = [
      {
        Header: "Name",
        accessor: "Name",
      },
      {
        Header: "Age",
        accessor: "Age",
      },
    ];
    return (
      <div>
        <ReactTable
          data={tableData}
          columns={columns}
          defaultPageSize={2}
          pageSizeOptions={[2, 4, 6, 8, 10]}
        />
      </div>
    );
  }
}

export default MyTable;
