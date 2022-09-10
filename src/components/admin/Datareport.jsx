import "./datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { reportColumns, reportRows } from "../../datareport";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datareport = () => {
  const [data, setData] = useState(reportRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Reports
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={reportColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datareport;