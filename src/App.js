import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import AboutPage from './About.js';
import CurrentWorkPage from './currentWork.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <header>
        <Link to="/" className="title" id="myLogo"><h1>Junho Choi</h1></Link>
        <Link to="/currentwork" className="title"><h1 >Current work</h1></Link>
        <Link to="/about" className="title"><h1>About me</h1></Link>
      </header>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/currentwork" element={<CurrentWorkPage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
