import React, { useEffect, useState } from 'react';
import FrequencyFrame from './components/FrequencyFrame';
import TrustFrame from './components/TrustFrame';
import StrategyFrame from './components/StrategyFrame';
import EnablementFrame from './components/EnablementFrame';
import NarrativeFrame from './components/NarrativeFrame';
import SuccessFrame from './components/SuccessFrame';
import TestimonialFrame from './components/TestimonialFrame';
import PartnersFrame from './components/PartnersFrame'; 
import ConsultFrame from './components/ConsultFrame';   
import CareerFrame from './components/CareerFrame';     
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    const handleScroll = () => {
      if (container) {
        const scrollY = container.scrollTop;
        const vh = window.innerHeight;
        const current = Math.round(scrollY / vh);
        setActiveFrame(current);
      }
    };

    container?.addEventListener('scroll', handleScroll, { passive: true });
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const frames = [
    { id: 'frequency', component: <FrequencyFrame /> },  
    { id: 'trust', component: <TrustFrame /> },          
    { id: 'strategy', component: <StrategyFrame /> },    
    { id: 'enablement', component: <EnablementFrame /> },
    { id: 'narrative', component: <NarrativeFrame /> },  
    { id: 'success', component: <SuccessFrame /> },      
    { id: 'testimonial', component: <TestimonialFrame /> },
    { id: 'partners', component: <PartnersFrame /> },    
    { id: 'consult', component: <ConsultFrame /> },      
    { id: 'career', component: <CareerFrame /> },        
  ];

  return (
    <main className="relative selection:bg-red-100 selection:text-eminence-red overflow-hidden h-screen w-screen bg-white">
      <Navigation activeFrame={activeFrame} totalFrames={frames.length} />
      
      <div className="snap-container h-full w-full">
        {frames.map((frame, idx) => (
          <section 
            key={frame.id}
            id={`frame-${idx}`} 
            className="snap-fold"
          >
            {frame.component}
          </section>
        ))}
      </div>
    </main>
  );
};

export default App;