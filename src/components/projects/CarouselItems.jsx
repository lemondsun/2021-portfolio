import React from 'react'

import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';



export default function CarouselItems(props) {
  const projects = useSelector((state) => state.project.projects);

  const projectSection = projects.map((project) => (
    <Carousel.Item
      className='project-section'
      key={`${project.id}`}
    >
      <img
        className='project-image' src={`${project.image}`}
        alt="Project slide"
      />
      <Carousel.Caption>
        <h3>{`${project.name}`}</h3>
        <p className='project-link'
          variant="primary"
          onClick={() => props.setModalShow(true)}
        >click here for more information
        
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  )
  );
  return projectSection
}
