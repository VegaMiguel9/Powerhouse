import React from "react";
import {Link} from "react-router-dom"
import "./Footer.css"
import { Icon } from 'react-icons-kit'
import {mail} from 'react-icons-kit/feather/mail'
import {map} from 'react-icons-kit/feather/map'
import {phone} from 'react-icons-kit/feather/phone'
import {facebook} from 'react-icons-kit/feather/facebook'
import {instagram} from 'react-icons-kit/feather/instagram'

function Footer(){
    return (
        <>
        <footer>
            <div className="footer">
                <div className="contactUsTitle">Contact Us</div>
                <div className="footerContainer" > 
                    <div className="footerItem"><Icon icon ={mail}/><a href="mailto:powerhousefitnessnc@gmail.com"> powerhousefitnessnc@gmail.com</a></div>
                    <div className="footerItem"><Icon icon={map}/> 1808 Anthony Rd <br/> Door 102 <br/> Burlington, NC 27215</div>
                    <div className="footerItem"><Icon icon={phone}/> <a href="tel:336-290-1380"> 336-290-1380</a></div>
                </div>
            </div>
            <div className="footerMenu">
                <nav >
                    <ul>
                        <li>
                        <Link to="/">Home </Link>
                        </li>
                        <li>
                        <Link to="/meetTheTeam">Our Team</Link>
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
            <div className="footerLogo"><img style={{ width: "170px", height: "48px" }} src="/imgs/Logo No Background.png" alt="powerhouse logo"/></div>
            <div className="socialMediaIcons">
                <div><a href="https://www.facebook.com/powerhousefitnessnc"><Icon icon ={facebook}/></a></div>
                <div className="copyright">© POWERHOUSE FITNESS</div>
                <div><a href="https://www.instagram.com/powerhousefitnessnc/"><Icon icon = {instagram}/></a></div>
            </div>
        </footer>
        </>
    )
}
export default Footer;