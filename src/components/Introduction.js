import React from 'react'
import './Introduction.css'
import Button from '../components/Templates/Button'


export default function Introduction() {
    return (
        <section className="introduction intro">
            <div className="greet">
                <h1> Hi , my name is </h1>
            </div>
            <div className="my-name">
                <h2> Aniket Kumar. </h2>
            </div>
            <div className="work">
                <h3> I build things for the web.</h3>
            </div>
            <div className="info">
                <p> I am a 2nd year IT Student pursuing my undergraduate programme B.Tech.<br />
                    I have a great interest in building (and occasionally designing) exceptional
                    digital experiences. Currently, I’m focused on learning ReactApp and Database Management.

                </p>

            </div>
            <br /><br />
            <Button name="my Work!" link="#projects" size={(window.innerWidth > 426)?"20":"16" }/>
        </section>
    )
}
