import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import RouterForPage from './components/Router_pages/RouterForPage';
// import About from './components/About';
// import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <RouterForPage />
        {/* <Body /> */}
        {/* <About /> */}


        {/* Route has to be in its own FILE so that Header and Body doesnt show up on the About file */}
        {/* <Route path='/' element={<Body />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* FOOTER route is not needed */}
        {/* <Footer /> */}

      </header>
    </div>
  );
}

export default App;
