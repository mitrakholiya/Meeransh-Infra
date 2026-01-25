import React from 'react'
import Header from '../../Common/Header'
import HeroService from './Components/HeroService'
import Section1ServicePage from './Components/Section1ServicePage'
import FAQ from './Components/FAQ'
import GetEstimeteBlock from './Components/GetEstimeteBlock'
import BlogService from './Components/BlogService'
import Contact from '../HomePage/Sections/Contact'
import Footer from '../../Common/Footer'

const ServicePage = () => {
    return (
        <>
            <Header />
            <div className="bg-main w-full">
                <HeroService />
            </div>
            <Section1ServicePage />
            <FAQ />
            <GetEstimeteBlock/>
            <BlogService/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default ServicePage
