import React from 'react';
import Button from '../button/Button';

import Modal from 'react-bootstrap/Modal';

import { useSelector } from 'react-redux';

import '../../components/modal/ProjectModal.styles.scss'

export default function ProjectModal(props) {

  const projects = useSelector((state) => state.project.projects);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {projects[props.projectId].name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {projects[props.projectId].discription}
        </p>
      </Modal.Body>
      <Modal.Footer>
      <a target="_blank" rel="noopener noreferrer" href={projects[props.projectId].github}>
          <Button
          className='info-button'
          >
Visit GitHub
        </Button>
        </a>
        <a  target="_blank" rel="noopener noreferrer" href={projects[props.projectId].website}>
          <Button
          className='info-button'
          >

          Visit site
         
        </Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
};
