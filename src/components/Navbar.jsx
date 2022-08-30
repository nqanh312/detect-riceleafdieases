import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)


    return (
        <div className='z-20 w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>AcademicKnights</h1>
                    <ul className='hidden md:flex'>
                        <li><Link className="cursor-pointer" to="home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link className="cursor-pointer" to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li><Link className="cursor-pointer" to="allInOne" smooth={true} offset={-200} duration={500}>Detect</Link></li>
                        <li><Link className="cursor-pointer" to="footer" smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign up</button>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <FiMenu className='w-5 cursor-pointer' /> : <CgClose className='w-5 cursor-pointer' />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="allInOne" smooth={true} offset={-200} duration={500}>Detect now</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="footer" smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar