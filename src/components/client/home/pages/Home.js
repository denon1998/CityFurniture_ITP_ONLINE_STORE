import React from 'react';
import '../../../../App.css';
import Categories from '../Categories';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <div>
    <div>
      <HeroSection />
      <Categories />
    </div>
    <Footer />
    </div>
  );
}

export default Home;