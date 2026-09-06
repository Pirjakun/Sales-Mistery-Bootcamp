import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Clock, 
  ChevronDown, 
  Shield, 
  Smartphone, 
  X,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TopNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    currentParticipant, 
    setCurrentParticipant, 
    participants, 
    simulatedTime, 
    setSimulatedTime, 
    simulatedDay, 
    setSimulatedDay 
  } = useApp();

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isTimeSimulatorOpen, setIsTimeSimulatorOpen] = useState(false);

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0e11]/90 backdrop-blur-xl border-b border-amber-500/15 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo - Werkudara Luxury Style */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Emblem Icon Motif */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1px] shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0b0e11] rounded-[11px] flex items-center justify-center text-amber-300 font-bold text-xs">
              ✦
            </div>
          </div>

          <div>
            <div className="eyebrow-label text-[9px] text-amber-400/90 tracking-[0.25em]">
              WERKUDARA GROUP
            </div>
            <h1 className="text-sm font-semibold tracking-tight text-zinc-100 font-heading leading-tight group-hover:text-amber-300 transition-colors">
              SALES MASTERY <span className="font-serif-luxury italic text-amber-400 font-normal">Bootcamp</span>
            </h1>
          </div>
        </div>

        {/* Action Controls Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Time Simulator Trigger Badge */}
          <button
            onClick={() => setIsTimeSimulatorOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111518] border border-amber-500/20 hover:border-amber-400/40 text-zinc-300 text-xs transition-all"
            title="Open Event Time Simulator"
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-[11px] font-medium text-amber-200">Day {simulatedDay} • {simulatedTime}</span>
          </button>

          {/* Participant Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111518] border border-zinc-800 hover:border-amber-500/30 text-xs transition-all"
            >
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono font-bold text-[10px] border border-amber-500/30">
                {currentParticipant?.code ? currentParticipant.code.slice(0, 2) : 'P'}
              </div>
              <span className="font-medium text-zinc-200 hidden xs:inline">{currentParticipant?.name.split(' ')[0]}</span>
              <span className="font-mono text-[10px] text-amber-300 font-bold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                {currentParticipant?.code}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            {/* Dropdown Menu */}
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#111518] border border-amber-500/25 shadow-2xl p-2 z-50 animate-in fade-in duration-150">
                <div className="px-3 py-2 border-b border-zinc-800 text-xs">
                  <span className="eyebrow-label text-amber-400/80 block">PARTICIPANT BADGE</span>
                  <div className="font-bold text-zinc-100 mt-0.5">{currentParticipant?.name}</div>
                  <div className="text-[11px] text-amber-300 font-mono">Room {currentParticipant?.room} • Table {currentParticipant?.seat}</div>
                </div>

                <div className="py-1 max-h-48 overflow-y-auto no-scrollbar space-y-0.5">
                  <span className="px-3 py-1 eyebrow-label text-zinc-400 block">SELECT PARTICIPANT:</span>
                  {participants.map(p => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setCurrentParticipant(p);
                        setIsUserDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-xl text-xs flex items-center justify-between transition-colors ${
                        currentParticipant?.id === p.id ? 'bg-amber-500/15 text-amber-300 font-bold' : 'text-zinc-300 hover:bg-zinc-800/80'
                      }`}
                    >
                      <span className="truncate pr-2">{p.name}</span>
                      <span className="font-mono text-[10px] text-amber-400">{p.code}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-2 border-t border-zinc-800">
                  <button
                    onClick={() => {
                      setIsUserDropdownOpen(false);
                      navigate('/profile');
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 text-amber-300 font-medium text-xs text-center transition-colors"
                  >
                    View My Badge & Room Info
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Admin Switcher Toggle Button */}
          <button
            onClick={() => navigate(isAdminRoute ? '/' : '/admin')}
            className={`p-2 rounded-full transition-all border ${
              isAdminRoute 
                ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-md shadow-amber-500/20' 
                : 'bg-[#111518] text-zinc-300 border-zinc-800 hover:text-amber-300 hover:border-amber-500/40'
            }`}
            title={isAdminRoute ? 'Switch to Participant View' : 'Open Admin Dashboard'}
          >
            {isAdminRoute ? <Smartphone className="w-4 h-4" /> : <Shield className="w-4 h-4 text-amber-400" />}
          </button>
        </div>

      </div>

      {/* TIME SIMULATOR MODAL */}
      {isTimeSimulatorOpen && (
        <div className="fixed inset-0 z-50 bg-[#0b0e11]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#111518] border border-amber-500/30 rounded-3xl p-5 max-w-sm w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-zinc-100 text-sm">Event Time Simulator</h3>
              </div>
              <button onClick={() => setIsTimeSimulatorOpen(false)} className="p-1 text-zinc-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">Adjust event clock to test contextual prompts & session schedules.</p>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-zinc-300 font-medium mb-1">Select Event Day:</label>
                <div className="flex rounded-xl bg-zinc-950 p-1 border border-zinc-800">
                  {[1, 2, 3].map(d => (
                    <button
                      key={d}
                      onClick={() => setSimulatedDay(d)}
                      className={`flex-1 py-1.5 rounded-lg font-bold text-xs transition-all ${
                        simulatedDay === d ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Day {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">Simulated Clock Time:</label>
                <input
                  type="text"
                  value={simulatedTime}
                  onChange={(e) => setSimulatedTime(e.target.value)}
                  placeholder="e.g. 09:15"
                  className="w-full bg-zinc-950 border border-amber-500/30 rounded-xl p-2.5 font-mono text-center font-bold text-amber-300 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-3 gap-1.5 pt-1">
                {['08:00', '09:00', '12:30', '16:00', '18:30', '21:00'].map(t => (
                  <button
                    key={t}
                    onClick={() => setSimulatedTime(t)}
                    className="py-1.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-300 font-mono text-xs border border-zinc-800"
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsTimeSimulatorOpen(false)}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all mt-2"
              >
                APPLY SIMULATED TIME
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
