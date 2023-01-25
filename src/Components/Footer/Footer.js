import React from 'react'
import "./Footer.css";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
const Footer = ()=>{
    const email = "mishrishav@gmail.com"
    const icons = [
        {
            path: "https://www.linkedin.com/in/rissshaaav/",
            logo: <FaLinkedin size="30"/>
        },
        {
            path: "https://github.com/rissshaaav/",
            logo: <FaGithub size="30"/>
        },
        {
            path: "https://www.instagram.com/rissshaaav/",
            logo: <FaInstagram size="30"/>
        },
        {
            path: "#",
            logo: "#"
        }
    ];
    return(
        <div className='Footer'>
            <div className='Detail'>My Email: <strong>{email}</strong></div>
            <ul>
                {icons.map((item, index)=>(
                    <a href={item.path} target="_blank" rel="noopener noreferrer" key={index}>
                        <li className="logo">{item.logo}</li>
                    </a>
                ))}
            </ul>
        </div>
    )
}
export default Footer;