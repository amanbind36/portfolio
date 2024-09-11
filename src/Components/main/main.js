import React from 'react'
import Styles from "./main.module.css"
import Banner from '../autoSlider/Multi';

const Main = () => {
  return (
    <>
      <div className={Styles.ban}>
        <div className={Styles.square1}>
          <div className={Styles.circleContainer}>
            <div className={Styles.circle}></div>
            <div className={Styles.circle2}></div>
          </div>
        </div>
        <div className={Styles.banner}><Banner /></div>
        <div className={Styles.square}>
          <div className={Styles.circleContainer}>
            <div className={Styles.circle}></div>
            <div className={Styles.circle2}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;
