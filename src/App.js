import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Home from './components/page-links/Home';
import About from './components/page-links/About';
import Body from './components/page-links/Body';
// import Home from './components/Home';
import StoreItems from './components/body_store_items/StoreItems';
import Gold from './components/body_store_items/Gold';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/body" element={<Body />} />
        <Route path="/storeItems" element={<StoreItems />} />
        <Route path="/storeItems" element={<StoreItems />} />
        <Route path="/gold" element={<Gold />} />
        {/* <Route path="/storeItems" element={<StoreItems />} /> */}
        {/* <Route path="/storeItems" element={<StoreItems />} /> */}
        {/* <Route path="/storeItems" element={<StoreItems />} /> */}
      </Routes>
    </>
  );
}

export default App;
