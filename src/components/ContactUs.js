import React from 'react'
import Button from '../components/Templates/Button'
import './ContactUs.css'
import NumberHeading from '../components/Templates/NumberHeading'

export default function ContactUs() {
  return (
    <section className='contact' id='contact'>
      <NumberHeading name="Contact Me" />
      <br /><br /><br /><br />
      <div className='flex flex-column'>
        <h3 className='green-color' style={{ fontWeight: "500", margin: "10px 0", fontSize: "inherit" }}> 05. What's Next ?</h3>
        <div className="get-in-touch">
          <h3> Get In Touch </h3>
          <p>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        </div>
        <br />
        <div className='formcontent flex'>
          <form action="/action_page.php">
            <label htmlFor="fname">Full Name</label> * 
            <input type="text" id="fname" name="name" placeholder="Your name.." required/>

            <label htmlFor="email">e-mail ID</label> *
            <input type="text" id="email" name="email" placeholder="Your email id.." required/>

            {/* <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select> */}
            <div style={{ minHeight: "300px" }}>
              <label htmlFor="message">Message</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>
            </div>

            <div type="submit" className='submit flex'  >
              <span style={{display:"inline-block"}} onClick={()=>alert("Message Sent!")}> <Button name="Submit" size={(window.innerWidth > 426)?"17":"15" }   /> </span>
            </div>
          </form>
        </div>
        <div className="social-links-div" >
          <div className='flex' style={{margin:"10px"}}>
          <ul className="social_links_horizontal flex">
            <li><a href="https://github.com/Aniket3063" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/the_aniket.kumar/" target="_blank" rel="noreferrer"><i
              className="fa fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/aniket-kumar-2b73a522a/" target="_blank" rel="noreferrer"><i
              className="fa fa-linkedin"></i></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100041228673555" target="_blank" rel="noreferrer"><i
              className="fa fa-facebook"></i></a></li>
            <li><a href="/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" ></i></a></li>


          </ul>
          </div>

          <div className="e_mail_horizontal">
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlLWnbTXwDcmVqFZXqcvdhDmMCpsXcQcWCfhcVFzHXbDwszSmRFvkbFwxxvMhLZWNqbkVB" target="_blank" rel="noreferrer">aniket.kumar.ug21@nsut.ac.in</a>
          </div>
        </div>

      </div>

    </section>

  )
}
