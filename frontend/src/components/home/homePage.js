import React, { useEffect } from "react";
import "./homePage.css";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  });

  return (
    <>
      <section style={{ height: "684px", margin: "0px 10px" }}>
        <video
          src="https://video.wixstatic.com/video/7bd5ba_23067a2f5b53433ab2e48eba10b20d9e/720p/mp4/file.mp4"
          role="presentation"
          playsInline
          preload="auto"
          muted
          loop
          tabIndex="-1"
          autoPlay
          style={{
            height: "100% ",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            opacity: "1",
          }}
        ></video>
      </section>
      <section className="ourServices">
        <h2 className="services" data-aos="zoom-in">
          OUR SERVICES
        </h2>
        <div className="group">
          <div className="box">
            <h3>Group Fitness</h3>
            <a style={{ textDecoration: "none" }} href="/plans">
              <span>Learn More</span>
            </a>
          </div>
          <div className="box">
            <h3>Personal Training</h3>
            <a style={{ textDecoration: "none" }} href="/plans">
              <span>Learn More</span>
            </a>
          </div>
          <div className="box">
            <h3>Punch Pass</h3>
            <a style={{ textDecoration: "none" }} href="/plans">
              <span>Learn More</span>
            </a>
          </div>
          <div className="box">
            <h3>Drop In</h3>
            <a style={{ textDecoration: "none" }} href="/plans">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>
      <section className="ourGymSection">
        <h2 className="gymHeader" data-aos="zoom-in">
          OUR GYM
        </h2>
        <div className="ourGym">
          <div className="imageContainer">
            <img src="/imgs/Crossfit.jpg" alt="crossfit" />
          </div>
          <div className="imageContainer">
            <img src="imgs/weightlifting.jpg" alt="weighlifting" />
          </div>
        </div>
      </section>
      <section className="meetOurTeam">
        <h2 data-aos="zoom-in"> MEET OUR TEAM</h2>
        <div className="meetOurTeamContainer">
          <div className="teamImage">
            <img
              src="https://static.wixstatic.com/media/7bd5ba_46ad70aeacdc4acfb15961cd9baef0b7~mv2.jpeg/v1/crop/x_115,y_427,w_3556,h_3567/fill/w_220,h_208,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5208165F-CEA9-40EA-9E4B-561EE3DA6032.jpeg"
              alt="fitness coach"
            />
            <h3 style={{ color: "white", textAlign: "center" }}>
              Ramon Vega <br /> Owner & Coach
            </h3>
          </div>
          <div className="teamImage">
            <img
              src="https://static.wixstatic.com/media/7bd5ba_6749a9e7342f4fd1bee7d1ed0ae14955~mv2.jpeg/v1/crop/x_40,y_1091,w_3556,h_3567/fill/w_225,h_221,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/D1C87942-F971-41C1-9C2D-FABEE84A06E9.jpeg"
              alt="fitness coach"
            />
            <h3 style={{ color: "white", textAlign: "center", padding: "2%" }}>
              Cristina Vega <br /> Owner & Coach
            </h3>
          </div>
          <div className="teamImage">
            <img
              src="https://static.wixstatic.com/media/7bd5ba_e0d957cf667644509a725ba40a9d67e6~mv2.jpeg/v1/crop/x_208,y_299,w_3529,h_3697/fill/w_215,h_222,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8C9035DA-2554-4A46-983C-10E2195E07ED.jpeg"
              alt="fitness coach"
            />
            <h3 style={{ color: "white", textAlign: "center", padding: "2%" }}>
              David Ortiz <br /> Coach & Personal Trainer
            </h3>
          </div>
          <div className="teamImage">
            <img
              src="https://static.wixstatic.com/media/7bd5ba_9d85d4c6e0ac4db8b2f4ea0f620de35c~mv2.jpeg/v1/crop/x_0,y_175,w_3684,h_3860/fill/w_215,h_222,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/51C075FD-0CFC-465E-83EA-8824F0B15514.jpeg"
              alt="fitness coach"
            />
            <h3 style={{ color: "white", textAlign: "center", padding: "2%" }}>
              Emanuel Martinez <br /> Coach & Personal Trainer
            </h3>
          </div>
        </div>
      </section>
      <section className="nutritionSection">
        <h2 data-aos="zoom-in" className="nutritionHeader">NUTRITION</h2>
        <div className="nutritionContainer">
          <div className="nutritionItem">
            <a href="https://saludysabornc.com/"><img src="https://static.wixstatic.com/media/fdb2a4_85341e9ef50f4894bd77160a717fbc7e~mv2.png/v1/fill/w_304,h_238,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0526_PNG.png" alt="salud y sabor logo" /></a>
          </div>
          <div className="nutritionItem nutritionTextButton">
            <div className="nutritionTextItem"><p >Salud y Sabor is our official meal prep partner</p></div>
            <div className="nutritionTextItem"><a href="https://saludysabornc.com/" target="blank"><button>ORDER HEALTHY MEALS</button></a></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
