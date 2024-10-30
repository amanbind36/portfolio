import React,{useEffect} from 'react'
import LinearProgress from "@mui/material/LinearProgress";
import Styles  from "./skill.module.css"
import { ImHtmlFive } from 'react-icons/im';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { IoLogoCss3 } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact,FaGithub ,FaNodeJs} from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { SiTailwindcss,SiMongodb } from "react-icons/si";
import pic4 from "../About/pic/a4.png"
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
    <div  data-aos="fade-up"><h1>Skills</h1></div>
    <div className={Styles.line}></div>
    {/* <div className={Styles.container}>
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
    </div> */}


    <div className={Styles.container}>
         <div>
         <ImHtmlFive className={Styles.icon}/>
          <h1>HTML</h1>
         </div>
         <div>
         <IoLogoCss3 className={Styles.icon}/>
         <h1>CSS</h1>
          </div>
          <div>
          <TbBrandJavascript className={Styles.icon}/>
          <h1>Javascrip</h1>
          </div>
          <div>
          <FaReact className={Styles.icon}/>
          <h1>REACT</h1>
          </div>
          <div>
          <FaPython className={Styles.icon}/>
          <h1>Python</h1>
          </div>
          <div>
          <FaGithub className={Styles.icon}/>
          <h1>Git</h1>
          </div>
          <div>
          <SiTailwindcss className={Styles.icon} />
          <h1>Tailwind css</h1>
          </div>
          <div>
          <SiMongodb className={Styles.icon} />
          <h1>MongoDB</h1>
          </div>
          <div>
            <FaNodeJs className={Styles.icon}/>
          <h1>Node</h1>
          </div>
       

      </div>
    
    {/* <div className="skills" id="skills">
        <div class="sklcont">
            <h1 >Skills</h1>
            <div className="skls">
                <div className={Styles.box}><i className="fa-brands fa-java fa-xl"></i>Python</div>
                <div className=" box">Data Structures</div>
                <div className=" box">Algorithms</div>
                <div className=" box"><i className="fa-brands fa-html5 fa-xl"></i>HTML</div>
                <div className=" box"><i className="fa-brands fa-css3-alt fa-xl"></i>CSS</div>
                <div className=" box">Tailwind css</div>
                <div className=" box"><i className="fa-brands fa-js fa-xl"></i>JavaScript</div>
                <div className=" box"><i className="fa-brands fa-react"></i>React.js</div>
                <div className=" box"><i className="fa-brands fa-git-alt"></i>Git</div>
                <div className=" box"><i className="fa-brands fa-github"></i>GitHub</div>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default Skills