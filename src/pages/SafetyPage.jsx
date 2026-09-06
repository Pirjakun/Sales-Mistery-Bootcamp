import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SafetyPage = () => {
  const { currentParticipant, markSafetyWatched, eventInfo } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            SAFETY <span className="text-rose-400">INDUCTION</span>
          </h1>
          <p className="text-xs text-slate-400">Emergency Procedures & Kalyana Evacuation Guide</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
      </div>

      {/* Animated Video Player Container */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
        <video
          ref={videoRef}
          src="https://assets.mixkit.co/videos/preview/mixkit-fire-exit-sign-on-a-wall-42841-large.mp4"
          poster="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=800"
          className="w-full h-56 sm:h-64 object-cover"
          muted={isMuted}
          loop
          playsInline
        />

        {/* Video Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-between p-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500 text-white uppercase">
              SAFETY VIDEO
            </span>
            <button 
              onClick={toggleMute}
              className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-300 hover:text-white"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="p-3.5 rounded-2xl bg-amber-500 text-slate-950 font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-slate-950" />}
              <span className="text-xs">{isPlaying ? 'PAUSE' : 'PLAY SAFETY INDUCTION'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Completion Status Button */}
      <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-300">Induction Completion Status:</span>
          {currentParticipant?.safetyWatched ? (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-xl border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>COMPLETED</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded-xl border border-amber-500/30">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>PENDING</span>
            </span>
          )}
        </div>

        {!currentParticipant?.safetyWatched && (
          <button
            onClick={() => markSafetyWatched(currentParticipant.id)}
            className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>I'VE WATCHED THE SAFETY INDUCTION</span>
          </button>
        )}
      </div>

      {/* Key Safety Instructions */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <span>Emergency Procedures</span>
        </h3>

        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <h4 className="font-bold text-amber-300">1. Emergency Assembly Point</h4>
            <p className="text-slate-300 leading-relaxed">
              In case of evacuation alarm, proceed calmly to the main front parking courtyard near the resort entrance gate.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <h4 className="font-bold text-amber-300">2. Emergency Exits</h4>
            <p className="text-slate-300 leading-relaxed">
              Kalyana Hall features dual exit doors leading directly to the garden pathway. Follow illuminated green exit signs.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <h4 className="font-bold text-amber-300">3. First Aid & Medical PIC</h4>
            <p className="text-slate-300 leading-relaxed">
              Medical assistance kit and oxygen cylinder are stationed at the Reception Lobby. Contact: {eventInfo.emergencyContact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
