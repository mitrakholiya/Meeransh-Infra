import React from 'react'
import Header from '../../Common/Header'

import Main from './Sections/Main'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section5 from './Sections/Section5'
import Contact from './Sections/Contact'
import Footer from '../../Common/Footer'

const Homepage = () => {
    return (
        <div >
                <Header/>
            <div className="bg-main w-full">
                <Main/>
            </div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section5/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Homepage
