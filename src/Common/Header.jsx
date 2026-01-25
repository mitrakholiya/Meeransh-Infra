import { useState } from 'react'
import { FaPhone, FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoverPhone, setHoverPhone] = useState(false);
    const [hoverEmail, setHoverEmail] = useState(false);
    const [hoverLocation, setHoverLocation] = useState(false);

    return (
        <div className="w-full bg-[#00000057] sticky top-0 z-[20]">
            <div className="container mx-auto h-[70px] px-[5%]  flex items-center justify-between" >
                <img src="/LOGO.png" alt="" className='h-[60px]' />
                <div >
                    {!isOpen ? (<>
                        <div className="flex items-center sm:gap-9 gap-2.5">
                            {/* Button For Pop Up Secreen */}
                            <button onClick={() => setIsOpen(!isOpen)}> <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <rect y="4" width="24" height="2" rx="1" fill="white" />
                                <rect y="11" width="14" height="2" rx="1" fill="white" />
                                <rect y="18" width="24" height="2" rx="1" fill="white" />
                            </svg>
                            </button>
                            <Link to="/build">
                                <button className='bg-blue-400 py-[10px] md:w-[250px] text-[10px] px-[10px] rounded-[25px] text-white font-semibold sm:text-[19px]'>Get Contruction <br className='sm:hidden block' /> Estimate</button>
                            </Link>
                        </div>
                    </>)
                        : null}

                    {isOpen ? (

                        <div className='absolute inset-0 h-[100vh] bg-white flex flex-col rounded-md z-10'>

                            {/* Nav Links */}
                            <div className='flex flex items-center justify-between h-[70px] pt-[6px] bg-[black]  container mx-auto px-[5%]'>
                                <img src="/LOGO.png" alt="" className='h-[60px]' />
                                <div className='flex items-center sm:gap-9 gap-2.5'>
                                    <button className=' py-[6px] bg-blue-400 px-[6px] my-[10px] rounded-[50%] hover:bg-red-500' onClick={() => setIsOpen(!isOpen)}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                            <line x1="4" y1="4" x2="20" y2="20" stroke="white" stroke-width="4" stroke-linecap="round" />
                                            <line x1="20" y1="4" x2="4" y2="20" stroke="white" stroke-width="4" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <Link to='/build'>
                                        <button className='bg-blue-400 py-[10px] md:w-[250px] text-[10px] px-[10px] rounded-[25px] text-white font-semibold sm:text-[19px]'>Get Contruction <br className='sm:hidden block' /> Estimate</button>
                                    </Link>
                                </div>

                            </div>
                            {/* Content Section  */}
                            <div className="flex container mx-auto px-[5%] bg-[white] flex-col flex-col-reverse md:flex-row">
                                {/* Location Section */}
                                <div className="w-[100%] md:w-[30%] ps-[80px] py-[20px]">
                                    <div className='text-[18px] font-semibold'>Get in Touch</div>

                                    <div className='flex gap-2.5 items-center py-[20px]' onMouseEnter={() => setHoverPhone(true)} onMouseLeave={() => setHoverPhone(false)}>

                                        <div className={hoverPhone ? "border-2 border-[black] p-1.5 rounded-[50%] bg-[black]" : "border-2 p-1.5 rounded-[50%]"}>
                                            <FaPhoneAlt size={24} color={hoverPhone ? "white" : "black"} ></FaPhoneAlt>
                                        </div>

                                        <div><p>Phone</p><p>965422563</p></div>
                                    </div>
                                    <div className='flex gap-2.5 items-center py-[20px]' onMouseEnter={() => setHoverEmail(true)} onMouseLeave={() => setHoverEmail(false)}>
                                        <div className={hoverEmail ? "border-2 border-[black] p-1.5 rounded-[50%] bg-[black]" : "border-2 p-1.5 rounded-[50%]"}>
                                            <FaRegEnvelope size={24} color={hoverEmail ? "white" : "black"}></FaRegEnvelope>
                                        </div>
                                        <div><p>Email</p><p>hellow@gmail.com</p></div>
                                    </div>

                                    <div className='flex gap-2.5 items-center py-[20px]' onMouseEnter={() => setHoverLocation(true)} onMouseLeave={() => setHoverLocation(false)}>
                                        <div className={hoverLocation ? "border-2 border-[black] p-1.5 rounded-[50%] bg-[black]" : "border-2 p-1.5 rounded-[50%]"}>
                                            <FaMapMarkerAlt size={24} color={hoverLocation ? "white" : "black"}></FaMapMarkerAlt>
                                        </div>
                                        <div><p>Location</p><p>hellow@gmail.com</p></div>
                                    </div>
                                </div>


                                {/* Nav Links */}
                                <div className='p-[20px]  w-[100%] md:w-[70%]'>
                                    <div>

                                        <div className=" h-full  flex flex-col justify-center  text-blue-500 text-[24px] font-bold border-2 border-blue-200">
                                            <div className='border-b-2 ps-[60px] py-[10px] border-blue-200'>
                                                <Link to='/'>Home</Link>
                                            </div>
                                            <div className='border-b-2 ps-[60px] py-[10px] border-blue-200  text-black'>
                                                <Link to="/service" href="#">Services +</Link>
                                            </div>
                                            <div className='border-b-2 ps-[60px] py-[10px] border-blue-200 text-black'>
                                                <Link to="/blog">Blogs</Link>
                                            </div>
                                            <div className='ps-[60px] py-[10px] text-black'>
                                                <Link to="/contact">Contact</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ) : null}

                </div>

            </div>
        </div >
    )
}

export default Header
