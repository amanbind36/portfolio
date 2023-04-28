import React from 'react'
import Styles from "./navabar.module.css"
// import { Link } from "react-scroll";
import Banner from './autoSlider/Multi'
import * as Scroll from 'react-scroll';
import {Link} from 'react-router-dom'

const Navbar = () => {

  



  return (
    <>
    <div className={Styles.container}>
    <div className={Styles.left}><h1>Aman</h1></div>
    <div className={Styles.right}>
       
            <ul style={{display:"flex"}}>
            <li>
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
            Home
            </Link>
            </li>
            <li>
           <Link to="/about" spy={true} smooth={true}>
           About
           </Link>
           </li>
           <li>
                <Link to='/skills'>
                Skills
                </Link>
                </li>
                <li>
                <Link to="/appa">Projects</Link>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
       
    </div>
    </div>
   
    <div className={Styles.ban}>
    <div className={Styles.banner}><Banner/></div>
    <div> <div className={Styles.square}></div></div>
   
    </div>
   
    </>
  )
}

export default Navbar