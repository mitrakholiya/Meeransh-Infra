import React from 'react'
import { ServicesData } from '../data/ServicePageData'

const Section1ServicePage = () => {
    return (
        <div className="container mx-auto sm:px-[5%] overflow-hidden">
            <div className='pt-[150px] md:px-[15%] flex flex-col gap-[40px]'>
                {
                    ServicesData.map(v => (
                        <div className="" key={v.id}>

                            <div className={v.id % 2 == 0 ? "flex md:flex-row-reverse flex-col md:flex-row" : "flex md:flex-row flex-col"}>
                                <img src={v.path} alt="" className='md:max-w-[350px] w-[full]' />
                                <div className='md:min-w-[350px] md:w-[400px] min-w-[250px] w-full py-[20px] md:py-[0px]  rounded-[20px] bg-[#f8f8f8] flex flex-col  justify-center sm:px-[25px] px-[15px]'>
                                    <h4 
                                        className='sm:text-[22px] text-[17px] font-semibold'>
                                        {v.title}
                                    </h4>
                                    <p
                                        className='sm:text-[16px] text-[14px] text-[#545454] text-semibold'>
                                        {v.para}</p>
                                </div>
                                <div className='relative lg:block hidden'>
                                    <div className={v.id % 2 === 0 ?
                                        "absolute flex items-center text-blue-500 h-full left-[-60px] opacity-50" : "absolute flex items-center text-blue-500 h-full left-[-60px] opacity-50"}>
                                        <p className='text-[100px] font-extrabold'>0{v.id}</p>
                                    </div>
                                </div>
                                <div className='relative lg:block hidden'>
                                    <div className={v.id % 2 === 0 ?
                                        "absolute flex items-center text-blue-500 h-full left-[-450px] opacity-50" : "absolute flex items-center text-blue-500 h-full left-[80px] opacity-50"}>
                                        <div className='min-w-[350px] h-[3px] bg-blue-500'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Section1ServicePage
