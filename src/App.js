import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarSign from './components/NavbarSign'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Admin from './pages/Admin'


import Home from "./pages/adminpage/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/adminpage/list/List";
import Single from "./pages/adminpage/single/Single";
import New from "./pages/adminpage/new/New";
import { userInputs } from "./formSource";
import { useContext } from "react";


import React, { useState } from 'react'
// import { Link, animateScroll as scroll } from 'react-scroll'

import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'



function App() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  return (
    <>

      <div className='z-20 w-screen h-[80px] bg-white fixed'>
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
      </div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>


    </>
  );
}

export default App;
