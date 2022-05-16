import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import { Row, Col, Container } from 'react-bootstrap';

import './hero.styles.scss';

export default function Hero(props) {
  const appSwitch = useSelector((state) => state.value.appSwitch);

  const [userAnswer, setUserAnswer] = useState('');
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
     setAnswerSubmitted(!answerSubmitted)
  }

  const heroBox = () => {
    if (answerSubmitted === true) {
      return (
        userAnswer.toLowerCase() === props.triviaQuestion[3].toLowerCase() ? 
        <Col className='content'>
        <h1 className='title'>Jason Mullings</h1>
          <h2 className='subtitle' >You're correct, thanks for playing.</h2>
          </Col>
        :
        <Col className='content'>
        <h1 className='title'>Jason Mullings</h1>
            <h2 className='subtitle' >{`Your incorrect, the answer is "${props.triviaQuestion[3]}".`}</h2>
          </Col>
  )
    } else {
      return (
        appSwitch === true ? 

        <Col className='content'>
        <h1 className='title'>Jason Mullings</h1>
          <h2 className='subtitle'>{props.triviaQuestion[4]}</h2>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
          <input className='answer-bar' type='text' placeholder='enter your guess here' onChange={event => { setUserAnswer(event.target.value) }} />
          <button type="submit" >
            SUBMIT
          </button>
            </form>
          </Col>
        :
        <Col className='content'>
      <h1 className='title'>Jason Mullings</h1>
      <h2 className='subtitle'>Full Stack Developer</h2>
        </Col>
      )
}
  }

  return (
    <Container
      fluid
      className='hero-section'
    >
      <Row>
        <Col>
          <img
            className='background-image' src='https://i.imgur.com/vndsQuF.jpg' alt='the programmer in profile'
          />
        </Col>
        {
heroBox()
        }
      
      </Row>
    </Container>
  )
};
