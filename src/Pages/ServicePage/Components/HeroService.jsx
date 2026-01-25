import React from 'react'

const HeroService = () => {
    return (
        <div className="container mx-auto sm:px-[5%] mt-[-75px] bg-[#1f1b1b62]">
            <div className="w-[100%]  pt-[200px] pb-[100px]">
                <div className="flex flex-col items-center text-center">

                    <h2 className='md:text-[68px] sm:text-[48px] text-[30px] font-bold text-white leading-[1.2]'>
                        Our <span className="text-blue-500">Services</span></h2>
                    <p className='sm:px-[5%] md:px-[10%] text-[white] sm:text-[17px] md:text-[19px]'>Our services cover every phase of construction, from initial planning to final completion, including interior design and maintenance.
                        We ensure quality and attention to detail throughout, delivering precision and excellence in every aspect of your project.</p>
                </div>
            </div>
        </div>

    )
}

export default HeroService
