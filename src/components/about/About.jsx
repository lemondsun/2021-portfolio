import React from 'react';

import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './about.styles.scss';


export default function About(props) {
  const screenPlacement = useSelector((state)=>state.offsetY.offsetY)
  return (
    <div
      className='about-section' style={
        {
          transform: `translateY(-${screenPlacement * 0.5}px)`
        }
      }>
      <Container className='bio' fluid>
      <p className='bio-header'>Bio</p>
        <p className='about-text'>
          I am an energetic software engineer with a passion for producing clean and readable code. As a graduate of General Assembly's Software Immersive program in 2019, I spend my time taking classes in programming and working on projects for myself and clients, expanding my knowledge and skills in the programming world.
        </p>
  </Container>
      <Container className='tech-stack'
        fluid>
        <p className='tech-stack-header'>Tech Stack</p>
        <div className='tech-section'>
        <Row>
          <Col className='about-text'>React JS</Col>
          <Col className='about-text' >React Native</Col>
          <Col className='about-text' >Javascript</Col>
        </Row>
        <Row>
        <Col className='about-text'>HTML & CSS</Col>
        <Col className='about-text' >SASS</Col>
        <Col className='about-text' >Node JS</Col>
        </Row>
        <Row>
        <Col className='about-text'>Ruby</Col>
        <Col className='about-text' >Ruby on Rails</Col>
        <Col className='about-text' >PostgreSQL</Col>
        </Row>
        <Row>
        <Col className='about-text'>Git</Col>
        <Col className='about-text' >API's</Col>
        <Col className='about-text' >Jest & Enzyme</Col>
        </Row>
        </div>
      </Container>
      </div>
  );
};
