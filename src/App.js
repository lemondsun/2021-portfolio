import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import ProjectCarousel from './components/projects/ProjectCarousel';
import Footer from './components/footer/Footer';

import './App.styles.scss'

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About />
      <ProjectCarousel/>
     { /*<Footer />*/}
    </div>
  );
}

export default App;
