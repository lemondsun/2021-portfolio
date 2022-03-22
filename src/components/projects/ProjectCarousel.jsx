import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import ProjectModal from '../modal/ProjectModal';

import { useSelector, useDispatch } from 'react-redux';
import { updateColor } from '../../redux/colorSlice';

import './projects.styles.scss';

export default function ProjectCarousel() {
  const [modalShow, setModalShow] = useState(false);
  const [index, setIndex] = useState(1);
  const projects = useSelector((state) => state.project.projects);
  const screenPlacement = useSelector((state)=>state.offsetY.offsetY)
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

  const projectItems = projects.map((project) => (
    <Carousel.Item
      className='project-item'
      key={`${project.id}`}
    >
      <img
        className='project-image' src={`${project.image}`}
        alt="Project slide"
      />
      <Carousel.Caption
      onClick={() => setModalShow(true)}
      className='modal-button'
      >
        <h3 className='modal-button-headline'>{`${project.name}`}</h3>
        <p className='project-link'>
            click here for info
        </p>
      
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <div className='project-section'
    style={
      {
        transform: `translateY(-${screenPlacement * .1}px)`
      }
    }>
    <h1 className='header'>MY PROJECTS</h1>
      <Carousel
      indicators={false}
      interval={null}
        activeIndex={index}
        onSelect={handelSelect}
      >
        {projectItems}
      </Carousel>
      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        projectId={index}
      />
    </div>
  
  )
};
