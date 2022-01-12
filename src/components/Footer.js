import React from 'react';
import {Link} from "react-router-dom"
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"


function Footer() {
    return (
        <div className='footer' >
            <div className='socialMedia'>
                <a href="https://wa.me/2348135425726" target="_blank"><WhatsAppIcon /></a>
                <Link to="#"><TwitterIcon /></Link>
                <Link to="#"><InstagramIcon /></Link>
                <Link to="#"><FacebookIcon /></Link>
                <Link to="#"><LinkedInIcon /></Link>
            </div>
            <p> 
                &copy; 2022 <a href="https://lukupay.com.ng" target="_blank">
                 https://lukupay.com.ng </a>
            </p>
            <p>Contact: lukupay@gmail.com</p>
        </div>
    )
}

export default Footer
