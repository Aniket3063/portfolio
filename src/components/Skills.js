import React from 'react'
import NumberHeading from '../components/Templates/NumberHeading'
import ProgressBar from '../components/Templates/ProgressBar'
import ProgressCircular from '../components/Templates/ProgressCircular'
import './Skills.css'

export default function Skills() {
  return (
    <section className='skill' id="skill">
      <NumberHeading number="02" name="My Skills" />

      <div className='skillbox'>
        <div className='technicalskill'>
          <h2>Technical Skills</h2><br /><br />
          <ProgressBar name="HTML/CSS/Javascript" value="80" /><br />
          <ProgressBar name="C++ / DSA" value="30" /><br />
          <ProgressBar name="Python" value="40" /><br />
          <ProgressBar name="React js" value="50" /><br />
          <ProgressBar name="SQL" value="10" /><br />
          <ProgressBar name="mongo DB" value="5" /><br />
          <ProgressBar name="Graphics Designing" value="75" /><br />

        </div>
        <div className='professionalskill'>
          <h2>Professional Skills</h2><br/><br/><br/><br/>
          <div className='prof-skill-box'>
            
            <ProgressCircular name="Communication Skills" value="65" size='100'/>
            <ProgressCircular name="Team Work" value="50" size='100'/>
            <ProgressCircular name="Project Management" value="75" size='100'/>
            <ProgressCircular name="Creativity" value="35" size='100'/>

          </div>

        </div>
      </div>



    </section >
  )
}
