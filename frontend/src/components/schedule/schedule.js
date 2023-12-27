import React from "react";
import "./schedule.css";

function schedule() {
  return (
    <div className="scheduleBackground">
      <div className="scheduleOpener">
        <div className="scheduleText">
          <h1> Shedule </h1>
          <p>
            Our strength and conditioning facility offers group fitness training
            and personal training. All workouts are designed for any fitness
            level with different intensities depending on your abilities.
          </p>
          <div className="scheduleImgTwo">
            <img
              src="/imgs/scheduleImgTwo.jpg"
              alt="second background photo for schedule page"
            />
          </div>
        </div>
        <div className="scheduleImg">
          <img
            src="/imgs/scheduleImg.jpg"
            alt="background photo for schedule page"
          />
        </div>
      </div>
      {/* <---------- schedule ----------> */}
      <div className="scheduleTitle">
        <h1> MONDAY - SATURDAY</h1>
      </div>
      <div className="scheduleList">
        <div className="listChild">
          <h4> MONDAY </h4>
          <ul>Group Fitness 6:30 AM - 7:30 AM</ul>
          <ul>Group Fitness 8:30 AM - 9:30 AM</ul>
          <ul>Open Gym 10:00 AM - 12:00 PM</ul>
          <ul>Group Fitness 5:30 PM - 6:30 PM</ul>
          <ul>Group Fitness 6:30 PM - 7:30 PM</ul>
        </div>
        <div className="listChild">
          <h4> TUESDAY </h4>

          <ul>Group Fitness 8:30 AM - 9:30 AM</ul>
          <ul>Open Gym 10:00 AM - 12:00 PM</ul>
          <ul>Group Fitness 5:30 PM - 6:30 PM</ul>
          <ul>Group Fitness 6:30 PM - 7:30 PM</ul>
        </div>
        <div className="listChild">
          <h4> WEDNESDAY </h4>

          <ul>Group Fitness 6:30 AM - 7:30 AM</ul>
          <ul>Group Fitness 8:30 AM - 9:30 AM</ul>
          <ul>Open Gym 10:00 AM - 12:00 PM</ul>
          <ul>Group Fitness 5:30 PM - 6:30 PM</ul>
          <ul>Group Fitness 6:30 PM - 7:30 PM</ul>
        </div>
        <div className="listChild">
          <h4> THURSDAY </h4>

          <ul>Group Fitness 8:30 AM - 9:30 AM</ul>
          <ul>Open Gym 10:00 AM - 12:00 PM</ul>
          <ul>Group Fitness 5:30 PM - 6:30 PM</ul>
          <ul>Group Fitness 6:30 PM - 7:30 PM</ul>
        </div>
        <div className="listChild">
          <h4> FIRDAY </h4>

          <ul>Group Fitness 6:30 AM - 7:30 AM</ul>
          <ul>Group Fitness 8:30 AM - 9:30 AM</ul>
          <ul>Open Gym 10:00 AM - 12:00 PM</ul>
          <ul>Group Fitness 5:30 PM - 6:30 PM</ul>
        </div>
        <div className="listChild">
          <h4> SATURDAY </h4>

          <ul> Open Gym 9:00 AM - 12:00 PM</ul>
        </div>
        <div className="listChild">
          <h4> SUNDAY </h4>

          <ul> Closed</ul>
        </div>
      </div>
    </div>
  );
}

export default schedule;
