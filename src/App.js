import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import HobbiesPage from './Hobbies.js';
import AboutPage from './About.js';
import CurrentWorkPage from './currentWork.js';
import Apple from './Projects/Apple.js';
import EngDes from './Projects/EngDes.js';
import PresWeather from './Projects/PresWeather.js';
import Kitchen from './Projects/Kitchen.js';
import Neutoy from './Projects/Neutoy.js';
import Jsviewhkl from './Projects/Jsviewhkl.js';

import {GoMarkGithub} from "react-icons/go";
import {MdEmail} from "react-icons/md";
import {AiFillInstagram} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <header>
        <Link to="/my-portfolio/" className="headLink" id="myLogo">
          <h1 style={{margin:0,fontWeight: "900"}}>
            <span id="logo_span">
              junho choi
            </span>
          </h1>
        </Link>
        <Link to="/my-portfolio/currentwork" className="headLink"><h1 style={{fontWeight: "200", fontSize:"20px"}}>ongoing work</h1></Link>
        <Link to="/my-portfolio/hobbies" className="headLink"><h1 style={{fontWeight: "200", fontSize:"20px"}}>hobbies</h1></Link>
        <Link to="/my-portfolio/about" className="headLink"><h1 style={{fontWeight: "200", fontSize:"20px"}}>about me</h1></Link>

      </header>
      <Routes>
        <Route exact path="/my-portfolio/" element={<HomePage/>} />
        <Route path="/my-portfolio/currentwork" element={<CurrentWorkPage/>} />
        <Route path="/my-portfolio/about" element={<AboutPage/>} />
        <Route path="/my-portfolio/appleintern" element={<Apple/>} />
        <Route path="/my-portfolio/engdes" element={<EngDes/>} />
        <Route path="/my-portfolio/presweather" element={<PresWeather/>} />
        <Route path="/my-portfolio/kitchen" element={<Kitchen/>} />
        <Route path="/my-portfolio/neutoy" element={<Neutoy/>} />
        <Route path="/my-portfolio/jsviewhkl" element={<Jsviewhkl/>} />
        <Route path="/my-portfolio/hobbies" element={<HobbiesPage/>} />
      </Routes>

      <footer>
      <p id="contactLabel">CONTACT ME</p>
        <a href='mailto:junho.choi.imp@gmail.com' className="footerIcons" target="_blank" rel="noopener noreferrer"><MdEmail style={{height:"30px", width:"30px"}}/></a>
        <a href='https://github.com/choiboy92' className="footerIcons" target="_blank" rel="noopener noreferrer"><GoMarkGithub style={{height:"30px", width:"30px"}}/></a>
        <a href='https://www.linkedin.com/in/junho-c-b2461bb2/' className="footerIcons" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{height:"30px", width:"30px"}}/></a>
        <a href='https://www.instagram.com/junho.what/' className="footerIcons" target="_blank" rel="noopener noreferrer"><AiFillInstagram style={{height:"30px", width:"30px"}}/></a>
      </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
