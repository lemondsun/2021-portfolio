import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setoffsetY } from './redux/screenSlice';

import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import IgPosts from './components/instagram-post/IgPosts';

import './App.styles.scss'

function App() {
  const dispatch = useDispatch()
  //this function will use the redux reducer to save the Y axis to redux
  const handleScroll = () => dispatch(setoffsetY(window.pageYOffset));
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  });
  return (
    <div className="App">
    
      <Menu />
      <Hero />
      <About />
      <Projects />
      {
        // <IgPosts />
      }
      <Footer />
      </div>
  
   
  );
};

export default App;
