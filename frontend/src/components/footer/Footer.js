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
            <div className="contactUs">Contact Us</div>
            <div className="footerInformation" > 
            <Icon icon ={mail}/> : powerhousefitnessnc@gmail.com
            <br/>
            <br/>
            <Icon icon={map}/> : 1808 Anthony Rd <br/> Door 102 <br/> Burlington, NC 27215
            <br/>
            <br/>
            <Icon icon={phone}/> : 336-524-3787
            </div>
        </footer>
        </>
    )
}
export default Footer;