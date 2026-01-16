
import React from 'react';

const TestimonialFrame: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-white pt-24 md:pt-32 overflow-hidden border-b border-zinc-100">
      <div className="flex-none p-10 border-b border-zinc-100 bg-zinc-50">
        <h2 className="text-black text-xl font-bold tracking-[0.25em] uppercase">Clients Speak</h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 p-12 md:p-20 flex flex-col justify-center space-y-12">
          <p className="text-lg md:text-xl font-medium tracking-tight leading-relaxed text-black italic relative">
            <span className="absolute -top-8 -left-6 text-6xl text-zinc-100 font-serif select-none">“</span>
            I was looking to create a personality on the web that reflected my thinking, my ideology and create my voice to stand out amongst all the competition there! I had no clue on how would I go about meeting this goal digitally. I was requested by a friend to meet Mitu of Eminence. They interviewed me just as I interviewed them, and they put together a plan that not only convinced me but delivered thousands of followers.
          </p>

          <div className="space-y-1 border-l-4 border-eminence-red pl-6">
            <h4 className="text-lg font-black uppercase text-black">Sanjaya Mariwala</h4>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
              Executive Chairman, OmniActive Health Technologies
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-zinc-50 border-l border-zinc-100 flex items-center justify-center p-12">
          <div className="w-full aspect-[4/5] bg-white border border-zinc-200 flex flex-col items-center justify-center relative shadow-sm overflow-hidden group">
            <div className="absolute top-4 right-4 z-10 text-[9px] font-black text-white bg-eminence-red px-3 py-1 uppercase tracking-widest">VERIFIED_FEEDBACK</div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2000&auto=format&fit=crop"
              className="w-full h-full object-cover transition-all duration-1000"
              alt="Client Feedback"
            />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFrame;
