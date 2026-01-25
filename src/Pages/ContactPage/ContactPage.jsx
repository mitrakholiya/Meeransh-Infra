import React from 'react'
import Header from '../../Common/Header'
import HeroContact from './components/HeroContact'
import Section1Contact from './components/Section1Contact'
import BlogService from '../ServicePage/Components/BlogService'
import Contact from '../HomePage/Sections/Contact'
import Footer from '../../Common/Footer'

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="bg-main w-full">
      <HeroContact />
      </div>
      <Section1Contact/>
      <BlogService/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default ContactPage
