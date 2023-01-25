import React from 'react';
import EducationAndExperience from './EducationAndExperience';
import Skills from './Skills';
import "./About.css";
const About = ()=>{
    return(
        <div className='About' id="About">
            <EducationAndExperience/>
            <Skills/>
        </div>
    )
}
export default About;