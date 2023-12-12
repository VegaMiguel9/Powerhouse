import React from "react";
import "./homePage.css"

function homePage(){
    return (
        <>
            <section style={{height:"684px", margin: "0px 10px"}}>
                <video src="https://video.wixstatic.com/video/7bd5ba_23067a2f5b53433ab2e48eba10b20d9e/720p/mp4/file.mp4" 
                role="presentation"
                crossorigin="anonymous"
                playsinline
                preload="auto"
                muted
                loop
                tabindex="-1"
                autoplay
                controls
                style={{height: "100% ", width: "100%", objectFit: "cover", objectPosition: "center center", opacity: "1" }}
                ></video>
            </section>
            <section className="ourServices" >
                    <h2 className="services" >OUR SERVICES</h2>
                    <div className="group">
                        <div className="box">
                            <h3>Group Fitness</h3>
                            <a style={{textDecoration: "none"}} href="/plans"><span>Learn More</span></a>
                        </div>
                        <div className="box">
                            <h3>Personal Training</h3>
                            <a style={{textDecoration: "none"}} href="/plans"><span>Learn More</span></a>
                        </div>
                        <div className="box">
                                <h3>Punch Pass</h3>
                                <a style={{textDecoration: "none"}} href="/plans"><span>Learn More</span></a>
                        </div>
                        <div className="box">
                                <h3>Drop In</h3>
                                <a style={{textDecoration: "none"}} href="/plans"><span>Learn More</span></a>
                        </div>
                    </div>
            </section>
            <section className="ourGymSection">
                    <h2 className="gymHeader">OUR GYM</h2>
                    <div className="ourGym">
                        <div className="imageContainer">
                            <img style={{height: "400px"}} src="/imgs/Crossfit.jpg"
                            alt="crossfit"
                            />
                        </div>
                        <div className="imageContainer">
                            <img style={{height: "400px"}} src="imgs/weightlifting.jpg" 
                            alt="weighlifting"
                            />
                        </div>
                    </div>
            </section>
        </>
    )
};

export default homePage