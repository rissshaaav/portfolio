import React from 'react';
import "./Contact.css";
const Contact = ()=>{
    return(
        <div className='Contact' id="Contact">
            <h1>Contact Me</h1>
            <div className='NameAndEmail'>
                <input type={"text"} placeholder="Enter your Name"></input>
                <input type={"email"} placeholder="Enter your Email"></input>
            </div>
            <div className='Message'>
                <textarea placeholder="Enter your Message"></textarea>
            </div>
            <button>Send Message</button>
        </div>
    )
}
export default Contact;