import React from 'react'
import LinearProgress from "@mui/material/LinearProgress";
import Styles  from "./skill.module.css"
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import pic4 from "../About/pic/a4.png"
const Skills = () => {
  return (
    <>
    <div><h1>Skills</h1></div>
    <div className={Styles.line}></div>
    <div className={Styles.container}>
   <div>
  
    <h1>My Skills</h1>
   </div>
   <div  className={Styles.skill}>
   <div>
 
   </div>
   <div className={Styles.im}>
   <div className={Styles.react}>
   <ImHtmlFive className={Styles.icon}/>
   <h1>HTML</h1>
   </div>
   
   <LinearProgress variant="determinate" value={95} />
  <br/>
  <br/>
  <div  className={Styles.react}>
  <IoLogoCss3 className={Styles.icon}/>
  <h1>CSS</h1>
  </div>
 
  <LinearProgress variant="determinate" value={90} />
  <br/>
  <br/>
  <div  className={Styles.react}>
  <TbBrandJavascript className={Styles.icon}/>
  <h1>JAVASCRIPT</h1>
  </div>

  <LinearProgress variant="determinate" value={85} />
  <br/>
  <br/>
  <div  className={Styles.react}>
  <FaReact className={Styles.icon}/>
  <h1>REACT</h1>
  </div>

  <LinearProgress variant="determinate" value={85} />
  <br/>
  <br/>
  <div  className={Styles.react}>
  
  <FaPython className={Styles.icon}/>
  <h1>Python</h1>
  </div>

  <LinearProgress variant="determinate" value={85} />

   </div>
   
   </div>
    </div>
    </>
  )
}

export default Skills