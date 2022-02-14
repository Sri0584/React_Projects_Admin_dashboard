import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userList-user">
            <img className="UserListImg" src={params.row.avatar} alt="user" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction Volume", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="edit">Edit</button>
            </Link>
            <DeleteOutline
              className="delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  const [data, setData] = useState(userRows);
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
