import React, { useState } from 'react';
import projectData from './projects-data';

import './projects.styles.scss'

export default function Projects() {
  const [project, setProject] = useState(1);

  const projectSection = projectData.map((project) => (
    <section className='project-container' key={`${project.id}`}>
      <p className='project-name'>{`${project.name}`}</p>
      <p className='project-link'>Visit website</p>
      <p className='github-link'>Visit github </p>
      <div className='project-info-container'>
        <p>A simple portfolio website and a separate admin web application to allow the photographer the freedom to edit and adjust the site as she sees fit.</p>
        <img className='project-image' src={`${project.image}`} />
      </div>
    </section>
  ));
  
  return (
    <div className='projects-section' >
      <h1 className='projects-header' >My Projects</h1>
      {
        projectSection
}      
    </div>
  )
}
