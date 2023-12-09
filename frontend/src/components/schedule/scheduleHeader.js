import React from "react";
import { Link } from "react-router-dom";

function scheduleHeader() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/gettingStarted">Getting Started</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/ourGym">Our Gym</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default scheduleHeader;
