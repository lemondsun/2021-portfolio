import React from 'react';

import ProjectItem from './project-item/ProjectItem';

import { useSelector } from 'react-redux';

import './projects.styles.scss';

export default function Projects() {
  const projects = useSelector((state) => state.project.projects);
  const screenPlacement = useSelector((state) => state.offsetY.offsetY)

  const projectItems = projects.map((project) => (
    <ProjectItem project={project} key={project.id }/>
  ));

  return (
    <div className='project-section'
    style={
      {
        transform: `translateY(-${screenPlacement * 0.2}px)`
      }
    }>
      <h1 className='header'>MY PROJECTS</h1>
      <div className='project-list'>
      {projectItems}
      </div>
    </div>
  
  )
};
