import React from 'react'

import {Row, Col, Container } from 'react-bootstrap'

import './hero.styles.scss'

export default function Hero() {
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
      <Col className='content'>
        <h1 className='title'>Jason Mullings</h1>
        <h2 className='subtitle'>Full Stack Developer</h2>
      </Col>
      </Row>
    </Container>
  )
};
