import React from 'react'
import HowitWork from '../components/HowitWork'

const Section2 = () => {
    return (
        <>
                <div className="container mx-auto sm:px-[5%]">
                    <div className='pt-[50px] md:pt-[150px]  overflow-hidden'>
                        {/* Why Choose */}
                        <div className='relative pb-[100px]'>
                            <div className='flex flex-col items-center  '>
                                <h2 className='text-[48px] font-bold '>How It <span className='text-blue-500'>Works</span></h2>
                                <p className='w-[70%] text-[#4c4b4b] font-semibold text-[16px] text-center'>
                                    With simple building construction steps, we ensure transparent and hassle free experience during your home construction. Book- Track & Monitor - Settle.
                                </p>
                            </div>

                            {/* Layers */}

                            <p className='absolute text-[100px] font-extrabold top-[-90px] left-0 z-[-1] text-[#0077ff23]'>How It</p>
                            <p className='absolute text-[100px] font-extrabold top-[60px] right-0 z-[-1] text-[#0077ff23]'>Works    </p>
                        </div>
                        {/* About  */}
                    </div>
                </div>
            <HowitWork/>

        </>
    )
}

export default Section2
