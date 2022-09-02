import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarWeb from './components/NavbarWeb'
import NavbarSign from './components/NavbarSign'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

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
        </div>
      </div>


      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <NavbarSign/> */}
      {/* <HomePage /> */}

      {/* <Navbar/>
      <Hero />
      <About />
      <Detect />
      <Footer /> */}
    </>
  );
}

export default App;
