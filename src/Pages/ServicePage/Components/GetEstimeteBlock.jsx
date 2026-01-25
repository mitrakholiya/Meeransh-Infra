import React from 'react'

const GetEstimeteBlock = () => {
    return (
        <>
            <div className="container sm:px-[5%] mx-auto sm:py-[50px] py-[30px] md:py-[100px]">
                <div className="px-[0px] lg:px-[10%]">
                    <div className="flex bg-blue-400 p-[20px] text-[#151515] flex-wrap rounded-[10px]">
                        <div className='w-[100%] md:w-[50%] leading-tight'>
                            <h5 className='text-[18px] font-semibold sm:text-[19px] md:text-[28px] lg:text-[32px] md:pb-[22px] sm:pb-[15px] pb-[10px]'>Ready To Get Started With Your Next Project?</h5>
                            <p className='text-[#545454] md:pb-[22px] sm:pb-[15px] pb-[10px] '>Your dream project is just a step away. Reach out now to begin your construction journey with our skilled professionals. We’re here to make your vision come to life.</p>
                        </div>
                        <div className="flex md:flex-col justify-evenly items-end w-[100%] md:w-[50%]">
                            <button className='bg-[#151515] py-[10px] md:w-[250px] px-[20px] rounded-[25px] text-blue-400 hover:text-[white] duration-[0.8s] font-semibold sm:text-[19px] text-[12px]'>Get Contruction Estimate</button>
                            <button className='bg-[#151515] py-[10px] md:w-[250px] px-[20px] rounded-[25px] text-blue-400 hover:text-[white] duration-[0.8s] font-semibold sm:text-[19px] text-[12px]'>Get Today Visit Your Side </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetEstimeteBlock
