import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x';
import "./navBar.css"

function NavBar() {

  const [toggle, setToggle] = useState(false)

  const handleToggle= ()=>{
    setToggle(!toggle)
  }
  return (
    <header>
      <nav className={toggle ? "navbar expanded" : "navbar"}>
      <a href="https://www.powerhousefitnessnc.com">
        <img className="logo" src="https://static.wixstatic.com/media/7bd5ba_7dd531140de54a26bb6baa63a155ca4c~mv2.jpg/v1/fill/w_318,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image_6483441_edited.jpg"  
        style={{ width: "170px", height: "48px" }}
        alt="Powerhouse Fitness"
        />
        </a>
        <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
        </div>
        <ul className="links">
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
    </header>
  );
}

export default NavBar;
