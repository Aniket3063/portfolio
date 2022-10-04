import React, { useState } from 'react'
import Button from '../components/Templates/Button'
import './Navbar.css'


export default function Navbar() {

    const [Show, setShow] = useState(false)


    return (
        <>

            <div className='header' style={Show ? { height: "500px" } : { height: "100px" }}>
                <div className='flex' style={{ height: "100px", width: "100%" }}>
                    <nav>
                        <div className="logo">
                            <a href="/">
                                <span className="green-color"> {`<`} </span>
                                <span className="logo-name"> Aniket Kumar </span>
                                <span className="green-color"> {`/>`} </span>
                            </a>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li><a href="#about" className='hover-underline-animation'><span className="green-color"> 01. </span>About</a></li>
                                <li><a href="#skill" className='hover-underline-animation'><span className="green-color"> 02. </span>Skills</a></li>
                                <li><a href="#projects" className='hover-underline-animation'><span className="green-color"> 03. </span>Projects</a></li>
                                <li><a href="#hobbies" className='hover-underline-animation'><span className="green-color"> 04. </span>Hobbies</a></li>
                                <li><a href="#contact" className='hover-underline-animation'><span className="green-color"> 05. </span>Contact</a></li>
                            </ul>
                            <Button name="Resume" link="/" target="_blank"/>
                        </div>

                        <div className='navbar-collapse flex-column' >
                            <div onClick={() => { Show ? setShow(false) : setShow(true) }}>{Show ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}</div>
                        </div>


                    </nav>
                </div>
                <div className='navbar-vertical' style={Show && (window.innerWidth<769)? { display: "inline-block" } : { display: "none" }}>
                    <ul>
                        <li><a href="#about" className='hover-underline-animation'><span className="green-color"> 01. </span>About</a></li>
                        <li><a href="#skill" className='hover-underline-animation'><span className="green-color"> 02. </span>Skills</a></li>
                        <li><a href="#projects" className='hover-underline-animation'><span className="green-color"> 03. </span>Projects</a></li>
                        <li><a href="#hobbies" className='hover-underline-animation'><span className="green-color"> 04. </span>Hobbies</a></li>
                        <li><a href="#contact" className='hover-underline-animation'><span className="green-color"> 05. </span>Contact</a></li>
                    </ul>
                    <div className='flex' style={{ height: "50px" }}>
                        <Button name="Resume" link="/" target="_blank"/>
                    </div>
                    <br /><br />
                </div>

            </div>


            <div orientation="left" className="left line">
                <ul className="social_links">
                    <li><a href="https://github.com/Aniket3063" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/the_aniket.kumar/" target="_blank" rel="noreferrer"><i
                        className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/aniket-kumar-2b73a522a/" target="_blank" rel="noreferrer"><i
                        className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100041228673555" target="_blank" rel="noreferrer"><i
                        className="fa fa-facebook"></i></a></li>
                    <li><a href="/" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>


                </ul>
            </div>
            <div orientation="right" className="right line">
                <div className="e_mail">
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlLWnbTXwDcmVqFZXqcvdhDmMCpsXcQcWCfhcVFzHXbDwszSmRFvkbFwxxvMhLZWNqbkVB" target="_blank" rel="noreferrer">aniket.kumar.ug21@nsut.ac.in</a>
                </div>
            </div>
        </>
    )
}
