import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setoffsetY } from './redux/screenSlice';
import { useSelector } from 'react-redux';

import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import QuestionBox from './components/question-square/QuestionBox';
import TriviaSwitch from './components/trivia-switch/TriviaSwitch';

import './App.styles.scss';

let triviaKeys = ['first', 'second'];
let tiviaSelect = triviaKeys[Math.floor(Math.random() * triviaKeys.length)];

function App() {
  const dispatch = useDispatch();
  //this function will use the redux reducer to save the Y axis to redux
  const handleScroll = () => dispatch(setoffsetY(window.pageYOffset));
  const screenPlacement = useSelector((state) => state.offsetY.offsetY);
  const triviaQuestion = useSelector(
    (state) => state.triviaQuestions[tiviaSelect]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className="App">
      <Menu />
      <Hero triviaQuestion={triviaQuestion} />
      <About />
      <QuestionBox
        firstQuestion
        style={{
          transform: `translateY(-${screenPlacement * 1}px)`
        }}
      >
        {triviaQuestion[0]}
      </QuestionBox>
      <Projects />
      <QuestionBox
        secondQuestion
        style={{
          transform: `translateY(-${screenPlacement * 0.8}px)`
        }}
      >
        {triviaQuestion[1]}
      </QuestionBox>

      <QuestionBox
        thirdQuestion
        style={{
          transform: `translateY(-${screenPlacement * 0.6}px)`
        }}
      >
        {triviaQuestion[2]}
      </QuestionBox>
      <TriviaSwitch />
      <Footer />
    </div>
  );
}

export default App;
