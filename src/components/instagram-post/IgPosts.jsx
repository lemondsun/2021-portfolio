import React, { useState, useEffect } from 'react';

import getInstagramData from '../../api-helper/api-caller';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import '../instagram-post/ig-post.styles.scss';

import { useSelector } from 'react-redux';


export default function IgPosts() {
  const [igData, setIgData] = useState(null)

  const screenPlacement = useSelector((state) => state.offsetY.offsetY)

  
  useEffect(() => {
    let dataCollection = async() => {
      let res = await getInstagramData();
      setIgData(res)
    } 
    dataCollection();
  }, []);

  const IgPosts = () => {
  return (  igData.map((x) => (
    <a target="_blank" rel="noopener noreferrer" href={
      `${x.permalink}`
    }>
    <ImageListItem key={x.media_url}>
        <img className='instagram-image' src={`${x.media_url}`} alt='instagram post' loading="lazy" />
    </ImageListItem>
    </a>
  )
  ))
  }
  return (
    <div className='instagram-section'
    style={
      {
        transform: `translateY(-${screenPlacement * 0.2}px)`
      }
    }
    >
      <h1 className='header'>MY INSTAGRAM</h1>
    < ImageList cols={3} rowHeight={164} >
    {igData !== null && IgPosts()}
    </ImageList >
    </div>
  )
}
