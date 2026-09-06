import React, { useState } from 'react';
import { 
  BookOpen, 
  MapPin, 
  Wifi, 
  Phone, 
  Home as HomeIcon, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HandbookPage = () => {
  const { eventInfo, currentParticipant, locations } = useApp();
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedLocation, setExpandedLocation] = useState(null);

  const houseRules = [
    { rule: "BE PRESENT", desc: "Turn off distracting notifications during training sessions." },
    { rule: "PARTICIPATE", desc: "Engage fully in discussions, exercises, and outdoor challenges." },
    { rule: "ASK QUESTIONS", desc: "No question is too simple. Challenge assumptions." },
    { rule: "SHARE YOUR INSIGHT", desc: "Raise your Insight Flag or log insights in the app." },
    { rule: "RESPECT THE ROOM", desc: "Honor diverse perspectives and keep time schedules." },
    { rule: "STAY CURIOUS", desc: "Adopt a growth mindset throughout the 3-day experience." },
    { rule: "HAVE FUN", desc: "Build lasting sales leadership bonds with your peers." }
  ];

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl animate-in fade-in duration-300">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-100 tracking-tight font-heading">
            DIGITAL <span className="text-amber-400">HANDBOOK</span>
          </h1>
          <p className="text-xs text-zinc-400">Complete Event & Stay Companion Guide</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <BookOpen className="w-5 h-5" />
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
        {[
          { id: 'overview', label: 'Overview & Contacts' },
          { id: 'stay', label: 'Stay & Wi-Fi' },
          { id: 'guide', label: 'Kalyana Guide' },
          { id: 'rules', label: 'House Rules' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              activeSection === tab.id
                ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-md shadow-amber-500/20'
                : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SECTION 1: OVERVIEW & CONTACTS */}
      {activeSection === 'overview' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-5 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-4">
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Event Overview</span>
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Sales Mastery Bootcamp is an intensive 2-Night / 3-Day residential experience at Kalyana Resort. Designed to elevate enterprise deal execution, leadership alignment, and strategic sales velocity.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800">
                <span className="text-[10px] text-zinc-400 font-medium block">DURATION</span>
                <span className="text-xs font-bold text-zinc-100">{eventInfo.duration}</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800">
                <span className="text-[10px] text-zinc-400 font-medium block">DATES</span>
                <span className="text-xs font-bold text-amber-300 font-mono">{eventInfo.dates}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-rose-400 font-bold">
                <MapPin className="w-4 h-4" />
                <span>{eventInfo.venue}</span>
              </div>
              <p className="text-zinc-400 pl-6 leading-relaxed">{eventInfo.address}</p>
            </div>
          </div>

          {/* Contacts */}
          <div className="p-5 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-3">
            <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Important Contacts</span>
            </h3>

            <div className="space-y-2">
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-zinc-400 font-medium block">EVENT DIRECTOR</span>
                  <span className="font-bold text-zinc-200">{eventInfo.picContact}</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-rose-300 font-medium block">FIRST AID & SECURITY</span>
                  <span className="font-bold text-rose-200">{eventInfo.emergencyContact}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: STAY & WI-FI */}
      {activeSection === 'stay' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-5 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                <HomeIcon className="w-5 h-5 text-amber-400" />
                <span>Your Room Assignment</span>
              </h3>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {currentParticipant?.code}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800">
                <span className="text-[10px] text-zinc-400 font-medium block">ROOM NUMBER</span>
                <span className="text-lg font-extrabold text-white">{currentParticipant?.room}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800">
                <span className="text-[10px] text-zinc-400 font-medium block">ROOMMATE</span>
                <span className="text-sm font-bold text-zinc-200">{currentParticipant?.roommate}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800">
              <span className="text-[10px] text-zinc-400 font-medium block">SEATING ASSIGNMENT</span>
              <span className="text-sm font-bold text-emerald-400 font-mono">{currentParticipant?.seat}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 rounded-2xl bg-zinc-800/40 border border-zinc-700/40">
                <span className="text-[10px] text-zinc-400 block">CHECK-IN</span>
                <span className="font-bold text-zinc-200">Sep 10 • 12:00 PM</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-800/40 border border-zinc-700/40">
                <span className="text-[10px] text-zinc-400 block">CHECK-OUT</span>
                <span className="font-bold text-zinc-200">Sep 12 • 11:00 AM</span>
              </div>
            </div>
          </div>

          {/* Wi-Fi Card */}
          <div className="p-5 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-3">
            <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <Wifi className="w-4 h-4 text-emerald-400" />
              <span>Resort High-Speed Wi-Fi</span>
            </h3>

            <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">NETWORK NAME:</span>
                <span className="font-mono font-bold text-zinc-100">{eventInfo.wifiName}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-zinc-800">
                <span className="text-zinc-400">PASSWORD:</span>
                <span className="font-mono font-bold text-amber-400">{eventInfo.wifiPass}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: KALYANA RESORT GUIDE */}
      {activeSection === 'guide' && (
        <div className="space-y-3 animate-in fade-in duration-200">
          {locations.map((loc) => {
            const isExpanded = expandedLocation === loc.id;
            return (
              <div
                key={loc.id}
                className="rounded-3xl bg-zinc-900/90 border border-zinc-800 overflow-hidden transition-all"
              >
                <div 
                  onClick={() => setExpandedLocation(isExpanded ? null : loc.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-zinc-800/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={loc.image} alt={loc.name} className="w-12 h-12 rounded-2xl object-cover shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">{loc.category}</span>
                      <h4 className="text-sm font-bold text-zinc-100 leading-snug">{loc.name}</h4>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-zinc-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 space-y-2.5 border-t border-zinc-800 text-xs">
                    <p className="text-zinc-300 leading-relaxed">{loc.description}</p>
                    <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-400 space-y-1">
                      <span className="font-bold text-amber-300 block">Direction:</span>
                      <p>{loc.direction}</p>
                    </div>
                    {loc.note && (
                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        <span className="font-bold block">Important Note:</span>
                        <p className="opacity-90">{loc.note}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* SECTION 4: HOUSE RULES */}
      {activeSection === 'rules' && (
        <div className="space-y-3 animate-in fade-in duration-200">
          <div className="p-5 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-3">
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-zinc-100">Bootcamp House Rules</h3>
            </div>
            <p className="text-xs text-zinc-400">Designed to ensure an engaging, respectful, and high-impact experience for all 20 participants.</p>

            <div className="space-y-2 pt-2">
              {houseRules.map((hr, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-mono font-extrabold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-100 tracking-wider">{hr.rule}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{hr.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
