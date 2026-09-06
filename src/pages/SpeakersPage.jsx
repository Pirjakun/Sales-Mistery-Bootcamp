import React, { useState } from 'react';
import { 
  Users, 
  Quote, 
  Play, 
  X, 
  Briefcase 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SpeakersPage = () => {
  const { speakers } = useApp();
  const [activeVideoSpeaker, setActiveVideoSpeaker] = useState(null);

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl animate-in fade-in duration-300">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <span className="eyebrow-label text-amber-400/90 block">MASTER COACHES</span>
          <h1 className="text-2xl font-normal font-serif-luxury text-zinc-100 leading-tight">
            Keynote <span className="italic gold-gradient-text">Speakers</span>
          </h1>
        </div>
        <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <Users className="w-5 h-5" />
        </div>
      </div>

      {/* Speaker Cards List */}
      <div className="space-y-5">
        {speakers.map((spk) => (
          <div 
            key={spk.id}
            className="rounded-3xl werkudara-card p-5 space-y-4 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <img 
                src={spk.photo} 
                alt={spk.name} 
                className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-500/30 shrink-0 shadow-lg" 
              />
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-lg font-bold font-serif-luxury text-zinc-100 leading-snug">{spk.name}</h3>
                <p className="text-xs font-semibold text-amber-300">{spk.role}</p>
                <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-mono">
                  <Briefcase className="w-3 h-3 text-amber-400/80" />
                  <span>{spk.company}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans">{spk.bio}</p>

            {/* Expertise Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {spk.expertise.map((exp, idx) => (
                <span 
                  key={idx}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#0b0e11] text-amber-300 border border-amber-500/20"
                >
                  {exp}
                </span>
              ))}
            </div>

            {/* Speaker Quote */}
            <div className="p-3.5 rounded-2xl bg-[#0b0e11] border border-amber-500/20 flex items-start gap-2.5">
              <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs italic font-serif-luxury text-zinc-200 leading-relaxed">"{spk.quote}"</p>
            </div>

            {/* Session title & Bumper Video CTA */}
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-400 truncate pr-2">
                {spk.sessionTitle}
              </span>
              <button
                onClick={() => setActiveVideoSpeaker(spk)}
                className="px-3 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 font-bold text-xs flex items-center gap-1.5 border border-amber-500/30 shrink-0 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-amber-300" />
                <span>BUMPER</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BUMPER VIDEO MODAL */}
      {activeVideoSpeaker && (
        <div className="fixed inset-0 z-50 bg-[#0b0e11]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#111518] border border-amber-500/30 rounded-3xl p-4 max-w-md w-full shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <div>
                <span className="eyebrow-label text-amber-400 block">SPEAKER BUMPER VIDEO</span>
                <h4 className="text-base font-bold font-serif-luxury text-zinc-100">{activeVideoSpeaker.name}</h4>
              </div>
              <button onClick={() => setActiveVideoSpeaker(null)} className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-zinc-950">
              <video 
                src={activeVideoSpeaker.videoUrl}
                controls
                autoPlay
                className="w-full h-56 object-cover"
              />
            </div>

            <p className="text-xs font-serif-luxury italic text-amber-200 text-center">
              "{activeVideoSpeaker.quote}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
