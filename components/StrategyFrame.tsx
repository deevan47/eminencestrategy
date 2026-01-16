import React from 'react';

const StrategyFrame: React.FC = () => {
  const strategies = [
    { 
      title: "Virtual Marcomms", 
      desc: "Outsourced team creating strategies that reflect your unique identity.", 
      cta: "Explore",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    { 
      title: "Executive Influence", 
      desc: "Strengthen leadership reputation through nuanced moments.", 
      cta: "Elevate",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
    },
    { 
      title: "Research Insights", 
      desc: "Micro-patterns and quiet indicators uncovering deeper truths.", 
      cta: "Activate",
      img: "https://images.unsplash.com/photo-1454165833767-027eeea15c3e?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "Discovery Analysis", 
      desc: "Mapping sentiment to identify hidden friction points.", 
      cta: "Discover",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="h-full bg-white flex flex-col pt-24 md:pt-32">
      <div className="px-12 pb-8 border-b border-zinc-100 bg-eminence-red-light">
        <h2 className="text-eminence-red text-xl md:text-2xl font-black tracking-[0.3em] uppercase text-center">Reputation Shaped by Strategy</h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 divide-x divide-zinc-100 overflow-hidden">
        {strategies.map((s, i) => (
          <div key={i} className="group relative flex flex-col justify-between overflow-hidden">
             <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-1000">
               <img src={s.img} className="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-10 transition-opacity duration-700" alt="" />
             </div>

             <div className="p-8 md:p-12 space-y-6 relative z-10 bg-white group-hover:bg-white/90 transition-colors h-full">
               <span className="text-[6rem] font-black text-zinc-100/50 absolute top-2 right-2 leading-none group-hover:text-eminence-red/10 transition-colors select-none pointer-events-none">0{i+1}</span>
               
               <h3 className="text-xl md:text-2xl font-black leading-tight uppercase relative z-10 text-balance group-hover:text-eminence-red transition-colors">{s.title}</h3>
               <div className="w-8 h-0.5 bg-eminence-red opacity-20 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></div>
               <p className="text-sm font-bold leading-relaxed text-zinc-400 uppercase tracking-widest relative z-10 max-w-[90%]">
                 {s.desc}
               </p>
             </div>
             <button className="w-full py-6 bg-zinc-900 text-white text-[9px] font-black tracking-[0.5em] uppercase hover:bg-eminence-red transition-colors relative z-20">
               {s.cta}
             </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyFrame;