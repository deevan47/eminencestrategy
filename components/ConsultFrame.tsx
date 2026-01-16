
import React from 'react';

const ConsultFrame: React.FC = () => {
  return (
    <div className="h-full bg-white flex flex-col pt-24">
      <div className="bg-eminence-red w-full py-6 text-center">
        <h2 className="text-white text-2xl font-black tracking-[0.4em] uppercase">Consult With Us</h2>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-24 flex flex-col justify-center space-y-12 bg-eminence-red-light border-r border-zinc-100">
           <h3 className="text-5xl font-black tracking-tighter text-black leading-none">
             INITIATE <br/><span className="text-eminence-red">ENGAGEMENT</span>
           </h3>
           <p className="text-body-xl text-zinc-500 max-w-md">
             Our private advisory is currently accepting new mandates for the Q3/Q4 cycle. 
           </p>
           <div className="space-y-4">
             <div className="flex items-center gap-4 text-zinc-400">
               <div className="w-8 h-px bg-eminence-red"></div>
               <span className="text-[10px] font-mono tracking-widest uppercase">Response time: &lt; 24 Hours</span>
             </div>
           </div>
        </div>

        <div className="p-12 md:p-24 flex flex-col justify-center">
          <form className="space-y-10">
            {['Name', 'Company', 'Email ID', 'Phone Number'].map((label) => (
              <div key={label} className="group border-b border-zinc-200 pb-4 focus-within:border-eminence-red transition-all">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 group-focus-within:text-eminence-red transition-colors">{label}</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-none outline-none text-xl font-medium mt-2 placeholder:text-zinc-200"
                  placeholder={`ENTER ${label.toUpperCase()}`}
                />
              </div>
            ))}
            <button className="w-full py-8 bg-black text-white text-xs font-black tracking-[0.5em] uppercase hover:bg-eminence-red transition-all duration-500 transform hover:-translate-y-1 shadow-2xl">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultFrame;
