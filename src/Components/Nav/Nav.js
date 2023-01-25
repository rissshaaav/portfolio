import React from 'react';
import {animateScroll as scroll, Link} from 'react-scroll';
import "./Nav.css";

const Nav = ()=>{
    const navItems=["Home","About","Services","Contact"];
    return(
        <div className='Nav'>
            <div className='Title' onClick={()=> scroll.scrollToTop()}>PORTFOLIO</div>
            <ul>
                {
                    navItems.map((item,index)=>(
                        <Link activeClass='active' to={item} smooth={true} duration={1000} key={index}>
                            <li className="navItems">
                                {item}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}
export default Nav;