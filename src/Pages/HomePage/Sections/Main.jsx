import React from 'react'
import MainDetails from '../components/MainDetails'
import { Link } from 'react-router-dom'


const Main = () => {

    return (
        <div className='container mx-auto sm:px-[5%] mt-[-75px]'>
            <div className=" w-full lg:w-[90%] pt-[150px] md:pb-[100px] pb-[50px] px-[20px] ">
                <h2 className='lg:text-[60px] md:text-[32px] sm:text-[28px] text-[18px]  font-extrabold text-white leading-[1.2]'>
                    <span className="text-blue-500">Shaping your dream homes</span> <br /> to your future industrial endeavors<br /> and commercial goals <br />
                </h2>
                <div className='py-[20px]'>
                    <Link to="/build">
                        <button className='bg-blue-400 py-[10px] w-full sm:w-[250px] rounded-[25px] text-white font-semibold text-[19px]'>Get Contruction Estimate</button>
                    </Link>
                </div>
            </div>
            <MainDetails />
        </div>
    )
}

export default Main
