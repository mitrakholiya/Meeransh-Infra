import React from 'react'
import Header from '../../Common/Header'
import HeroBuild from './components/HeroBuild'
import Contact from '../HomePage/Sections/Contact'
import Footer from '../../Common/Footer'
import Estimate from './components/Estimate'
import FAQ from '../ServicePage/Components/FAQ'

const Build = () => {
  return (
    <>
      <Header />
      <div className='bg-main'>
        <HeroBuild/>
      </div>
      <Estimate/>
      <FAQ/>
      
      <div className="py-[25px] sm:py-[50px] md:py-[100px]"></div>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Build
