import ImageSlider, { Slide } from "react-auto-image-slider";
import amn from "../image/am1.png"
import amanresume from "../image/amanresume.jpg"
import "./auto.css"
function Auto() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
   
    <Slide>
    <div className="image">
        <img alt="img2" src={amn}/>
        </div>
      </Slide>
      <Slide>
      <div className="image">
        <img alt="img2" src={amanresume} />
        </div>
      </Slide>
  
     
     
    </ImageSlider>
  );
}

export default Auto;