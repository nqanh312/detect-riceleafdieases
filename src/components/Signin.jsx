import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'

import loginImg from '../assests/banner_rf.png'

const Signin = () => {
    return (
        <div className='relative w-full h-screen bg-zinc-700/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />


            <div className='flex justify-center items-center h-full pt-14'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-6 rounded-md shadow-lg'>
                    <h2 className='text-4xl font-bold text-center text-green-800 py-4 pb-10'>Sign in</h2>
                    <div className='flex flex-col'>
                        <p className='border shadow-md hover:bg-gray-100 px-10 py-2 mb-4 relative flex items-center rounded-lg justify-center'><FcGoogle className='mr-2' />Continue with Google</p>
                        <p className='border shadow-md hover:bg-gray-100 px-10 py-2 relative flex items-center rounded-lg justify-center'><AiFillFacebook className='mr-2' />Continue with Facebook</p>
                    </div>
                    {/* <div className='flex justify-between py-4'>
                    <div className='flex flex-col mb-4 pt-2'>                       
                    </div>
                        <p className='border shadow-md hover:bg-gray-100 px-10 py-2 relative flex items-center rounded-lg'><FcGoogle className='mr-2' />Google</p>
                        <p className='border shadow-md hover:bg-gray-100 px-10 py-2 relative flex items-center rounded-lg'><AiFillFacebook className='mr-2' />Facebook</p>
                    </div> */}
                    <div
                        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                        <p class="text-center font-semibold mx-4 mb-0">or</p>
                    </div>
                    <div className='flex flex-col mb-4 pt-2'>
                        <input className='border relative bg-gray-100 p-2 rounded-md' type="text" placeholder='Email' />
                    </div>
                    <div className='flex flex-col '>
                        <input className='border relative bg-gray-100 p-2 rounded-md' type="password" placeholder='Password' />
                    </div>
                    <button className='w-full py-3 mt-8 bg-green-600 hover:bg-green-500 relative text-white'>Sign In</button>

                    <div className="flex justify-between items-center mb-6 mt-2">
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2"
                            />
                            <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
                            >Remember me</label
                            >
                        </div>
                        <a href="#!" className="text-green-800"><b>Forgot password?</b></a>
                    </div>
                    {/* <p className='flex items-center mt-4'><input className='mr-2' type="checkbox" />Remember Me</p> */}
                    <p className='text-center mt-6'>Not a member? <a
                        href="#"
                        className="text-green-700 font-semibold transition duration-200 ease-in-out"
                    >Sign Up now</a></p>
                </form>
            </div>
        </div>
    )
}

export default Signin