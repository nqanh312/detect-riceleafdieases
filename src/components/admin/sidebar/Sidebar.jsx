import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo text-green-600">AcademicKnights</span>
        </Link>
        <a href='/'></a>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          {/* <Link to="/users" style={{ textDecoration: "none" }}> */}
          <li>
            <PersonOutlineIcon className="icon" />
            <span><a href='/listuser'>Users</a></span>
          </li>

          {/* <Link to="/listdisease" style={{ textDecoration: "none" }}> */}
            <li>
              <StoreIcon className="icon" />
              <span><a href='/listdisease'>Diseases</a></span>
            </li>
          {/* </Link> */}

          {/* <Link to="/listdetect" style={{ textDecoration: "none" }}> */}
            <li>
              <CreditCardIcon className="icon" />
              <span><a href='/listdetect'>Detection</a></span>
            </li>
          {/* </Link> */}

          <p className="title">SERVICE</p>

          {/* <Link to="/report" style={{ textDecoration: "none" }}> */}
            <li>
              <InsertChartIcon className="icon" />
              <span><a href='/report'>Users'report</a></span>
            </li>
          {/* </Link> */}



          {/* <Link to="/mapdisease" style={{ textDecoration: "none" }}> */}
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span><a href='/mapdisease'>Disease map</a></span>
            </li>
          {/* </Link> */}

          <p className="title">Others</p>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;