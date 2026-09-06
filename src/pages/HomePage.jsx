import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  ChevronRight, 
  Bell, 
  ShieldCheck, 
  Utensils, 
  PenTool, 
  BookOpen, 
  Calendar,
  Lightbulb,
  QrCode
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HomePage = () => {
  const navigate = useNavigate();
  const { 
    currentParticipant, 
    simulatedTime, 
    simulatedDay, 
    schedule, 
    announcements, 
    speakers 
  } = useApp();

  const todaySessions = schedule.filter(s => s.day === simulatedDay);
  const nextSession = todaySessions.find(s => s.startTime >= simulatedTime) || todaySessions[0] || schedule[0];
  const speaker = speakers.find(sp => sp.id === nextSession?.speakerId);

  const quickActions = [
    { label: "Check In QR", path: `/attendance/${nextSession?.id}`, icon: QrCode, color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
    { label: "Schedule", path: "/schedule", icon: Calendar, color: "text-zinc-200 bg-zinc-900 border-zinc-800" },
    { label: "Handbook", path: "/handbook", icon: BookOpen, color: "text-zinc-200 bg-zinc-900 border-zinc-800" },
    { label: "Submit Insight", path: "/insights", icon: Lightbulb, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" }
  ];

  return (
    <div className="space-y-7 pb-24 max-w-md mx-auto sm:max-w-xl animate-in fade-in duration-300">
      
      {/* Luxury Hero Greeting Header */}
      <div className="pt-3 text-center space-y-2 relative">
        <div className="eyebrow-label text-amber-400/90 tracking-[0.25em] flex items-center justify-center gap-2">
          <span>✦</span>
          <span>WERKUDARA LUXURY EVENT</span>
          <span>✦</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-normal font-serif-luxury text-zinc-100 leading-tight">
          Welcome, <span className="italic gold-gradient-text">{currentParticipant?.name.split(' ')[0]}</span>
        </h1>

        <p className="text-xs text-zinc-400 font-sans italic max-w-xs mx-auto">
          "Designed with Precision. Grounded in Meaning."
        </p>

        <div className="pt-1 flex items-center justify-center gap-3 text-[11px] text-zinc-400 font-mono">
          <span className="text-amber-300 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            DAY {simulatedDay} • KALYANA RESORT
          </span>
        </div>
      </div>

      {/* Announcements Banner */}
      {announcements.length > 0 && (
        <div className="p-4 rounded-2xl bg-[#111518] border border-amber-500/30 shadow-xl flex items-start gap-3 text-xs">
          <Bell className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-300 uppercase tracking-wide text-[11px]">{announcements[0].title}</span>
              <span className="text-[10px] font-mono text-amber-400/80">{announcements[0].time}</span>
            </div>
            <p className="text-zinc-300 text-[11px] mt-1 leading-relaxed">{announcements[0].text}</p>
          </div>
        </div>
      )}

      {/* Quick Action Pills */}
      <div className="grid grid-cols-4 gap-2">
        {quickActions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <button
              key={idx}
              onClick={() => navigate(action.path)}
              className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all hover:scale-105 ${action.color}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] font-medium text-zinc-200 tracking-tight text-center leading-tight">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* PRIMARY CARD: WHAT IS HAPPENING NOW / NEXT UP */}
      <div className="relative rounded-3xl p-6 werkudara-card-gold shadow-2xl space-y-4 overflow-hidden group">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="eyebrow-label text-amber-400">
              NEXT UP SESSION
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-amber-300 bg-[#0b0e11] px-3 py-1 rounded-full border border-amber-500/30">
            {nextSession.startTime} – {nextSession.endTime}
          </span>
        </div>

        <div>
          <h2 className="text-xl font-bold font-serif-luxury text-zinc-100 group-hover:text-amber-300 transition-colors leading-snug">
            {nextSession.title}
          </h2>
          <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2">
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>{nextSession.location}</span>
          </div>
        </div>

        {speaker && (
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0b0e11]/90 border border-amber-500/20">
            <img src={speaker.photo} alt={speaker.name} className="w-9 h-9 rounded-xl object-cover border border-amber-500/30" />
            <div className="text-xs min-w-0">
              <div className="font-bold text-zinc-100 truncate">{speaker.name}</div>
              <div className="text-[10px] text-amber-400/90 font-mono">{speaker.role} • {speaker.company}</div>
            </div>
          </div>
        )}

        <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between">
          <button
            onClick={() => navigate(`/schedule/${nextSession.id}`)}
            className="text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors"
          >
            <span>EXPLORE DETAILS</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigate(`/attendance/${nextSession.id}`)}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all hover:scale-105"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>CHECK IN</span>
          </button>
        </div>
      </div>

      {/* Centered Star Motif Separator */}
      <div className="flex items-center justify-center gap-3 text-amber-500/40 py-1">
        <div className="h-[1px] w-12 bg-amber-500/20" />
        <span className="text-xs">✦</span>
        <div className="h-[1px] w-12 bg-amber-500/20" />
      </div>

      {/* CONTEXTUAL REMINDERS */}
      <div className="space-y-3">
        <h3 className="eyebrow-label text-zinc-400">CONTEXTUAL EVENT REMINDERS</h3>

        {/* Safety Induction Status Card */}
        {!currentParticipant?.safetyWatched && (
          <div 
            onClick={() => navigate('/safety')}
            className="p-4 rounded-2xl bg-[#111518] border border-rose-500/30 flex items-center justify-between cursor-pointer hover:border-rose-500/50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-100">Safety Induction Pending</h4>
                <p className="text-[11px] text-zinc-400">Watch the 2-min Kalyana evacuation video</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </div>
        )}

        {/* Raminten Shuttle Reminder */}
        {simulatedDay === 2 && (
          <div 
            onClick={() => navigate('/meals')}
            className="p-4 rounded-2xl bg-[#111518] border border-amber-500/30 flex items-center justify-between cursor-pointer hover:border-amber-500/50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-100">House of Raminten Shuttle</h4>
                <p className="text-[11px] text-zinc-400">Bus departs 18:30 from Main Lobby</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </div>
        )}

        {/* 4-Color Pen System Card */}
        <div 
          onClick={() => navigate('/toolkit')}
          className="p-4 rounded-2xl werkudara-card flex items-center justify-between cursor-pointer hover:border-amber-500/30 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-100">4-Color Pen System Guide</h4>
              <p className="text-[11px] text-zinc-400">Blue=Note, Red=Problem, Green=Idea, Black=Action</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>
      </div>
    </div>
  );
};
