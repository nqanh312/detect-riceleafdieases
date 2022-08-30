import React from 'react'
import { useState } from "react";


const Detect = () => {
    const [img, setImg] = useState()

    const handlePreviewImg = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setImg(file)
    }

    return (
        <div name='allInOne' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>Detect rice leaf diseases</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>
                This is an intelligent, optimal monitoring and support system powered by AI for Vietnamese people.
                </p>

                <div className='grid sm:grid-cols-2 lg-grid-cols-4 gap-4 pt-4'>

                    <div className='flex'>
                        


                        <div>
                            <h3 className='font-bold text-lg'>Information</h3>
                            <p className='text-lg pt-2 pb-4'>
                            The project aims to develop a rice leaf disease classification system to assist farmers 
                            in timely detection and prevention of secondary diseases in rice fields. Our system allows 
                            users to collect heterogeneous data collected from multiple sources using a convenient smartphone 
                            camera, providing a visual representation of analysis and prediction results.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        


                        <div>
                            <h3 className='font-bold text-lg'>Detect now!</h3>
                            <p className='text-lg pt-2 pb-4'>
                                Up hình lên chỗ này
                            </p>
                            <div>
                                <input 
                                    type="file" 
                                    onChange={handlePreviewImg}
                                />

                                {img && (
                                    <img src={img.preview} alt="" width="400px"/>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Detect