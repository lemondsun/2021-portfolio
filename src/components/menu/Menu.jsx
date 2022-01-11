import React from 'react';

import { useSelector } from 'react-redux';

import './menu.styles.scss';

export default function Menu() {
  const color = useSelector((state) => state.color.color);


  return (
    <div className='menu' >
      <a className='title' href='#hero-section'>
        <span className={`${color}`}>JM</span>
      </a>
    </div>
  );
};
