import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
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
        <Link to="/" className="headLink" id="myLogo"><h1 style={{margin:0}}>Junho Choi</h1></Link>
        <Link to="/currentwork" className="headLink"><h1 style={{fontWeight: "300"}}>current work</h1></Link>
        <Link to="/about" className="headLink"><h1 style={{fontWeight: "300"}}>about me</h1></Link>
      </header>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/currentwork" element={<CurrentWorkPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/appleintern" element={<Apple/>} />
        <Route path="/engdes" element={<EngDes/>} />
        <Route path="/presweather" element={<PresWeather/>} />
        <Route path="/kitchen" element={<Kitchen/>} />
        <Route path="/neutoy" element={<Neutoy/>} />
        <Route path="/jsviewhkl" element={<Jsviewhkl/>} />

      </Routes>
      <footer>
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
