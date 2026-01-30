import React, { useState } from 'react'
import useContact from '../../../hooks/useContact';
import toast from 'react-hot-toast';
import { Spinner } from '../../Dashboard/modules/Loader';
const RightForm = () => {

    const cities = ["Surat", "Bharuch", "Ankleshwar", "Navsari"];
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const { PostContact, loading, error } = useContact()


    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    })

    const handleSubmit = async () => {
        if (form.phone.length !== 10) {
            toast.error("Phone number must be exactly 10 digits");
            return;
        }

        const res = await PostContact(form)
        toast.success("Thank you for Showing Interest!")
        setForm({
            name: "",
            email: "",
            phone: "",
            city: "",
            message: ""
        })
        setValue("")

    }
    if (loading) return (
        <div className="flex items-center justify-center h-screen">
            <Spinner className="size-8 text-purple-500" />
        </div>
    )
    return (
        <div className='md:w-[50%] w-[100%]   text-[#151515] px-[20px] mb-[60px]    '>
            <div className="border-[1px] border-[#545454] p-[20px] rounded-4xl">
                <div className="flex flex-col gap-[10px] sm:gap-[20px]">
                    <h2 className='font-semibold text-[17px] sm:text-[26px]'>Fill The Form</h2>
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
                        type="email"
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
                        type="tel"
                        value={form.phone}
                        onChange={(e) => {
                            const value = e.target.value;

                            // allow only numbers & max 10 digits
                            if (/^\d{0,10}$/.test(value)) {
                                setForm({ ...form, phone: value });
                            }
                        }}
                        placeholder="Enter Your Phone Number"
                        className="text-[14px] sm:text-[16px] py-[8px] px-[20px]
    border border-gray-300 rounded-[10px]
    focus:border-blue-400 focus:bg-blue-50
    focus:outline-none transition"
                        required
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
                                            setForm({
                                                ...form, city: city
                                            })
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
                    {/* <label
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
                    </label> */}

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
        </div >
    )
}

export default RightForm