import { useEffect } from 'react';


import {useSelector, useDispatch } from 'react-redux';
import { setoffsetY } from './redux/screenSlice';

import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import ProjectCarousel from './components/projects/ProjectCarousel';
import Footer from './components/footer/Footer';

import './App.styles.scss'

function App() {
  const dispatch = useDispatch()
  const screenPlacement = useSelector((state)=>state)
  //this function will use the redux reducer to save the Y axis to redux
  const handleScroll = () => dispatch(setoffsetY(window.pageYOffset));
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(screenPlacement.offsetY.offsetY,'here')
    return () => window.removeEventListener('scroll', handleScroll);
    
  });
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About />
      <ProjectCarousel />
     {/*<Footer />*/}
    </div>
  );
}

export default App;
