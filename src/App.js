import './App.css';
import Navbar from './components/header/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1>Hello</h1>
      <h2>Cloning to laptop worked</h2>
    </>
  );
}

export default App;
