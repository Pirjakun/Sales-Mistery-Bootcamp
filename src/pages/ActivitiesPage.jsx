import React, { useState } from 'react';
import { 
  Zap, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sun, 
  ShieldAlert, 
  Sparkles, 
  UserCheck 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ActivitiesPage = () => {
  const { morningEnergy } = useApp();
  const [joined, setJoined] = useState(false);

  const outdoorCareItems = [
    { title: "Sunscreen SPF 50", desc: "Available at Pine Lawn entrance desk." },
    { title: "Mosquito Repellent Lotion", desc: "Essential for evening garden sessions." },
    { title: "Hydration Station", desc: "Infused electrolyte water provided continuously." },
    { title: "Fresh Hand Towels", desc: "Chilled towels available after morning workouts." }
  ];

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            MORNING <span className="text-emerald-400">ENERGY</span>
          </h1>
          <p className="text-xs text-slate-400">06:00 AM Circuit & Outdoor Care</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <Zap className="w-5 h-5" />
        </div>
      </div>

      {/* 06:00 Morning Activity Card */}
      <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 shadow-2xl space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase">
            DAILY 06:00 AM
          </span>
          <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono">
            <Clock className="w-4 h-4" />
            <span>{morningEnergy.time}</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-white">HYROX-Style Functional Circuit</h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>{morningEnergy.location}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
          <span className="text-[10px] text-slate-400 font-medium uppercase block">HEAD COACH</span>
          <span className="font-bold text-slate-200">{morningEnergy.coach}</span>
        </div>

        {/* Stations */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Circuit Stations</span>
          {morningEnergy.stations.map((st, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5 text-xs">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono font-extrabold text-[10px] shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <h4 className="font-bold text-slate-100">{st.name}</h4>
                <p className="text-[11px] text-slate-400">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2">
          {joined ? (
            <div className="w-full py-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>YOU'RE REGISTERED FOR MORNING ENERGY!</span>
            </div>
          ) : (
            <button
              onClick={() => setJoined(true)}
              className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <UserCheck className="w-4 h-4" />
              <span>I'M JOINING THIS MORNING</span>
            </button>
          )}
        </div>
      </div>

      {/* Outdoor Care Essentials */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Sun className="w-5 h-5 text-amber-400" />
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Outdoor Care Essentials</h3>
            <p className="text-xs text-slate-400">"We've prepared the essentials so you can focus on the experience."</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          {outdoorCareItems.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <h4 className="text-xs font-bold text-white">{item.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
