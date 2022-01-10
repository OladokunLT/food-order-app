import React from 'react';
import {Link} from "react-router-dom"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"


function Footer() {
    return (
        <div className='footer' >
            <div className='socialMedia'>
                <Link to="/"><TwitterIcon /></Link>
                <Link to="/"><InstagramIcon /></Link>
                <Link to="/"><FacebookIcon /></Link>
                <Link to="/"><LinkedInIcon /></Link>
            </div>
            <p>&copy; 2022 Lukupay.com.ng</p>
        </div>
    )
}

export default Footer
