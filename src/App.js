import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';


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
