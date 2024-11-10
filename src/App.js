import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <Footer />

      </header>
    </div>
  );
}

export default App;
