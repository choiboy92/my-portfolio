import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import AboutPage from './About.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <header><Link to="/"><h1 id="title">Junho Choi</h1></Link>
        
      </header>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
