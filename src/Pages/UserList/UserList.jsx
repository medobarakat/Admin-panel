import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "./UserList.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "User name", width: 130 },
  { field: "Email", headerName: "Email", width: 150 },
  {
    field: "Status",
    headerName: "Status",
    width: 90,
  },
  {
    field: "Transaction",
    headerName: "Transaction",
    width: 100,
  },
  {
    field: "Action",
    headerName: "Action",
    width: 150,
    renderCell: (P) => {
      return (
        <>
          <button className="useListEdit">Edit</button>
          <DeleteIcon className="useListEdit-icon" />
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    Email: "Snow@gmail.com",
    firstName: "Jon",
    Transaction: "$562.00",
    Status: "Active",
  },
  { id: 2, lastName: "Lannister", firstName: "Cersei", Transaction: "$125" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 44 },
  { id: 6, lastName: "Melisandre", firstName: "Frances", age: 15 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Melisandre", firstName: "Jaime", age: 150 },
  { id: 11, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 12, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[13]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
