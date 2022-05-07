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
    show={props.show}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
      centered
>
  <Modal.Header >
    <Modal.Title id="contained-modal-title-vcenter">
          {
            projects[props.projectkey].name
          }
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>
          {
          
            projects[props.projectkey].discription
          }
    </p>
  </Modal.Body>
  <Modal.Footer>
        <a target="_blank" rel="noopener noreferrer" href={
          projects[props.projectkey].github
        }>
      <Button
      className='info-button'
      >
      Visit GitHub
    </Button>
    </a>
        <a target="_blank" rel="noopener noreferrer" href={
            `${projects[props.projectkey].website}`
          }>
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
