import React from 'react'
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <>
            <div className='container-fluid z-[1] relative'>
                <div className="container mx-auto sm:px-[5%] px-[10px] overflow-hidden">
                    <div className='shadow-2xl md:mx-[15%] py-[100px] rounded-2xl md:rounded-4xl'>
                        {/* Why Choose */}
                        <div className='relative pb-[100px]'>
                            <div className='flex flex-col items-center  '>
                                <h2 className='text-[48px] font-bold '>Contact <span className='text-blue-500'>Us
                                </span></h2>

                            </div>

                            {/* Layers */}

                            <p className='absolute text-[80px] font-extrabold top-[-65px] left-[30%] z-[-1] text-[#0077ff23]'>Contact Us</p>
                        </div>
                        {/* About  */}

                        <div className="flex gap-5">

                            {/* Phone */}
                            <div className="flex items-center gap-3 group">
                                <span className="border-2 border-white p-2 rounded-full group-hover:bg-white transition">
                                    <FaPhoneAlt
                                        size={20}
                                        className="text-white group-hover:text-black transition"
                                    />
                                </span>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-gray-300">965422563</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 group">
                                <span className="border-2 border-white p-2 rounded-full group-hover:bg-white transition">
                                    <FaRegEnvelope
                                        size={20}
                                        className="text-white group-hover:text-black transition"
                                    />
                                </span>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-gray-300">hello@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
