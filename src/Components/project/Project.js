import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper styles
import Styles from "./project.module.css"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import myntra from "../image/myntra.png"
import boat from "../image/boat.png"
import ai from "../image/ai.png"
import reverb from "../image/reverb.png"
import flip from "../image/flip.png"
import cocx from "../image/cocx.png"
import date from "../image/date.png"
import tata from "../image/tata.png"
import resumeBuilder from "../image/resumeBuilder.png"

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Appa() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
    <div data-aos="fade-up"><h1>My Projects</h1></div>
    <div className={Styles.line}></div>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up" className={Styles.container}>
    <div>
      <img height="100%" width="100%" src={ai} />
    </div>
    <div>
      
      <div className={Styles.text}>
      <h2>EathAi</h2>
      <p>A Next.js project using Tailwind CSS and TypeScript, replicating a Figma design with smooth animations. Focused on responsive UI, React hooks, performance optimization, and clean, maintainable code.</p>
      <h3>Link is here:</h3>
      <a href="https://aman-bind-frontend-developer-3hp4.vercel.app/"> <button className={Styles.button}>Show</button></a>
     
      </div>
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up" className={Styles.container}>
    <div>
    <div className={Styles.text}>
      <h2>Resume Builder</h2>
      <p>This is a Resume Builder Website: Using React and Firebase. Here user can Build there resume for Applying any kind of job.</p>
      <h3>Link is here:</h3>
      <a href="https://thunderous-blini-f41e4c.netlify.app/"> <button className={Styles.button}>Show</button></a>
     
      </div>
    </div>
    <div>
    <img height="100%" width="100%" src={resumeBuilder} />
     
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up" className={Styles.container}>
    <div>
      <img height="100%" width="100%" src={myntra} />
    </div>
    <div>
      
      <div className={Styles.text}>
      <h2>Myntra</h2>
      <p>Clone of Myntra Website:Using HTML, CSS, JAVASCRIPT, DOM and Local Storage. This is an E-Commerce website where you can buy clothes.</p>
      <h3>Link is here:</h3>
      <a href="https://strong-baklava-c82690.netlify.app/"> <button className={Styles.button}>Show</button></a>
     
      </div>
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>

    <div data-aos="fade-up" className={Styles.container}>
    <div>
    <div className={Styles.text}>
      <h2>Boat</h2>
      <p>Clone of Boat Website:Using HTML, CSS, JAVASCRIPT, DOM and Local Storage. This is an E-Commerce website where you can buy Electronics product.</p>
      <h3>Link is here:</h3>
      <a href="https://celebrated-pothos-2bc810.netlify.app/"> <button className={Styles.button}>Show</button></a>
     
      </div>
    </div>
    <div>
    <img height="100%" width="100%" src={boat} />
     
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up" className={Styles.container}>
    <div>
      <img height="100%" width="100%" src={reverb} />
    </div>
    <div>
      
      <div className={Styles.text}>
      <h2>Reverb</h2>
      <p>Clone of Reverb Website:Using HTML, CSS and React. This is a Musical Instrument website</p>
      <h3>Link is here:</h3>
      <a href="https://gregarious-valkyrie-2afe8e.netlify.app/"> <button className={Styles.button}>Show</button></a>
     
      </div>
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up" className={Styles.container}>
    <div>
    <div className={Styles.text}>
      <h2>Tata-Cliq</h2>
      <p>Clone of Tata-Cliq Website:Using HTML, CSS, JAVASCRIPT, DOM and Local Storage. This is an E-Commerce website where you can buy clothes.</p>
      <h3>Link is here:</h3>
      <a href="https://leafy-centaur-d7010e.netlify.app/"> <button className={Styles.button}>Show</button></a>
     
      </div>
      </div>
    <div>
      
    
      <img height="100%" width="100%" src={tata} />
   
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up" className={Styles.container}>
    <div>
      <img height="100%" width="100%" src={date} />
    </div>
    <div>
      
      <div className={Styles.text}>
      <h2>Serious Dating</h2>
      <p>Clone of Dating Website:Using HTML, CSS, React and  . This is an Dating website where you can match your life partener.</p>
      <h3>Link is here:</h3>
      <a href="https://heroic-genie-d2db53.netlify.app/"> <button className={Styles.button}>Show</button></a>
     
      </div>
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up" className={Styles.container}>
    <div>
    <div className={Styles.text}>
      <h2>Flipkart</h2>
      <p>Clone of Flipkart Website:Using HTML, CSS, JAVASCRIPT, DOM and Local Storage. This is an E-Commerce website where you can buy Electronics device.</p>
      <h3>Link is here:</h3>
      <a href="https://jazzy-nasturtium-2db388.netlify.app/"> <button className={Styles.button}>Show</button></a>
     
      </div>
     
    </div>
    <div>
      
    <img height="100%" width="100%" src={flip} />
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div data-aos="fade-up" className={Styles.container}>
    <div>
      <img height="100%" width="100%" src={cocx} />
    </div>
    <div>
      
      <div className={Styles.text}>
      <h2>Cocxmining</h2>
      <p>Clone of Ultramining Website:Using HTML, CSS, React   . This is an Mining website where you can search about Mining</p>
      <h3>Link is here:</h3>
      <a href="tranquil-brioche-a33c6e.netlify.app"> <button className={Styles.button}>Show</button></a>
     
      </div>
     
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  
    
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={reverb} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={boat} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={myntra} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tata} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={flip} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={date} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cocx} />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
