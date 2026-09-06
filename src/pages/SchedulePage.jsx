import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Lightbulb, 
  MessageSquare, 
  X, 
  Sparkles, 
  FileText 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SchedulePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { schedule, speakers, simulatedDay } = useApp();

  const [activeDay, setActiveDay] = useState(simulatedDay);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSessionModal, setSelectedSessionModal] = useState(null);

  const sessionTypes = ['All', 'Training', 'Meal', 'Coffee Break', 'Outdoor', 'Morning Energy', 'Dinner'];

  const filteredSchedule = schedule.filter(session => {
    const matchesDay = session.day === activeDay;
    const matchesType = selectedType === 'All' || session.type === selectedType;
    return matchesDay && matchesType;
  });

  const activeSessionDetail = selectedSessionModal || (id ? schedule.find(s => s.id === id) : null);

  const getSpeaker = (speakerId) => {
    return speakers.find(s => s.id === speakerId);
  };

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl animate-in fade-in duration-300">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <span className="eyebrow-label text-amber-400/90 block">AGENDA & TIMELINE</span>
          <h1 className="text-2xl font-normal font-serif-luxury text-zinc-100 leading-tight">
            Event <span className="italic gold-gradient-text">Schedule</span>
          </h1>
        </div>
        <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <Calendar className="w-5 h-5" />
        </div>
      </div>

      {/* Werkudara Day Selector Tabs */}
      <div className="flex rounded-2xl bg-[#111518] p-1.5 border border-amber-500/20">
        {[1, 2, 3].map((dayNum) => (
          <button
            key={dayNum}
            onClick={() => setActiveDay(dayNum)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all text-center ${
              activeDay === dayNum
                ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20 scale-[1.02]'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            <div>DAY {dayNum}</div>
            <div className="text-[10px] font-normal opacity-80">
              {dayNum === 1 ? 'Sep 10' : dayNum === 2 ? 'Sep 11' : 'Sep 12'}
            </div>
          </button>
        ))}
      </div>

      {/* Type Filter Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        {sessionTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedType === type
                ? 'bg-amber-500/15 text-amber-300 border-amber-500/40 font-bold'
                : 'bg-[#111518] text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Werkudara Timeline List */}
      <div className="relative space-y-3 pl-3 border-l border-amber-500/20 ml-2">
        {filteredSchedule.map((session) => {
          const speaker = getSpeaker(session.speakerId);
          return (
            <div
              key={session.id}
              onClick={() => setSelectedSessionModal(session)}
              className="relative p-4 rounded-2xl werkudara-card transition-all cursor-pointer group space-y-2"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[17px] top-5 w-2.5 h-2.5 rounded-full bg-[#0b0e11] border-2 border-amber-400 group-hover:scale-125 transition-transform" />

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{session.startTime} – {session.endTime}</span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  session.type === 'Training' ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' :
                  session.type === 'Meal' || session.type === 'Dinner' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                  session.type === 'Morning Energy' || session.type === 'Outdoor' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                  'bg-zinc-800 text-zinc-400 border-zinc-700'
                }`}>
                  {session.type}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold font-serif-luxury text-zinc-100 group-hover:text-amber-300 transition-colors">
                  {session.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{session.location}</span>
                </div>
              </div>

              {speaker && (
                <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/60 text-xs text-zinc-300">
                  <img src={speaker.photo} alt={speaker.name} className="w-5 h-5 rounded-full object-cover border border-amber-500/30" />
                  <span className="font-medium text-zinc-200">{speaker.name}</span>
                  <span className="text-zinc-500 text-[10px]">• {speaker.role}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* SESSION DETAIL MODAL */}
      {activeSessionDetail && (
        <div className="fixed inset-0 z-50 bg-[#0b0e11]/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#111518] border border-amber-500/30 rounded-3xl p-5 max-w-md w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-zinc-800">
              <div className="space-y-1">
                <span className="eyebrow-label text-amber-400 block">
                  {activeSessionDetail.type} • {activeSessionDetail.date}
                </span>
                <h3 className="text-xl font-bold font-serif-luxury text-zinc-100 leading-snug">{activeSessionDetail.title}</h3>
              </div>
              <button 
                onClick={() => {
                  setSelectedSessionModal(null);
                  if (id) navigate('/schedule');
                }} 
                className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Time & Location */}
            <div className="p-3.5 rounded-2xl bg-[#0b0e11] border border-amber-500/20 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-mono">
                <Clock className="w-4 h-4" />
                <span>{activeSessionDetail.startTime} – {activeSessionDetail.endTime}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{activeSessionDetail.location}</span>
              </div>
            </div>

            {/* Speaker Card if assigned */}
            {getSpeaker(activeSessionDetail.speakerId) && (
              <div className="p-3.5 rounded-2xl bg-[#0b0e11] border border-amber-500/20 flex items-center gap-3">
                <img 
                  src={getSpeaker(activeSessionDetail.speakerId).photo} 
                  alt="Speaker" 
                  className="w-12 h-12 rounded-2xl object-cover border border-amber-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold font-serif-luxury text-white">{getSpeaker(activeSessionDetail.speakerId).name}</h4>
                  <p className="text-[11px] text-zinc-300">{getSpeaker(activeSessionDetail.speakerId).role}</p>
                  <p className="text-[10px] text-amber-400 font-mono">{getSpeaker(activeSessionDetail.speakerId).company}</p>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-1">
              <h4 className="eyebrow-label text-zinc-400">OVERVIEW</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">{activeSessionDetail.description}</p>
            </div>

            {/* Learning Objective */}
            {activeSessionDetail.objective && (
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1">
                <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Learning Objective</span>
                </h4>
                <p className="text-emerald-200/90 leading-relaxed">{activeSessionDetail.objective}</p>
              </div>
            )}

            {/* Preparation Notes */}
            {activeSessionDetail.preparation && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Preparation Needed</span>
                </h4>
                <p className="text-amber-200/90 leading-relaxed">{activeSessionDetail.preparation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 border-t border-zinc-800 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setSelectedSessionModal(null);
                  navigate('/insights');
                }}
                className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
              >
                <Lightbulb className="w-4 h-4" />
                <span>SUBMIT INSIGHT</span>
              </button>

              <button
                onClick={() => {
                  setSelectedSessionModal(null);
                  navigate('/feedback');
                }}
                className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-zinc-700 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>GIVE FEEDBACK</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
