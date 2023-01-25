import React from 'react';
import "./Skills.css";
const Skills = ()=>{
    // const skills = ["HTML","CSS","JavaScript","React JS"];
    const skills = [
        {
            name:"HTML",
            percentage: "95%"
        },
        {
            name: "CSS",
            percentage: "85%"
        },
        {
            name: "JavaScript",
            percentage: "60%"
        },
        {
            name: "React JS",
            percentage: "70%"
        }
    ]
    return (
        <div className='Skills'>
            <table>
                <caption><h1>Skills</h1></caption>
                <tbody>
                    {skills.map((item,index)=>(
                        <tr key={index}>
                            <td>
                                <span className='TableItem' style={{width: item.percentage}}>
                                    <span>{item.name}</span><span>{item.percentage}</span>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Skills;