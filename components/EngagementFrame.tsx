
import React from 'react';

const EngagementFrame: React.FC = () => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 divide-x divide-zinc-900 bg-black text-white">
      <div className="p-24 flex flex-col justify-center space-y-16">
        <h2 className="text-huge text-eminence-red">CONNECT</h2>
        <form className="space-y-8 max-w-xl">
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Verification Name</label>
            <input type="text" placeholder="IDENTITY" className="w-full bg-transparent border-b-2 border-zinc-800 py-6 text-2xl font-black focus:border-eminence-red outline-none uppercase transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Secured Email</label>
            <input type="email" placeholder="ENCRYPTED_ADR" className="w-full bg-transparent border-b-2 border-zinc-800 py-6 text-2xl font-black focus:border-eminence-red outline-none uppercase transition-colors" />
          </div>
          <button className="w-full py-8 bg-eminence-red text-white text-xs font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">Initiate Engagement</button>
        </form>
      </div>
      
      <div className="p-24 flex flex-col justify-between bg-zinc-950 relative overflow-hidden group">
        <div className="relative z-10 space-y-12">
          <h3 className="text-6xl font-black uppercase tracking-tighter text-white">Fuel Your Future</h3>
          <p className="text-body-large font-mono text-zinc-400 uppercase leading-relaxed max-w-md">
            We are seeking the top 1%. Join the most elite strategic collective in the digital frontier.
          </p>
          <button className="px-20 py-8 border-4 border-eminence-red text-white text-xs font-black uppercase tracking-[0.5em] hover:bg-eminence-red transition-all inline-block">
            Explore Careers
          </button>
        </div>
        <div className="text-[25vw] font-black text-zinc-900 leading-none select-none pointer-events-none absolute -bottom-16 -right-16 group-hover:text-eminence-red/5 transition-colors duration-1000">
          JOIN
        </div>
      </div>
    </div>
  );
};

export default EngagementFrame;
