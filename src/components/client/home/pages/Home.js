import React from 'react';
import '../../../../App.css';
import Categories from '../Categories';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <div>
    <div>
      <HeroSection />
      <Categories />
    </div>
    </div>
  );
}

export default Home;