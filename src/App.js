import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Service from "./Components/Service/Service";
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Home/>
        <About/>
        <Service/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
