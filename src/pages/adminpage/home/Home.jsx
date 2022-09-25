
import Navbar from "../../../components/admin/navbar/Navbar";
import "./home.scss";
import Widget from "../../../components/admin/widget/Widget";
import Featured from "../../../components/admin/featured/Featured";
import Chart from "../../../components/admin/chart/Chart";
import Table from "../../../components/admin/table/Table";

import Sidebar from "../../../components/admin/sidebar/Sidebar";
import HomeAdmin from "../../Home";
import List from "../list/List";
import New from "../new/New";
import Single from "../single/Single";
import MapDisease from "../MapDisease";
import ListDiseases from "../ListDiseases";
import ListDetect from "../ListDetect";
import Report from "../Report";
import { Routes, Route, Link } from 'react-router-dom'

import { productInputs, userInputs } from "../../../formSource";

import "../../../components/admin/sidebar/sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import React, { useState } from 'react'
// import { Link, animateScroll as scroll } from 'react-scroll'

import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)
  return (
    <div>
      
      {/* <div className='z-20 w-screen h-[80px] bg-white fixed'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'><Link className="cursor-pointer" to="home" smooth={true} duration={500}>AcademicKnights</Link></h1>
          </div>
          <div className='hidden md:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4'><Link className="cursor-pointer" to="login" smooth={true} duration={0}>Sign In</Link></button>
            <button className='px-8 py-3'><Link className="cursor-pointer" to="signup" smooth={true} duration={0}>Sign Up</Link></button>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <FiMenu className='w-5 cursor-pointer' /> : <CgClose className='w-5 cursor-pointer' />}
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <div className='flex flex-col my-4 md:hidden'>
            <button className='px-8 py-3 mb-4 bg-transparent text-green-900 border-green-900 hover:border-green-600'><Link className="cursor-pointer" to="login" smooth={true} duration={0}>Sign In</Link></button>
            <button className='px-8 py-3'><Link className="cursor-pointer" to="signup" smooth={true} duration={0}>Sign Up</Link></button>
          </div>
        </ul>
      </div> */}

      <div className="home">
      <Sidebar/>
        <div className="homeContainer">
          <div className="widgets">
            <Widget type="user" />
            <Widget type="detection" />
          </div>
          <div className="charts">
            <Chart title="Last 6 Months (Detection)" aspect={3.5 / 1} />
          </div>
        </div>
      </div>

      <div className="homeContainer">
        <Routes>
          <Route path="/admin" element={<HomeAdmin />} />
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

  );
};

export default Home;