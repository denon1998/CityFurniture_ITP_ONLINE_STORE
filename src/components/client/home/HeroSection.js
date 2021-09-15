import React from 'react';
import '../../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' style={{backdropFilter:'blur(10px )'}}>
      <video src={ ('https://docs.google.com/uc?export=download&id=16P0ip6-lPi_7p9fAVAH1XGm2aZIsddER')}   autoPlay loop muted />
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