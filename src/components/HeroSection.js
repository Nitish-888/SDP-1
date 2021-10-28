import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-5.mp4' autoPlay loop muted />
      <h1>Travel</h1>
      <p>Take Memories. Leave Footsteps! </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          classname='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.youtube.com/watch?v=3SsK-cxlj_w';
          }}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;