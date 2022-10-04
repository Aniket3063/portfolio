import React from 'react'
import About from './About'
import ContactUs from './ContactUs'
import Hobbies from './Hobbies'
import Introduction from './Introduction'
import Project from './Project'
import Skills from './Skills'

export default function Main() {
    return (

        <div className='main'>
            <Introduction />
            <About />
            <Skills />
            <Project />
            <Hobbies />
            <ContactUs />
        </div>

    )
}
