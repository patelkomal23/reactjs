
import React, { useRef, useState } from "react";
import DataTable from "react-data-table-component";

function Table({ handleDelete, handleEdit, users }) {
  const searchRef = useRef();
  const [textFilter, setTextFilter] = useState("");



  let columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            <button
              className="btn btn-danger me-1"
              onClick={() => handleDelete(row.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning me-1"
              onClick={() => handleEdit(row.id)}
            >
              Edit
            </button>
          </>
        );
      },
    },
  ];
  let usersData = users.filter((user) => {
    return user.email.toLowerCase().includes(textFilter.toLowerCase());
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <input
            className="form-control"
            type="text"
            name="search"
            value={textFilter}
            onChange={(e) => setTextFilter(e.target.value)}
          />
          <DataTable

            title="User Data"
            data={usersData}
            columns={columns}
            pagination
            selectableRows
            highlightOnHover
            pointerOnHover
            responsive
            fixedHeader
            fixedHeaderScrollHeight="300px"
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
