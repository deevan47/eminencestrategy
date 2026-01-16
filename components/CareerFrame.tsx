import React from 'react';

const CareerFrame: React.FC = () => {
  return (
    <div className="h-full bg-[#262626] flex flex-col pt-24">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="p-12 md:p-20 flex flex-col justify-center space-y-8 border-b lg:border-b-0 lg:border-r border-white/5">
           <h2 className="text-eminence-red text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
             Fuel Your<br/>Future
           </h2>
           <p className="text-zinc-400 text-sm md:text-base font-medium max-w-sm uppercase tracking-widest leading-relaxed">
             We are looking for the next generation of narrative architects. 
           </p>
           <button className="w-fit px-12 py-5 border-2 border-eminence-red text-white text-[11px] font-black tracking-[0.4em] uppercase hover:bg-eminence-red transition-all">
             Explore Careers
           </button>
        </div>
        
        <div className="p-12 md:p-20 flex flex-col justify-center items-center bg-white/5 grayscale">
           <div className="w-full h-full bg-cover bg-center rounded-sm opacity-60" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop")'}}></div>
        </div>
      </div>

      <footer className="bg-[#262626] text-white py-16 px-6 md:px-24">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 border-b border-white/5 pb-16">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="text-5xl logo-font text-eminence-red">eminence</span>
            <span className="text-[12px] font-bold text-zinc-400 tracking-widest uppercase">Your reputation partner</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button className="text-eminence-red text-xs font-bold uppercase tracking-widest">Home</button>
            <button className="text-white text-xs font-bold uppercase tracking-widest hover:text-eminence-red transition-colors">Blogs</button>
            <button className="text-white text-xs font-bold uppercase tracking-widest hover:text-eminence-red transition-colors">Eminence Study</button>
            <button className="text-white text-xs font-bold uppercase tracking-widest hover:text-eminence-red transition-colors">Portfolio</button>
            <button className="text-white text-xs font-bold uppercase tracking-widest hover:text-eminence-red transition-colors">Profile</button>
            <button className="text-white text-xs font-bold uppercase tracking-widest hover:text-eminence-red transition-colors">Privacy Policy</button>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex gap-6">
               <span className="text-white hover:text-eminence-red cursor-pointer transition-colors text-xl">𝕏</span>
               <span className="text-white hover:text-eminence-red cursor-pointer transition-colors text-xl">ƒ</span>
               <span className="text-white hover:text-eminence-red cursor-pointer transition-colors text-xl">in</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-eminence-red text-lg">📞</span>
              <span className="text-sm font-bold tracking-widest">+91 98339 81100</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-eminence-red text-lg">✉</span>
              <span className="text-sm font-bold tracking-widest">info@eminencestrategy.com</span>
            </div>
          </div>
        </div>
        <div className="text-center pt-8">
           <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Copyright © 2026 Eminence</p>
        </div>
      </footer>
    </div>
  );
};

export default CareerFrame;