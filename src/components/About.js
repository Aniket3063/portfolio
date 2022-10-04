import React, { useState } from 'react'
import './About.css'
import Photo from "../components/Images/photo.jpg"
import slatyPhoto from "../components/Images/slatyphoto.jpg"
import NumberHeading from '../components/Templates/NumberHeading'



export default function About() {

  const [change, setchange] = useState(true)

  return (
    <section className='about' id='about'>
      <NumberHeading number="01" name="About Me" />
      <div className='inner'>
        <div className='myself'>
          <p>
            My name is Aniket Kumar and I am from Bijwasan, New Delhi.<br/>

            ➣ I have completed my Higher Education from <a href="https://www.linkedin.com/company/rpvvsec10dwarka/about/" target="_blank" rel="noreferrer" >R.P.V.V. (Rajkiya Pratibha Vikas Vidyalaya) Dwarka Sector - 10, New Delhi-110075</a> in 2020.<br/>

            ➣ Currently, I am pursuing under graduation (B.Tech) in IT (Information Technology), <a href="http://www.nsit.ac.in/" target="_blank" rel="noreferrer" >Netaji Subhas University of Technology, Sector 3 Dwarka, New Delhi-110078</a>.<br/>

            My skills are I am good in Frontend Web Development , C++, and Python.<br/>

            My hobbies are playing Table Tennis , Cycling , Photography , Designing and Listening Music.<br/>

            My strengths are I am a quick learner, and a self-motivated person and I always try to give my best in the work.<br/>

            My weaknesses are I easily trust everyone and now I want to try to overcome this weakness.<br/>

            My short-term goal is to join a reputed company where I can utilize my skills in the work. I am assigned with and work for the growth of myself and the Organization.<br/>

            My long-term goal is to achieve a good position with my hard work and dedication where I can build myself and contribute to the growth of the Country.<br/>

            That's all about me. Thanks.
          </p>
        </div>
        <div className='photo' style={{
          width: change ? "90%" : "85%", height: change ? "90%" : "85%", transition: "var(--transition)", maxWidth: "310px", maxHeight: "310px"
        }}>
          <img src={change ? slatyPhoto : Photo} onMouseOver={() => setchange(false)} onMouseOut={() => setchange(true)} alt="img" />
        </div>
      </div>
    </section>
  )
}
