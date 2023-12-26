import React from 'react'
import "./OurGym.css"
export default function OurGym() {
  return (
    <div className='OurGymContainer' style={{backgroundColor: "white"}}>
        <section>
             <div>
                <h2>Elite Strength & Conditioning Facility</h2>
                <img style={{width: "100%"}} src='https://static.wixstatic.com/media/7bd5ba_5721f4be054d449685290e81297f0de0~mv2.jpeg/v1/crop/x_0,y_1083,w_6000,h_1835/fill/w_981,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/D6D996DC-4ED5-41F6-BAD7-5648D03B3F21.jpeg'  alt='training facility'/>
                <p>When you walk into Powerhouse Fitness expect a positive and welcoming environment. Your goals will become ours and we promise to be in your corner throughout your fitness journey. Whether it's performing your first pull up or fitting into clothes you haven’t worn in a while, we’re here to prove you’re capable of amazing things. Lets celebrate your fitness victories together.</p>
             </div>
             <div className='container'>
                <div>
                    <h2>Be Challenged The Powerhouse Way</h2>
                    <video style={{width: "100%" }} preload= "none" playsInline = "true" controls src="https://video.wixstatic.com/video/7bd5ba_2efdad5a702e4983abd5141e6f4d89bd/1080p/mp4/file.mp4"></video>
                    <p>Our workout training plan is created in house by our head trainer with over a decade of fitness programming experience. We see what our members need help with in order to reach their full fitness potential and we design a plan that is best suited. Our goal is for you to walk out of the gym proud of the hard work you’ve put in and ready to take on whatever else you have planned for the day.</p>
                </div>
                <div>
                </div>
             </div>
        </section>
    </div>
  )
}
