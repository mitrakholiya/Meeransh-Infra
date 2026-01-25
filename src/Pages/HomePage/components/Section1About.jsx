import React from 'react'
import { Section1AboutData } from "../data/Section1data"

const Section1About = () => {
    return (
        <>
            <div className="">
                <div className=" flex flex-wrap gap-[20px] sm:px-[0px] px-[30px] justify-center">
                    {
                        Section1AboutData.map((v, i) => {
                            return (<>
                                <div key={i} className='md:w-[400px] sm:[300px]  bg-[#f8f8f8] py-[25px] px-[20px] relative rounded-3xl'>
                                    <img src={v.path} alt={v.title} className='w-[30%]' />
                                    <h4 className='text-[22px] font-semibold'>{v.title}</h4>
                                    <p>{v.para}</p>
                                    <div className="absolute left-[-5px] inset-0 rounded-3xl bg-blue-400 z-[-1]">
                                    </div>
                                </div>

                            </>)
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Section1About
