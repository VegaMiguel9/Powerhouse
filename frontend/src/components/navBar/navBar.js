import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"

function homeHeader() {
  return (
    <div className="nav">
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <a href="https://www.powerhousefitnessnc.com">
              <img className="homeHeaderImg" src="https://static.wixstatic.com/media/7bd5ba_7dd531140de54a26bb6baa63a155ca4c~mv2.jpg/v1/fill/w_318,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image_6483441_edited.jpg"  
              style={{ width: "170px", height: "48px" }}
              alt="Powerhouse Fitness"
              />
            </a>
            </li>
            <li>
            <Link to="/">Home </Link>
            </li>
            <li>
            <Link to="/gettingStarted">Getting Started</Link>
            </li>
            <li>
            <Link to="/plans">Plans</Link>
            </li>
            <li>
            <Link to="/ourGym">Our Gym</Link>
            </li>
            <li>
            <Link to="/schedule">Schedule</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default homeHeader;
