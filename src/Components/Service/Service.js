import React from 'react';
import './Service.css';
import {FaFigma, FaReact, FaNodeJs, FaBuffer, FaShopify, FaBullhorn} from "react-icons/fa"
const Service = ()=>{
    const service = [
        {
            icon: <FaFigma size="30"/>,
            title: "UI Designing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: <FaReact size="30"/>,
            title: "Front-End Development",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: <FaNodeJs size="30"/>,
            title: "Back-End Development",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: <FaBuffer size="30"/>,
            title: "Full Stack Development",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: <FaShopify size="30"/>,
            title: "SEO Marketing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: <FaBullhorn size="30"/>,
            title: "Lorem Ipsum",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];
    return(
        <div className='Service' id="Services">
            <h1>Services</h1>
            <div className='CardContainer'>
                {service.map((item,index)=>(
                    <div className='Card' key={index}>
                        <div id='Icon'>{item.icon}</div>
                        <div id='Title'>{item.title}</div>
                        <div id='Text'>{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Service;