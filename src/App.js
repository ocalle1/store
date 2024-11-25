import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Home from './components/page-links/Home';
import About from './components/page-links/About';
import Body from './components/page-links/Body';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </>
  );
}

export default App;
