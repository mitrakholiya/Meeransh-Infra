import React from 'react'
import BlogService from '../ServicePage/Components/BlogService'
import Header from '../../Common/Header'
import HeroBlog from './components/HeroBlog'
import Contact from '../HomePage/Sections/Contact'
import Footer from '../../Common/Footer'

const Blog = () => {
  return (
    <div>
        <Header/>
        <div className='bg-main'>
            <HeroBlog/>
        </div>
      <BlogService/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Blog
