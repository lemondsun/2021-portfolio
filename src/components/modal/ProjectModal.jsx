import React from 'react';
import Button from '../button/Button';

import Modal from 'react-bootstrap/Modal';

import { useSelector } from 'react-redux';


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
        <Button>
          <a target="_blank" rel="noopener noreferrer" href={projects[props.projectId].github}>Visit GitHub
          </a>
        </Button>
        <Button>
          <a target="_blank" rel="noopener noreferrer" href={projects[props.projectId].website}>
          Visit site
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
