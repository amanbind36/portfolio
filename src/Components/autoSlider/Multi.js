import React,{useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import amn from "../image/amn.jpg"
import spic2 from "../image/am1.png"
import spic1 from "../About/pic/a2.png"
import amanresume from "../image/amanresume.jpg"
import Aman_Resume from "../Resume/Aman_Resume.pdf"
import { motion } from 'framer-motion';
import "./auto.css"



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
      },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
     }
  };

const Banner = () => {


  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['A Developer', 'A Creator', 'A Designer'];

  const handleTyping = () => {
    const current = loopNum % words.length;
    const fullText = words[current];

    setText(isDeleting ? fullText.slice(0, text.length - 1) : fullText.slice(0, text.length + 1));

    setTypingSpeed(isDeleting ? 220 : 100);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  });


  return (
    <>
    <Carousel
    responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
    >
       <div className='main'>
       <div className='text'>
       <h3 className='blue'>Hello</h3>
       <h1>I am <span className='blue' >Aman Bind</span></h1>
       <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    id="texts"
                  >
                    <span className='HomeTextAnime'>{text}</span>
                  </motion.h1>
       <span><h3>React-Frontend-Developer</h3></span>
       <button className="btn">   <a href={Aman_Resume} download="Aman_Resume.pdf"> Download Resume </a></button>
       </div>
      <div>
      <img  width={700} height={700}   className='image' src={spic2}/>
      </div>
       
      
       </div>
     
       <div>
       <div className='text'>
      
       <h3>a <span className='blue' >web <br/> designer</span> from India</h3>
       <button className="btn">Hire Me</button>
       </div>
       <div>
       <img width={700} height={700} src={spic1}/>
       </div>
  
       </div>
      

    </Carousel>
    </>
  )

}
export default Banner
