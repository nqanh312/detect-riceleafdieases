import React from 'react'
import {
    HiPaperAirplane,
    HiServer
} from 'react-icons/hi'


import { FaDatabase } from 'react-icons/fa'
import { BsFillCloudArrowUpFill } from 'react-icons/bs'
import banner from '../assests/banner_rf.png'

const Hero = () => {
    return (
        <div name='home' className='w-full h-screen flex flex-col justify-between'>
            <div className='z-0 w-full pt-20 h-[750px] absolute'>
                <img className='w-full h-full object-cover' src={banner} alt="/" />
            </div>
            <div className='z-10 grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <h1 className='pb-6 pt-20 text-5xl md:text-7xl font-bold text-gray-200'>Detection rice leaf diseases</h1>
                    <p className='text-2xl text-gray-300 font-semibold'>Using the optimization algorithm to improve the accuracy of the CNN model on the rice leaf disease dataset</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4 drop-shadow-2xl border-green-700'>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Hero