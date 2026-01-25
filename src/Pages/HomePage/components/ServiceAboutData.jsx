import React from 'react'
import { ServicesData } from '../data/ServicesData'

const ServiceAboutData = () => {
    return (
        <>
            <div className="flex flex-wrap justify-between">
                {ServicesData.map((v, i) => {
                    return (<>
                        <div className='sm:w-[50%] lg:w-[24%] w-[100%] p-[8px] border rounded-xl border-[#F5F5F4]'>
                            <div className=' flex flex-col justify-evenly '>
                                <img src={v.path} alt="" className='w-full' />
                                <h5 className='font-semibold py-[10px] text-[19px]'>{v.title}</h5>
                                <p className='pe-[10%] text-[#797d7f] pb-[20px] h-[170px]'>{v.para}</p>
                                <a className='text-blue-400 font-semibold'>Know More</a>
                            </div>

                        </div>
                    </>)
                })}
            </div>
        </>
    )
}

export default ServiceAboutData
