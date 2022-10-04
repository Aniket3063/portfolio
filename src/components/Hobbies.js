import React from 'react'
import './Hobbies.css'
import NumberHeading from '../components/Templates/NumberHeading'


export default function Hobbies() {
  return (
    <section className='hobbies' id='hobbies'>
        <NumberHeading number="04" name="Hobbies" />
        <br /><br />
        <div className='hobbies-outer flex'>
            <div className='hobbies-inner flex-column'>
                <img src="https://cdn.dribbble.com/users/2069402/screenshots/5574718/gif-4mb.gif" alt="gif" />
                    <p>Web Development</p>
            </div>
            <div className='hobbies-inner flex-column'>
                <img src="https://media0.giphy.com/media/8P7ugGf2prBbDtQ3tk/giphy.gif?cid=790b76113ef030461816e45ae6121a945b314dcf8a8076f5&rid=giphy.gif&ct=s" alt="gif" />
                <p>Table Tennis</p>
            </div>
            
            <div className='hobbies-inner flex-column'>
                <img src="https://c0.piktochart.com/v2/uploads/610d4fbe-cf12-4782-b39b-6290f14a4bd7/d51a78e0ca07ae6c8b972c72c5ec9e76bb008dd7_original.gif?1600762592=" alt="gif" />
                    <p>Cycling</p>
            </div>
            <div className='hobbies-inner flex-column'>
                <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpuTejFE.gif" alt="gif" />
                    <p>Chess</p>
            </div>
            <div className='hobbies-inner flex-column'>
                <img src="https://media0.giphy.com/media/xcFJX6T9z2iqiB9Ud9/giphy.gif" alt="gif" />
                    <p>Photography</p>
            </div>
            <div className='hobbies-inner flex-column'>
                <img src="https://media.tenor.com/ii_OGSfl2R0AAAAi/narseh-narseh-streaming.gif" alt="gif" />
                    <p>Listening Music</p>
            </div>


      </div>
    </section>
  )
}
