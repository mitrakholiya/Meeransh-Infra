import React from 'react'
import HappyClient from '../components/HappyClient'

const Section5 = () => {
    return (
        <>
            
                <div className="container mx-auto sm:px-[5%]">
                    <div className='py-[100px] sm:py-[150px] overflow-hidden'>
                        {/* Why Choose */}
                        <div className='relative pb-[50px] md:pb-[100px]'>
                            <div className='flex flex-col items-center  '>
                                <h2 className='text-[48px] font-bold text-center'>Quotes From <br className='block md:hidden'/><span className='text-blue-500'>Happy Clients
                                </span></h2>

                            </div>

                            {/* Layers */}

                            <p className='absolute text-[80px] font-extrabold top-[-50px] md:left-[30%] z-[-1] text-[#0077ff23]'>Testimonials</p>
                        </div>
                        {/* About  */}
                        <HappyClient />
                    </div>
                </div>
        </>
    )
}

export default Section5
