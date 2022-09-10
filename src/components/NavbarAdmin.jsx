import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)


    return (
        <div className='z-20 w-screen h-[80px] bg-white fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'><Link className="cursor-pointer" to="home" smooth={true} duration={500}>AcademicKnights</Link></h1>
                    <ul className='hidden md:flex'>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <FiMenu className='w-5 cursor-pointer' /> : <CgClose className='w-5 cursor-pointer' />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
                <div>                   
                </div>
            </ul>
        </div>
    )
}

export default Navbar