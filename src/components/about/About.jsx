import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.styles.scss';

export default function About() {
  return (
    <div className='about-section' >
      <p className='about-header'>About The Programmer</p>
      <p className='about-text'>I am an energetic software engineer with a passion for producing clean and readable code. As a graduate of General Assembly's Software Immersive program in 2019, I spend my time taking classes in programming and working on projects for myself and clients, expanding my knowledge and skills in the programming world. </p>
      <p className='about-header'>Tech Stack</p>
      <Container className='tech-stack' >
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
      </Container>
      
    </div>
  );
};
