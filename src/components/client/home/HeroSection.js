import React from 'react';
import '../../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (  
        
    <div className='homeView' style={{backdropFilter:'blur(10px )'}}>
      <video src={ ('https://player.vimeo.com/external/476754529.sd.mp4?s=e565f0e0800ee33e7a1b0e7b62d4cd8dfdf548ce&profile_id=165&oauth2_token_id=57447761')}   autoPlay loop muted />
       <h1>CITY FURNITURE DESIGNS AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Welcome! <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;