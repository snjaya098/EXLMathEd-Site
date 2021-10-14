import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Team from '../components/Team';
import Price from '../components/Price';
import Courses from '../components/Courses';
import Contact from '../components/Contact';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Navbar toggle={toggle} />
      <HeroSection />
      <About/>
      <Team />
      <Courses />
      <Price />
      <Contact/>
      <Footer />
    </>
  );
}

export default Home;
