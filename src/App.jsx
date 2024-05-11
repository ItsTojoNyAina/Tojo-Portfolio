import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Techno from './components/Techno';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import ScrollToTop from "react-scroll-to-top";
import Preload from './components/Preload';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); 
    };

    simulateLoading();
  }, []); 

  return (
    loading ? (
      <Preload />
    ) : (
      <div className='overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900'> 
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className='container mx-auto px-8'>     
          <Navbar />
          <Hero />
          <About />
          <Techno />
          <Experience />
          <Project />
          <Contact />
          <footer className='my-20 text-center text-A.5xl'>© Copyright RAKOTOARIMANANA Tojo Ny Aina 2024
          </footer>
        </div>
        <ScrollToTop  smooth style={{borderRadius:'50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} />
      </div>
    )
  );
}

export default App;
