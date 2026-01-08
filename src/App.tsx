import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Footer/>
    </div>
);
}
export default App
