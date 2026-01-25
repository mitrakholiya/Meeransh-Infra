import React from 'react'
import { heroSection } from '../data/HomeMain'

const MainDetails = () => {
    return (
        <>
            <div className="flex justify-end pb-[20px] py-[20px] w-[100%]">
                <div className='bg-[#1f1b1b62] md:w-[90%]  md:rounded-[70px]'>
                    <div className="flex md:flex-nowrap flex-wrap justify-between sm:justify-evenly md:justify-between px-[20px] md:px-[5%] gap-[20px] md:gap-[0px]">
                        {heroSection.map((v, i) => {
                            return (<>
                                <div className='w-[40%] md:w-[16%]'>
                                    <p className='sm:text-[42px] text-blue-500 font-bold'>{v.value}</p>
                                    <h3 className='text-white sm:text-[24px]'>{v.name}</h3>
                                </div>
                            </>)
                        })}
                        <div className="md:py-[20px]">
                            <p className='text-white'>Rating 4.9</p>
                            <p className='text-white'>Trusted By Our Clients</p>
                            <div className='relative w-full h-[40px]'>
                                <div className='absolute top-0 left-0 w-[40px] h-[40px] border-[2px] border-blue-500
 rounded-[50%]'>
                                    <img src="/rating1.jpeg" alt="" className='w-full h-full rounded-[50%] object-cover' />
                                </div>
                                <div className='absolute top-0 left-[20px] w-[40px] h-[40px] border-[2px] border-blue-500
 rounded-[50%]'>
                                    <img src="/rating2.jpeg" alt="" className='w-full h-full rounded-[50%] object-cover' />

                                </div>
                                <div className='absolute top-0 left-[40px] w-[40px] h-[40px] border-[2px] border-blue-500
 rounded-[50%]'>
                                    <img src="/rating3.jpeg" alt="" className='w-full h-full rounded-[50%] object-cover' />

                                </div>
                                <div className='absolute top-0 left-[60px] w-[40px] h-[40px] border-[2px] border-blue-500
 rounded-[50%]'>
                                    <img src="/rating4.jpeg" alt="" className='w-full h-full rounded-[50%] object-cover' />

                                </div>
                                <div className='absolute top-0 left-[80px] w-[40px] h-[40px] border-[2px] border-blue-500
 rounded-[50%]'>
                                    <img src="/rating5.jpeg" alt="" className='w-full h-full rounded-[50%] object-cover' />

                                </div>
                                <div className='absolute top-0 left-[100px] w-[40px] h-[40px] border-[2px] border-blue-500 flex items-center justify-center bg-blue-500
 rounded-[50%]'>
                                    <p className='text-[12px] text-white'>2k+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainDetails