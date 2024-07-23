import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 z-[-10] h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950" 
        style={{ 
          backgroundImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))' 
        }}>
      </div>    
      </div>        
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
      </div>
    </div>
  );
};

export default App;
