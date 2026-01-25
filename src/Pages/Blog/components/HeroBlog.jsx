import React from 'react'

const HeroBlog = () => {
    return (
        <div className="container mx-auto sm:px-[5%] mt-[-75px] bg-[#1f1b1b62]">
            <div className="w-[100%]  pt-[200px] pb-[100px]">
                <div className="flex flex-col items-center text-center">

                    <h2 className='md:text-[68px] sm:text-[48px] text-[30px] font-bold text-white leading-[1.2]'>
                        Our <span className="text-blue-500">Blogs</span> </h2>
                    {/* <p className='sm:px-[5%] md:px-[10%] text-[white] sm:text-[17px] md:text-[19px] font-semibold'>We invite you to reach out and explore how Thikedaar.Com can bring your construction visions to life.
                        Whether you’re starting a new project or seeking expert advice, we’re here to collaborate and create exceptional spaces together.</p> */}
                </div>
            </div>
        </div>
    )
}

export default HeroBlog
