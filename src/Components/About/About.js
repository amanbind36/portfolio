import React from 'react'
import Styles from "./about.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation ,FreeMode} from "swiper";
import pic1 from "./pic/a1.png"
import pic2 from "./pic/a2.png"
import pic3 from "./pic/a3.png"
import pic4 from "./pic/a4.png"
import { EffectCube } from "swiper";
import spic3 from "../image/spic3.jpeg"
const About = () => {
  return (
    <>
    <div className={Styles.head}><h1>About Me</h1></div>
    <div className={Styles.line}></div>
    
    <div className={Styles.container}>
    
      <div className={Styles.left}>
      
      <div className={Styles.cube}>
                  <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    loop={true}
                    cubeEffect={{
                      shadow: true,
                      slideShadows: true,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                      
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                    }}
                    pagination={true}
                    modules={[EffectCube,Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide style={{height:"600px"}}>
                      <img height="1000px" src={pic2} />
                    </SwiperSlide>
                    <SwiperSlide style={{height:"600px"}}>
                      <img height="1000px" src={pic1} />
                    </SwiperSlide>
                    <SwiperSlide style={{height:"600px"}}>
                      <img height="1000px" src={pic3} />
                    </SwiperSlide>
                    {/* <SwiperSlide>
                      <img src={pic4} />
                    </SwiperSlide> */}
                  </Swiper>
                </div>
        {/* <img width="100%" height="100%" src={spic3}/> */}
      </div>
      <div className={Styles.right}>
        <div className={Styles.inside}>
       <h3>WELCOME</h3>
       <h1>About Me</h1>
     
      
       <p>Hello, I am Aman Bind from Jaunpur Uttar Pradesh. I have completed my B.tech in Electronics and Instrumentation Engineering from MJP Rohilkhand University from Bareilly Uttar Pradesh after completing my B.tech I joined Masai School where  I learned Html,Css, Javascrip and React.Js and Now I am doing Internship at Shivila Technology.</p>

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