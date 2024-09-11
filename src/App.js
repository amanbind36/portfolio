import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Main from './Components/main/main';

import About from './Components/About/About';
import Education from './Components/education/Education';
import Skills from './Components/skill/Skills';
import Appa from './Components/project/Project';
import Freelance from './Components/Freelance/Freelance';
import Contact from './Components/contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    <br/>
      <div id="about">
        <About />
      </div>
      <br/>
      <br/> <br/> <br/>
      <div id="education">
        <Education />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Appa />
      </div>

      <div id="freelance">
        <Freelance />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
