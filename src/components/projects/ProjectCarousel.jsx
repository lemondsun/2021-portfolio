import React, {useState} from 'react';
import projectData from './projects-data';
import Carousel from 'react-bootstrap/Carousel';

import { useSelector, useDispatch } from 'react-redux';
import { updateColor } from '../../redux/colorSlice';
import './projects.styles.scss';

export default function ProjectCarousel() {
  const [count, setCount] = useState(1);
  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  const colorTable = {
    1: 'black',
    2: 'blue',
    3: 'red'
  };
  
  const slideEvent = (count) => {
    const countCounter = (count) => {
      if (count === 3) setCount(1)
      if (count < 3) setCount(count += 1)
    };
    countCounter(count)
    dispatch(updateColor(colorTable[count]));

    console.log(count)
  };


  const projectSection = projectData.map((project) => (
    <Carousel.Item key={`${project.id}`}>
      <img
        className='project-image d-block w-100' src={`${project.image}`}
        alt="Project slide"
      />
      <Carousel.Caption>
        <h3>{`${project.name}`}</h3>
        <p className='project-link'>Visit website</p>
        <p className='github-link'>Visit github </p>
      </Carousel.Caption>
    </Carousel.Item>
  )
  );

  return (
    <Carousel
      onSlide={() => slideEvent(count) } >
{projectSection}
</Carousel>
  )
};
