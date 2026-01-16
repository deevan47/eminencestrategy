import React from 'react';

const FrequencyFrame: React.FC = () => {
  return (
    <div className="h-full w-full bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale"
          alt="Architecture"
        />
      </div>
      
      <div className="h-full w-full bg-eminence-red-light/80 grid-blueprint flex flex-col justify-center items-center px-12 md:px-24 relative z-10 overflow-hidden">
        <div className="max-w-screen-2xl w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 flex flex-col pt-20">
            <h1 className="text-huge text-black tracking-tighter uppercase font-black">
              Build<br/>
              Establish<br/>
              <span className="text-eminence-red">Protect</span>
            </h1>
          </div>
          
          <div className="lg:col-span-2 space-y-6 md:space-y-10 pt-20">
            <div className="h-px w-full bg-zinc-300 relative">
              <div className="absolute top-0 left-0 h-1 w-24 bg-eminence-red"></div>
            </div>
            <h2 className="text-header text-black font-black leading-none text-balance">
              Your Brand's<br/>
              <span className="text-zinc-500">Reputation</span>
            </h2>
            <p className="text-body-xl text-zinc-700 max-w-lg font-medium leading-relaxed">
              Strategic Consultancy through world-class Stakeholder Engagement. 
              Execution-led advisory for the elite global tier.
            </p>
            <button className="group relative overflow-hidden bg-eminence-red px-10 py-5 text-white font-black tracking-[0.3em] uppercase text-xs transition-all hover:px-14 active:scale-95 shadow-xl">
              <span className="relative z-10">Consult with Us</span>
              <div className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-12 flex items-center gap-4">
          <div className="w-12 h-[2px] bg-eminence-red"></div>
          <span className="text-[11px] font-black text-zinc-600 uppercase tracking-widest">SYSTEM_READY</span>
        </div>
      </div>
    </div>
  );
};

export default FrequencyFrame;