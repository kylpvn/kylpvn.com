import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { MusicProjects } from "./components"; // 
import AtomLoader from '../src/AtomLoader'; // Make sure this path is correct

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an initial loading time
    setTimeout(() => {
      setIsLoading(false); // Hide loader after 2 seconds
    }, 4000);
  }, []);

  if (isLoading) {
    return <AtomLoader />;
  }

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <About />

        <Experience />

        <Tech />

        <Works />

        <MusicProjects />

       

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
