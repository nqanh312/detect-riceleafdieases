import "./datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { detectColumns, detectRows } from "../../datadetect";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datadetect = () => {
  const [data, setData] = useState(detectRows);

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
        Detect
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={detectColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datadetect;