import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {

  const [toggle, setToggle] = useState(false)

  const handleToggle= ()=>{
    setToggle(!toggle)
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo"><a href="https://www.powerhousefitnessnc.com">
          <img src="/imgs/Logo No Background.png"  
          style={{ width: "170px", height: "48px" }}
          alt="Powerhouse Fitness"
          />
          </a>
        </div>
        <div>
          <ul className="nav-links">
              <li>
              <Link to="/">Home </Link>
              </li>
              <li>
              <Link to="/meetTheTeam">Meet The Team</Link>
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
        </div>
      </nav>
      <nav id="hamburger-nav">
      <div className="logo">
        <img src="/imgs/Logo No Background.png"  
          style={{ width: "170px", height: "48px" }}
          alt="Powerhouse Fitness"
          />
      </div>
      <div className="hamburger-menu" >
          <div className={`${toggle ? "hamburger-icon open" : "hamburger-icon"}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
          </div>
          <div className={`${toggle ? "menu-links open" : "menu-links"}`}>
              <li>
              <Link to="/" onClick={handleToggle}>Home </Link>
              </li>
              <li>
              <Link to="/meetTheTeam" onClick={handleToggle}>Meet The Team</Link>
              </li>
              <li>
              <Link to="/plans" onClick={handleToggle}>Plans</Link>
              </li>
              <li>
              <Link to="/ourGym" onClick={handleToggle}>Our Gym</Link>
              </li>
              <li>
              <Link to="/schedule" onClick={handleToggle}>Schedule</Link>
              </li>
              <li>
              <Link to="/contact" onClick={handleToggle}>Contact</Link>
              </li>
            </div>
      </div>
      </nav>
    </>
  );
}

export default NavBar;
