import React,{ useEffect }  from 'react'
import Styles from "./about.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation ,FreeMode} from "swiper";
import pic1 from "./pic/a1.png"
import pic2 from "../image/amn.png"
import pic3 from "./pic/a3.png"
import pic4 from "./pic/a4.png"
import { EffectCube } from "swiper";
import spic3 from "../image/spic3.jpeg"
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
    <div data-aos="fade-up" className={Styles.head}><h1>About Me</h1></div>
    <div className={Styles.line}></div>
    
    <div className={Styles.container}>
    
      
      <div data-aos="fade-up" className={Styles.right}>
        <div className={Styles.inside}>
       <h3>WELCOME</h3>
       <h1>About Me</h1>
     
      
       <p>Hello, I am Aman Bind from Jaunpur, Uttar Pradesh. I completed my B.Tech in Electronics and Instrumentation Engineering from MJP Rohilkhand University in Bareilly, Uttar Pradesh. After finishing my B.Tech, I joined Shivila Technology as a frontend developer. Later, I joined Masai School, where I learned HTML, CSS, JavaScript, and React.js.</p>

       <h1>02. Interests and Hobbies</h1>
       <div className={Styles.hobby}>
        <div>
          <h3>a. Writting</h3>
          <h3>b. Cooking</h3>
          <h3>c. Photography.</h3>
        </div>
        <div>
          <h3>d. Travelling</h3>
          <h3>e. Playing Cricket</h3>
          <h3>f. Playing Mobile Game</h3>
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About