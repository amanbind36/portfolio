import React from 'react'
import Styles from "./contact.module.css"
import { IoIosCall} from 'react-icons/io';
import { MdOutlineMailOutline} from 'react-icons/md';
import { BsGithub} from 'react-icons/bs';
import { BsLinkedin} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bbx8shk', 'template_tmplrgc', form.current, 'qSNAjwf_zKhWsYruu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (<>
    <div><h1>Contact Me</h1></div>
    <div className={Styles.line}></div>
    <div className={Styles.main}> 
      <div className={Styles.container}>
   <div className={Styles.left }>
      <div>
        <h1>Get in touch</h1>
        <h3>Let's talk about your Project</h3>
        <p>Thinking about a new Project, a problem to solve, or Just want to connect? Let;s doit!</p>
        <br/>
        <br/>
        <p>Use the form on this page or get in touch by other means</p>
        <br/>
        <br/>
        <h3>Contact Details</h3>
        <div className={Styles.icon}>
          <div className={Styles.icona}><IoIosCall/></div>
          <div>Phone: 7307752082</div>
        </div>
        <div className={Styles.icon}>
          <div className={Styles.icona}><MdOutlineMailOutline/></div>
          <div>Email: amanbind36@gmail.com</div>
        </div>
        <div className={Styles.icon}>
          <div className={Styles.icona}><BsGithub/></div>
          <div>Github: <a href="https://github.com/amanbind36">Aman_Bind_Github</a></div>
        </div>
        <div className={Styles.icon}>
          <div className={Styles.icona}><BsLinkedin/></div>
          <div>Linkdin: 
          <a href="linkedin.com/in/aman-bind-399325203/">Aman_Bind</a>
          </div>
        </div>
      </div>
   </div>
   <div className={Styles.right}>
    <div className={Styles.details}>
    <div className={Styles.border}>
      <div className={Styles.info}><h1>Your Contact Information</h1></div>
      <div className={Styles.input} >

        <div>
        <form ref={form} onSubmit={sendEmail}>
       <label>Name</label>
       <br/>
       <input type="text" name="name" />
       <br/>
       <label>Email</label>
       <br/>
       <input type="email" name="user_email" />
       <br/>
       <br/>
       <label>Message</label>
       <br/>
      <textarea name="message" />
      <br/>
      <input className={Styles.button} type="submit" value="Send" />
    </form>
        </div>
        </div>
      </div>

      
    </div>
   </div>
      </div>
    </div>
    </>
  )
}

export default Contact





//   const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_bbx8shk', 'template_tmplrgc', form.current, 'qSNAjwf_zKhWsYruu')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
// export default Contact