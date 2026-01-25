import React from 'react'
import ContactLeft from './ContactLeft'
import RightForm from './RightForm'

const Section1Contact = () => {
    return (
        <div className="container mx-auto sm:px-[5%] z-[1] relative py-[100px]">
            <div className="flex flex-wrap">
                <ContactLeft />
                <RightForm/>
            </div>
        </div>
    )
}

export default Section1Contact
