import { useState,useEffect } from 'react';

import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import ProjectCarousel from './components/projects/ProjectCarousel';
import Footer from './components/footer/Footer';

import './App.styles.scss'

function App() {
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => setoffsetY(window.pageYOffset);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About parallax={offsetY }/>
      <ProjectCarousel parallax={offsetY }/>
     {/*<Footer />*/}
    </div>
  );
}

export default App;
