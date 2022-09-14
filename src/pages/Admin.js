import { Routes, Route, Link } from 'react-router-dom'

import Sidebar from '../components/admin/sidebar/Sidebar'
import Home from '../pages/adminpage/home/Home'
import List from '../pages/adminpage/list/List'
import New from '../pages/adminpage/new/New'
import Single from '../pages/adminpage/single/Single'
import MapDisease from './adminpage/MapDisease'
import ListDiseases from './adminpage/ListDiseases'
import ListDetect from './adminpage/ListDetect'
import Report from './adminpage/Report'
import NavbarAdmin from '../components/NavbarAdmin'

import { productInputs, userInputs } from "../formSource";

import "../components/admin/sidebar/sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";




function Admin() {
  return (
    <>

    <div className="home">
      <NavbarAdmin />
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo text-green-600">AcademicKnights</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/admin" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/listuser" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/listdisease" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Diseases</span>
            </li>
          </Link>

          <Link to="/listdetect" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Detection</span>
          </li>
          </Link>

          <p className="title">SERVICE</p>

          <Link to="/report" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Users'report</span>
          </li>
          </Link>

          

          <Link to="/mapdisease" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Disease map</span>
          </li>
          </Link>

          <p className="title">OTHERS</p>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>

        </ul>
      </div>
    </div>
      <div className="homeContainer">
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route path="/listuser" element={<List />} />
        <Route path="/adduser" element={<New inputs={userInputs} title="Add New User" />} />
        <Route path="/infouser" element={<Single />} />
        <Route path="/mapdisease" element={<MapDisease />} />
        <Route path="/listdisease" element={<ListDiseases />} />
        <Route path="/listdetect" element={<ListDetect />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      </div>
    </div>


    </>
  );
}

export default Admin;
