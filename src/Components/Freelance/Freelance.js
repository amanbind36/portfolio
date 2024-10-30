import React, { useEffect }  from 'react'
import AOS from 'aos';
import Styles from "./freelance.module.css"
import 'aos/dist/aos.css';

const Freelance = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
    <div  data-aos="fade-up" className={Styles.container}>
<div className={Styles.free}>
<div>
<h1>I'm <span>Available </span> For Freelanceing</h1>
</div>
<div>
<button className={Styles.button}>Hire me</button>
</div>
  
</div>
    </div>
    </>
  )
}

export default Freelance