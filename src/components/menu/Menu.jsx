import React from 'react';

import { useSelector } from 'react-redux';

import {
  Navbar, Container,
  Nav
} from 'react-bootstrap';


import './menu.styles.scss';

export default function Menu() {
  const color = useSelector((state) => state.color.color);


  return (
    <div className='menu' >        
        <Navbar bg="light" expand={false}>
        <Container
          fluid
        >
        <span className={`${color} title`}>JM</span>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><a target="_blank" rel="noopener noreferrer" href = "mailto: wjasonmullings@gmail.com">Contact me</a></Nav.Link>
        <Nav.Link href="#link"><a target="_blank" rel="noopener noreferrer" href = "https://github.com/lemondsun">My GitHub</a></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     
    </div>
  );
};
