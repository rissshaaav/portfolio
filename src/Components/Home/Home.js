import React from 'react';
import "./Home.css";
import profilePicSneha from "./profilePicSneha.jpg";
import profilePicRishav from "./profilePicRishav.jpg";
const Home = ()=>{
    let safe = false;
    const name = safe?"SNEHA THAKUR":"RISHAV KUMAR";
    const desig = "Web Designer & Developer";
    const pic = safe?profilePicSneha:profilePicRishav;
    return(
        <div className='Home' id="Home">
            <div className='PicContainer'>
                <div className='Pic'>
                    <img src={pic} alt='profile pic'></img>
                </div>
            </div>
            <div className='TextContainer'>
                <div className='Text'>
                    <h1>HI, I'M {name}</h1>
                    <h2>{desig}</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem quisquam itaque provident deserunt ducimus quidem placeat suscipit praesentium quam. Accusamus esse optio possimus non quos atque quam, aliquam ut.</span>
                    <button>Resume.pdf</button>
                </div>
            </div>
        </div>
    )
}
export default Home;