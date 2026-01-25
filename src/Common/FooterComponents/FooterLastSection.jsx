import React from 'react'
import { FooterData } from './FooterData'

const FooterLastSection = () => {
    return (
        <>
            <div className="bg-black">
                <div className="container mx-auto px-[5%] text-[#959595] py-8">

                    <div className='text-center text-[#545454] text-[18px]'>
                        © 2026 MEERANSH INFRA Pvt Ltd. All rights reserved
                    </div>
                    <div className="flex flex-col gap-[30px] sm:gap-[50px]">
                        {FooterData.map((v) => (
                            <div key={v.id}>
                                <h3 className='text-blue-500 text-[16px]' >
                                    {v.name}
                                </h3>
                                <p className="text-[#959595] text-[13px]">
{v.para}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterLastSection
