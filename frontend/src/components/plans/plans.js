import React from "react";
import "./plans.css";

function plans() {
  return (
    <div className="plansBackground">
      <div className="titleImage">
        <img src="/imgs/plansTitleImg.jpg" alt="plans title picture" />
      </div>
      <div className="ourPlansTitle">
        <h1>OUR PLANS</h1>
      </div>
      {/* <---------------- PLANS --------------------> */}
      <div className="plansFlex">
        <div className="plansBox">
          {/* personal training */}
          <div className="plansImgs">
            <img
              src="/imgs/plansPt.jpg"
              alt="plans personal training picture"
            />
            <div className="plansTitle">
              <h3> Personal Training </h3>
            </div>
            <div>
              <p className="plansText">
                Personal Training Prefer a more personalized approach for your
                training? We offer 1on1 personal training. Our coaches are all
                nationally accredited trainers who are ready to help you reach
                your goals.
              </p>
            </div>
          </div>
        </div>
        <div className="plansBox">
          {/* group fitness */}
          <div className="plansImgs">
            <img
              src="/imgs/plansGroupFitness.jpg"
              alt="plans group fitness picture"
            />
            <div className="plansTitle">
              <h3> Group Fitness </h3>
            </div>
            <div>
              <p className="plansText">
                Group Fitness Our unlimited membership will give you access to
                our group fitness training and open gym hours. Ask us about our
                first responder, military (active & vet) and teacher/student
                discount!
              </p>
            </div>
          </div>
        </div>
        <div className="plansBox">
          {/* punch pass */}
          <div className="plansImgs">
            <img src="/imgs/plansPunchPass.jpg" alt="plans punch pass image" />
            <div className="plansTitle">
              <h3> Punch Pass </h3>
            </div>
            <div>
              <p className="plansText">
                Always on the go and not able to commit to a membership? We
                offer a 10 punch pass option that is suitable for you. These
                passes can be redeemed for Group Fitness training and/or open
                gym.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="plansBox">
          {/* drop in */}
          <div className="plansImgs">
            <img src="/imgs/plansDropIn.jpg" alt="plans drop in image" />
            <div className="plansTitle">
              <h3> Drop In </h3>
            </div>
            <div>
              <p className="plansText">
                You are invited to drop in during any of our scheduled class, or
                open gym hours. Please contact us to give us a heads up. We are
                excited to meet you!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <---------- contact ----------> */}
      <div className="contactBox">
        <div className="contactFlex">
          {/* <img src="/imgs/weightlifting.jpg" alt="plans contact picture" /> */}
        </div>
        <div>
          <h3>Don't know what to pick?</h3>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default plans;
