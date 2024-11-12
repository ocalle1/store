import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        {/* <About /> */}
        {/* Route has to be in its own FILE so that Header and Body doesnt show up on the About file */}
        <Routes>
          {/* <Route path='/' element={<Body />} /> */}
          <Route path="/about" element={<About />} />
          {/* FOOTER route is not needed */}
          <Route path="/footer" element={<Footer />} />
          {/* <Footer /> */}
        </Routes>

      </header>
    </div>
  );
}

export default App;
