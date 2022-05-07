import React, { useState } from 'react';
import ProjectModal from '../../modal/ProjectModal';

import './projectItem.styles.scss'

export default function ProjectItem(props) {  
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };
  return (
    <div
    key={`${props.project.id}`}
    className='project'
    >
    <img
    className='project-image' src={`${props.project.image}`}
    alt="Project slide"
      />
      <div
      onClick={handleShow }
      className='modal-button'
      >
        <h3 className='modal-button-headline'>
          {`${props.project.name}`}
        </h3>
        <p className='project-link'>
              click here for info
          </p>
      </div>
      {
        <ProjectModal
        show={show}
        onHide={() => handleClose()}
        projectkey={props.project.id}
        />
      }
      
    </div>
  )
}
