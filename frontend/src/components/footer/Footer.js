import React from "react";
import "./Footer.css"
import { Icon } from 'react-icons-kit'
import {mail} from 'react-icons-kit/feather/mail'
import {map} from 'react-icons-kit/feather/map'
import {phone} from 'react-icons-kit/feather/phone'

function Footer(){
    return (
        <>
        <footer>
            <div className="contactUs">
                <div className="contactUsTitle">Contact Us</div>
                <div className="footerInformation" > 
                    <div className="footerItem"><Icon icon ={mail}/> powerhousefitnessnc@gmail.com</div>
                    <div className="footerItem"><Icon icon={map}/> 1808 Anthony Rd <br/> Door 102 <br/> Burlington, NC 27215</div>
                    <div className="footerItem"><Icon icon={phone}/> 336-524-3787</div>
                </div>
            </div>
            <div className="footerMenu">Menu Items Here</div>
            <div className="footerLogo"> <img style={{ width: "170px", height: "48px" }}  src="/imgs/Logo No Background.png" /></div>
        </footer>
        </>
    )
}
export default Footer;