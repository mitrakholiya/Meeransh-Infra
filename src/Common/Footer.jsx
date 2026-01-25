import React from "react"
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import FooterLastSection from "./FooterComponents/FooterLastSection"

const Footer = () => {
  return (<>
    <footer className="bg-black mt-[100px]">
      <div className="container mx-auto px-[5%] flex flex-col sm:flex-row justify-between text-[#959595] py-8 flex-wrap">

        {/* Left Section */}
        <div className="xl:w-[30%] w-full xl:mb-[0px] mb-[20px]">
          <img
            src="/LOGO.png"
            alt="Meeransh Infra Logo"
            className="h-[70px] object-contain mb-4"
          />

          <p className="mb-4">
            At Meeransh Infra, we bring together functionality and aesthetics to
            provide homeowners with customised and efficient home Construction.
            Our team specialise in construction of houses, and help you create a
            personalised home to suit your lifestyle.
          </p>

          <h2 className="mb-4 font-semibold text-lg">Get In Touch</h2>

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
        <div className="xl:w-[70%] w-full">
          <div className="flex flex-wrap justify-between w-full">
            {/* Left Box */}
            <div className="flex flex-col md:w-1/4 w-1/2">
              <div className="flex flex-col">
                <Link to="/" className="text-blue-500 font-bold text-[22px]">Home</Link>
                <a href="#">About Us</a>
                <a href="#">Why Us</a>
                <a href="#">Our Project</a>
                <a href="#">Make My House</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="flex flex-col ">
                <p className="text-blue-500 font-bold text-[22px]">Approach & Pricing</p>
                <a href="#">How it works</a>
                <a href="#">Consturction Estimate</a>
              </div>
            </div>
            
            {/* Left-center Box */}
            <div className="flex flex-col md:w-1/4 w-1/2">
              <Link to="/" className="text-blue-500 font-bold text-[22px]">Service</Link>
              <a href="#">Residential construction</a>
              <a href="#">Commercial construction</a>
              <a href="#">Maintenance</a>
              <a href="#">Renovation</a>
              <a href="#">Architecture Plans</a>
              <a href="#">Engineering Service</a>
              <a href="#">Contractor Service</a>
            </div>
            {/* Right -Center box */}
            <div className="flex flex-col md:w-1/4 w-1/2">
              <div className="flex flex-col">
                <Link to="/" className="text-blue-500 font-bold text-[22px]">Information</Link>
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cancellation Policy</a>
                <a href="#">Referral Policy</a>
                <a href="#">FAQs</a>
              </div>
              <div className="flex flex-col">
                <p className="text-blue-500 font-bold text-[22px]">Resources</p>
                <a href="#">Blogs & News</a>
                <a href="#">Careers</a>
              </div>
            </div>

            {/* Right Box */}
            <div className="flex flex-col md:w-1/4 w-1/2">
              <div className="flex flex-col">
                <Link to="/" className="text-blue-500 font-bold text-[22px]">Others</Link>
                <a href="#">Join as an Expert</a>
                <a href="#">Channel Partner</a>
                <a href="#">Refer & Earn</a>
                <a href="#">Material Supplier</a>
                <a href="#">Join us as a Freelancer</a>
              </div>
              <div className="flex flex-col">
                <p className="text-blue-500 font-bold text-[22px]">Products
                </p>
                <a href="#">Building Materials</a>
                <a href="#">Floor Plans</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <FooterLastSection />
  </>
  )
}

export default Footer
