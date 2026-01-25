import React, { useState } from 'react'

const RightForm = () => {

    const cities = ["Surat", "Bharuch", "Ankleshwar", "Navsari"];
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className='md:w-[50%] w-[100%]   text-[#151515] px-[20px] mb-[60px]    '>
            <div className="border-[1px] border-[#545454] p-[20px] rounded-4xl">
                <div className="flex flex-col gap-[10px] sm:gap-[20px]">
                    <h2 className='font-semibold text-[17px] sm:text-[26px]'>Fill The Form</h2>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="
    text-[14px] sm:text-[16px]
    py-[8px] px-[20px]
    border border-gray-300 rounded-[10px]
    focus:border-blue-400
    focus:bg-blue-50
    focus:outline-none
    transition
  "
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="
    text-[14px] sm:text-[16px]
    py-[8px] px-[20px]
    border border-gray-300 rounded-[10px]
    focus:border-blue-400
    focus:bg-blue-50
    focus:outline-none
    transition
  "
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        className="
    text-[14px] sm:text-[16px]
    py-[8px] px-[20px]
    border border-gray-300 rounded-[10px]
    focus:border-blue-400
    focus:bg-blue-50
    focus:outline-none
    transition
  "
                    />
                    <div className="relative w-full">
                        {/* Select box */}
                        <div
                            onClick={() => setOpen(!open)}
                            className="
          border border-gray-300 rounded-[10px]
          px-[20px] py-[8px]
          cursor-pointer
          bg-white
          focus-within:ring-2 focus-within:ring-blue-300
          hover:border-blue-400
        "
                        >
                            {value || "Select Your City"}
                        </div>

                        {/* Dropdown */}
                        {open && (
                            <ul className="
          absolute w-full mt-2
          bg-white border rounded-[10px]
          shadow-lg z-10
        ">
                                {cities.map((city) => (
                                    <li
                                        key={city}
                                        onClick={() => {
                                            setValue(city);
                                            setOpen(false);
                                        }}
                                        className="
                px-[20px] py-[8px]
                cursor-pointer
                hover:bg-blue-50
                transition
              "
                                    >
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <textarea
                        placeholder="Why Do You Want To Partner With Us"
                        className="
    text-[14px] sm:text-[16px]
    py-[8px] px-[20px]
    border border-gray-300 rounded-[10px]
    focus:border-blue-400
    focus:bg-blue-50
    focus:outline-none
    transition
    resize-none
    h-[120px]
  "
                    ></textarea>

                    <p>*By submitting this form, I confirm that I have read and agreed to accept Meeransh Infra's privacy policy</p>
                    <button className='w-full py-[8px] bg-blue-400 font-bold sm:text-[22px] text-[white] rounded-[20px]'>Join Now</button>
                </div>

            </div>
        </div>
    )
}

export default RightForm
