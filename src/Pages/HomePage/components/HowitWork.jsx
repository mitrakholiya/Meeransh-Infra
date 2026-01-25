import React from 'react'
import { section2data } from '../data/Section2data'

const HowitWork = () => {
    return (
        <><div className="bg-[#FFFBF0]">
            <div className="container mx-auto px-[5%] relative">
                <div className="flex lg:px-[240px] flex-col gap-y-3">
                    {section2data.map((v, i) => {
                        return (<>
                            <div className={i % 2 === 0 ? "sm:flex" : "sm:flex flex-row-reverse"}>
                                <div className="sm:w-[45%]">
                                    <img src={v.path} alt="" />
                                </div>
                                <div className="w-[10%]  ">
                                    <div className="flex flex-col items-center h-full">
                                        <p className='bg-blue-500 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center font-bold text-white text-[25px]'>0{i + 1}</p>
                                        <p className='h-full w-[1px] border-s-[2px] border-dashed border-[#797d7f]'></p>
                                    </div>
                                </div>
                                <div className="sm:w-[45%] sm:px-[5%] pt-[30px]">
                                    <h5
                                        className='text-blue-500 font-semibold text-[25px]'
                                    >{v.title}</h5>
                                    <p className='text-[#797d7f]'>{v.para}</p>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
                <p className='absolute text-[100px] font-extrabold top-[40%] left-[-16%] text-[#0077ff23] rotate-90 '>How It Works</p>
            </div>
        </div>

        </>
    )
}

export default HowitWork
