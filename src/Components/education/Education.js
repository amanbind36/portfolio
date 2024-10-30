import React,{ useEffect }  from 'react'
import Styles from "./education.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
    <div data-aos="fade-up"><h1>Education Details</h1></div>
    <div className={Styles.lin}></div>
    <div className={Styles.container}>
    
   
   
   <div data-aos="fade-up" className={Styles.education}>
    <div className={Styles.skill}>
      <h1>Skill Education</h1>
      <div className={Styles.line}></div>
      <div className={Styles.educ}>
        <div>
          <h2>Shivila Technology</h2>
          <p>Internship (React-Frontend- Developer)</p>
        </div>
        <div>
          Feb 2023-Present
        </div>
      </div>
      <div className={Styles.educ}>
        <div>
          <h2>Masai School</h2>
          <p>React.js HTML, CSS and JAVASCRIPT (Frontend-Development )</p>
        </div>
        <div>
          June 2024- Augest 2024
        </div>
      </div>
      <div className={Styles.educ}>
        <div>
        <h2>Masai School</h2>
          <p>Python, SQL, MongoDB </p>
        </div>
        <div>
          Feb 2024-May 2024
        </div>
      </div>
    </div>
    <div className={Styles.edu}>
      <h1>Education</h1>
      <div className={Styles.line}></div>
      <div className={Styles.educ}>
        <div>
          <h2>MJP Rohilkhand University</h2>
          <p>B.tech (Electronics and Instrumentation)</p>
        </div>
        <div>
          2017-2021
        </div>
      </div>
      <div className={Styles.educ}>
        <div>
          <h2>M.L.Convent Inter College</h2>
          <p>Intermediate (Physics, Chemistry and Math )</p>
        </div>
        <div>
          2015-2016
        </div>
      </div>
      <div className={Styles.educ}>
        <div>
        <h2>M.L.Convent Inter College</h2>
          <p>High School (Physics, Chemistry and Math )</p>
        </div>
        <div>
          2014-2015
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Education