import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted by farmers across the world</h2>
                    <p className='text-2xl py-6 text-gray-500'>The project aims to develop a rice leaf disease classification system to assist farmers in timely detection and prevention of secondary diseases in rice fields.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-green-600'>90%</p>
                        <p className='text-gray-400 mt-2'>Accuracy</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-green-600'>24/7</p>
                        <p className='text-gray-400 mt-2'>Active</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-green-600'>100K</p>
                        <p className='text-gray-400 mt-2'>Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About