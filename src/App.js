import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Auto from './Components/autoSlider/Auto';
import Banner from "./Components/autoSlider/Multi"
import About from './Components/About/About';
import Education from './Components/education/Education';
import Skills from './Components/skill/Skills';
import Appa from './Components/project/Project';
import Freelance from './Components/Freelance/Freelance';
import Contact from './Components/contact/Contact';
import AllRoutes from './Components/AllRoutes/AllRoutes';


function App() {
  return (
    <div className="App">
 
      <Navbar/>
     <br/>
     <AllRoutes/>
   <About/>
     <br/>
     <br/>
     <br/>
     <Education/>
     <br/>
     <br/>
     <Skills/>
     <br/>
     <br/>
     <Freelance/>
     <br/>
     <br/>
     <Appa/>
     <br/>
     <br/>
     <Contact/> 
    </div>
   
  );
}

export default App;
