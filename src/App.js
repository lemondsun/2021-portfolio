import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
