import React from 'react';
import Carousel from '../HeadAndCarousel/Carousel';
import Posts from '../post/Posts';
import ContactMe from './ContactMe';
import WritePost from './WritePost';

export default function Home() {
  
  return <>
 
  <Carousel />
  <WritePost />
  <Posts />
  <ContactMe />
 
  </>;
}
