import React, { useState } from 'react'
import useContact from '../../../hooks/useContact';

const Estimate = () => {
    const cities = ["Surat", "Bharuch", "Ankleshwar", "Navsari"];

    const { PostEstimate } = useContact()


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    })
    const handleSubmit = async () => {


        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("city", value);
        formData.append("message", form.message);
        formData.append("file", file);
        console.log(formData);

        const res = await PostEstimate(formData)
        if (res?.success) {
            toast.success("Thank you for Showing Interest!")
            setForm({
                name: "",
                email: "",
                phone: "",
                city: "",
                message: "",
            })
            setValue("")
            setFile(null)
        }
    };


    return (
        <>
            <div className="container mx-auto lg:px-[20%] md:px-[15%] sm:px-[10%] px-[5%] py-[100px]">
                <h2 className='pb-[100px] text-center sm:text-[28px] md:text-[32px] text-[48px] font-semibold'>Some Title</h2>
                <div className="border-[1px] border-[#545454] p-[20px] rounded-4xl">
                    <div className="flex flex-col gap-[10px] sm:gap-[20px]">
                        <h2 className='font-semibold text-[17px] sm:text-[26px]'>
                            Fill The Form
                        </h2>

                        {/* Name */}
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Enter Your Name"
                            className="text-[14px] sm:text-[16px] py-[8px] px-[20px]
                            border border-gray-300 rounded-[10px]
                            focus:border-blue-400 focus:bg-blue-50
                            focus:outline-none transition"
                        />

                        {/* Email */}
                        <input
                            type="text"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Enter Your Email"
                            className="text-[14px] sm:text-[16px] py-[8px] px-[20px]
                            border border-gray-300 rounded-[10px]
                            focus:border-blue-400 focus:bg-blue-50
                            focus:outline-none transition"
                        />

                        {/* Phone */}
                        <input
                            type="text"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="Enter Your Phone Number"
                            className="text-[14px] sm:text-[16px] py-[8px] px-[20px]
                            border border-gray-300 rounded-[10px]
                            focus:border-blue-400 focus:bg-blue-50
                            focus:outline-none transition"
                        />

                        {/* Custom City Dropdown */}
                        <div className="relative w-full">
                            <div
                                onClick={() => setOpen(!open)}
                                className="border border-gray-300 rounded-[10px]
                                px-[20px] py-[8px] cursor-pointer bg-white
                                hover:border-blue-400 transition"
                            >
                                {value || "Select Your City"}

                            </div>

                            {open && (
                                <ul className="absolute w-full mt-2 bg-white border rounded-[10px] shadow-lg z-10">
                                    {cities.map((city) => (
                                        <li
                                            key={city}
                                            onClick={() => {
                                                setValue(city);
                                                setOpen(false);
                                            }}
                                            className="px-[20px] py-[8px]
                                            cursor-pointer hover:bg-blue-50 transition"
                                        >
                                            {city}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* 🔥 Drag & Drop File Upload */}
                        <label
                            className={`
                                flex flex-col items-center justify-center
                                border-2 border-dashed rounded-[12px]
                                px-[20px] py-[30px]
                                cursor-pointer text-center transition-all
                                ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
                                hover:border-blue-400 hover:bg-blue-50
                            `}
                            onDragOver={(e) => {
                                e.preventDefault();
                                setDragActive(true);
                            }}
                            onDragLeave={() => setDragActive(false)}
                            onDrop={(e) => {
                                e.preventDefault();
                                setDragActive(false);
                                if (e.dataTransfer.files[0]) {
                                    setFile(e.dataTransfer.files[0]);
                                }
                            }}
                        >
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) => {
                                    if (e.target.files?.[0]) {
                                        setFile(e.target.files[0]);
                                    }
                                }}
                            />

                            <p className="font-semibold text-[14px] sm:text-[16px]">
                                {file ? file.name : "Drag & drop your file here"}
                            </p>
                            <p className="text-[12px] text-gray-500">
                                or click to browse
                            </p>
                        </label>

                        {/* Message */}
                        <textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Why Do You Want To Partner With Us"
                            className="text-[14px] sm:text-[16px]
                            py-[8px] px-[20px] h-[120px]
                            border border-gray-300 rounded-[10px]
                            focus:border-blue-400 focus:bg-blue-50
                            focus:outline-none transition resize-none"
                        />

                        <p className="text-[12px] text-gray-600">
                            *By submitting this form, I confirm that I have read and agreed to accept
                            Meeransh Infra's privacy policy
                        </p>

                        <button className='w-full py-[8px] bg-blue-400 font-bold sm:text-[22px] text-white rounded-[20px]'
                            onClick={handleSubmit}
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Estimate
