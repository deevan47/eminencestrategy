
import React from 'react';

const NarrativeFrame: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-white border-b border-zinc-100">
      <div className="p-20 flex-1 flex flex-col justify-center max-w-screen-2xl mx-auto space-y-20">
        <div className="space-y-6">
          <h2 className="text-eminence-red text-5xl font-black tracking-tighter uppercase">The Eminence Difference</h2>
          <div className="w-48 h-2 bg-eminence-red"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <p className="text-header text-black font-medium leading-[1.1]">
            We go beyond loud-decibel campaigns. We understand the <span className="text-eminence-red">finer nuances</span> of your brand identity.
          </p>
          <div className="flex flex-col justify-center space-y-8">
            <p className="text-body-large text-zinc-500 uppercase font-mono tracking-tight leading-relaxed">
              Over the last decade, we have developed a surgical approach to reputation—research-backed and messaging-led.
            </p>
            <p className="text-body-large text-zinc-900 font-bold uppercase tracking-tight">
              100% Referral-based growth. Exponential success metrics.
            </p>
          </div>
        </div>
      </div>

      <button className="w-1/3 py-10 bg-eminence-red text-white text-sm font-black tracking-[0.8em] uppercase hover:bg-black transition-all">
        Learn More
      </button>
    </div>
  );
};

export default NarrativeFrame;
