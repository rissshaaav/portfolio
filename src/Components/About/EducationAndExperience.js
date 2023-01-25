import React from 'react';
import "./EducationAndExperience.css";
const EducationAndExperience = ()=>{
    const table = [
        {
            school: "St. Xavier's Jr/Sr School",
            degree: "Matriculation",
            year: "2008-2018",
            experience: "Web Designer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            school: "Shanti Niketan Sr. Sec. School",
            degree: "Intermediate",
            year: "2018-2020",
            experience: "Front-End Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            school: "Vellore Institute of Technology, Bhopal",
            degree: "B.Tech CSE",
            year: "2021-2025",
            experience: "Full Stack Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];
    return(
        <div className='EducationAndExperience'>
            <table>
                <caption><h1>Education & Experience</h1></caption>
                <thead>
                    <tr>
                        <th id='Education'>Education</th>
                        <th id='Experience'>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((item,index)=>(
                        <tr key={index}>
                            <td>
                                <h3 className='TableItem'>{item.school}</h3>
                                <span className='TableItem'>{item.degree}</span>
                                <span className='TableItem'>{item.year}</span>
                            </td>
                            <td>
                                <h3 className='TableItem'>{item.experience}</h3>
                                <span className='TableItem'>{item.text}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default EducationAndExperience;