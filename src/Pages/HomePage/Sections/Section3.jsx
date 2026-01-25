import React from 'react'
import ServiceAboutData from '../components/ServiceAboutData'
import { Link } from 'react-router-dom'

const Section3 = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="container mx-auto sm:px-[5%] overflow-hidden">
                    <div className='pt-[150px]'>
                        {/* Why Choose */}
                        <div className='relative pb-[100px]'>
                            <div className='flex flex-col items-center  '>
                                <h2 className='text-[40px] sm:text-[48px] font-bold text-center'>Services <span className='text-blue-500'>We Offer</span></h2>
                                <Link to='/service'>
                                    <button className='bg-blue-400 py-[10px] w-[180px] rounded-[25px] text-white font-semibold text-[19px]'>See All Services</button>
                                </Link>
                            </div>

                            {/* Layers */}

                            <p className='absolute text-[64px] sm:text-[80px] font-extrabold top-[-100px] sm:top-[-60px] left-[20px] sm:left-[25%] z-[-1] text-[#0077ff23] '>Services We Offer</p>
                        </div>
                        {/* About  */}
                        <ServiceAboutData />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3
