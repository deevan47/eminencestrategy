
import React from 'react';

const EnablementFrame: React.FC = () => {
  const services = [
    "Content-Led Positioning", "IP-Led Campaigns", "Media Policy", "Brand Assets",
    "Media Training", "Design Capabilities", "Media Visibility", "Social Management"
  ];

  return (
    <div className="h-full flex flex-col bg-white pt-24 md:pt-36">
      <div className="py-12 px-12 border-b border-zinc-100 flex justify-between items-end bg-zinc-50">
        <h2 className="text-5xl md:text-7xl text-black opacity-5 font-black leading-none uppercase">Enable</h2>
        <h3 className="text-eminence-red text-2xl md:text-3xl font-black tracking-[0.3em] uppercase pb-2 border-b-4 border-eminence-red">Enablement Services</h3>
      </div>
      
      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-zinc-100 border-b border-zinc-100">
        {services.map((s, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center justify-center p-8 md:p-12 group hover:bg-eminence-red-light transition-all duration-500 cursor-pointer text-center reveal-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="text-xs md:text-sm font-black text-zinc-400 group-hover:text-eminence-red mb-4 transition-colors uppercase tracking-[0.3em]">MODULE_UNIT_0{i}</span>
            <div className="h-px w-12 bg-zinc-200 group-hover:w-full group-hover:bg-eminence-red transition-all duration-700 mb-6"></div>
            <span className="text-lg md:text-2xl font-black tracking-tight uppercase text-zinc-900 group-hover:text-eminence-red transition-colors leading-tight max-w-[240px]">
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnablementFrame;
