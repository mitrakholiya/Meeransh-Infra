import React from 'react'
import { HappyClientData } from '../data/HappyClientData'

const HappyClient = () => {
    return (
        <>
            <div className="flex xl:px-[150px] flex-wrap justify-between">
                {HappyClientData.map((v, i) => {
                    return (<>
                        <div className='shadow-sm py-[20px] px-[15px] w-full lg:w-[32%] mb-[20px]'>
                            <img src="/quote-review.webp" alt="" className='w-[70px]' />
                            <div className='pt-[20px] pb-[10px] text-[#797d7f] text-[16px]'>
                                <p>{v.para}</p>
                            </div>
                            <div className="flex">
                                <div className='bg-blue-400 w-[80px] h-[80px] rounded-[50%]'></div>
                                <div className='flex flex-col justify-evenly ps-[20px]'>
                                    <h6 className='font-semibold text-[24px]'>{v.name}</h6>
                                    <h6 className='text-[#797d7f] text-[17px]'>{v.position}</h6>
                                </div>
                            </div>

                        </div>
                    </>)
                })}
            </div>
        </>
    )
}

export default HappyClient
