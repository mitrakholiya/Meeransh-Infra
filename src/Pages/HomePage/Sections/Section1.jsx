import React from 'react'
import Section1About from '../components/Section1About'

const Section1 = () => {
    return (
            <div className="container mx-auto sm:px-[5%]">
                <div className='py-[100px] md:py-[150px] overflow-hidden'>
                    {/* Why Choose */}
                    <div className='relative pb-[100px]'>
                        <div className='flex flex-col items-center  '>
                            <h2 className='text-[48px] font-bold text-center'>Why Choose 
                                <br className='block md:hidden'/>
                                 <span className='text-blue-500'> Meeransh Infra</span></h2>
                            <p className='md:w-[70%] text-[#4c4b4b] font-semibold text-[16px] text-center'>
                                At Meeransh Infra, we transform your home construction
                                dreams into reality with our expert team & seamless process.
                                From design to delivery, we ensure quality &  transparency at every
                                step of the way. Our mission is to build homes that embody your
                                vision, constructed with top-notch craftsmanship & innovative technology.
                            </p>
                        </div>

                        {/* Layers */}

                        <p className='absolute md:text-[100px] text-[64px] whitespace-nowrap
 font-extrabold top-[-90px] left-0 z-[-1] text-[#0077ff23]'>Why Choose</p>
                        <p className='absolute md:text-[100px] text-[64px] 
 font-extrabold md:top-[60px] sm:top-[220px] top-[40px] right-0 z-[-1] text-[#0077ff23]'>Meeransh Infra</p>
                    </div>
                    {/* About  */}
                    <Section1About/>
                </div>
            </div>
    )
}

export default Section1
