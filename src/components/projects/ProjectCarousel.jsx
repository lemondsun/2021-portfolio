import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import ProjectModal from '../modal/ProjectModal';

import { useSelector, useDispatch } from 'react-redux';
import { updateColor } from '../../redux/colorSlice';

import './projects.styles.scss';

export default function ProjectCarousel() {
  const [modalShow, setModalShow] = useState(false);
  const [index, setIndex] = useState(0);
  const projects = useSelector((state) => state.project.projects);
  const dispatch = useDispatch();

  const colorTable = {
    0: 'black',
    1: 'blue',
    2: 'red'
  };
  
  const handelSelect = (selectedIndex,e) => {
    setIndex(selectedIndex);
    dispatch(updateColor(colorTable[index]));
  };

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
          onClick={() => setModalShow(true)}
        >click here for more information
        
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  )
  );

  return (
    <div className='project-section'>
    <h1 className='header'>MY PROJECTS</h1>
      <Carousel
      interval={null}
        activeIndex={index}
        onSelect={handelSelect}
      >
        {projectSection}
      </Carousel>
      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        projectId={index}
      />
    </div>
  
  )
};
