import React from 'react'
import { BlogData } from '../data/BlogService'

const BlogService = () => {
    return (
        <>
            <div className="container sm:px-[5%] mx-auto mb-[100px]">
                <div className="py-[30px] sm:py-[50px] md:pb-[100px] text-[22px] sm:text-[22px] md:text-[32px] lg:text-[50px] text-center font-extrabold text-[#151515]">
                    Our 
                    <span className='text-blue-400'> Blogs</span>
                </div>
                <div className="flex flex-wrap">
                    {BlogData.map((v) => (
                        <div className="w-[100%] md:w-[50%] lg:w-[25%] h-[400px] p-[10px] " key={v.id}>
                            <div className="p-[10px] border-[1px] h-full rounded-[10px] flex flex-col">
                                <img src={v.img} alt="" className='w-full h-[50%] object-cover rounded-[10px] ' />
                                <p className='font-semibold py-[10px]'>{v.title}</p>
                                <p className='sm:text-[14px] text-[#545454] text-[12px]'>Posted:{v.date}</p>
                                <p className='text-blue-400 font-semibold mt-auto'>Read More</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogService
