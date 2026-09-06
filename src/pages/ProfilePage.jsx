import React from 'react';
import { 
  User, 
  Key, 
  Users, 
  Home, 
  MapPin, 
  Truck, 
  Utensils, 
  Wifi, 
  ShieldCheck, 
  AlertCircle,
  QrCode
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProfilePage = () => {
  const { currentParticipant, eventInfo } = useApp();

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            MY <span className="text-amber-400">INFORMATION</span>
          </h1>
          <p className="text-xs text-slate-400">Personal Event Badge & Room Details</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <User className="w-5 h-5" />
        </div>
      </div>

      {/* Main Digital Badge Card */}
      <div className="relative rounded-3xl p-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-slate-700/80 shadow-2xl space-y-5 overflow-hidden">
        {/* Glow corner line */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block">PARTICIPANT BADGE</span>
            <h2 className="text-xl font-extrabold text-white mt-0.5">{currentParticipant?.name}</h2>
            <p className="text-xs text-amber-400 font-medium">{currentParticipant?.group}</p>
          </div>
          <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-center font-mono">
            <span className="text-[10px] text-amber-300 block font-sans uppercase">CODE</span>
            <span className="text-base font-extrabold text-white">{currentParticipant?.code}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
              <Home className="w-3.5 h-3.5 text-sky-400" />
              <span>ROOM NUMBER</span>
            </div>
            <span className="text-base font-extrabold text-white">{currentParticipant?.room}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>ROOMMATE</span>
            </div>
            <span className="text-xs font-bold text-slate-200">{currentParticipant?.roommate}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-0.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>TABLE & SEAT ASSIGNMENT</span>
            </div>
            <span className="text-xs font-mono font-extrabold text-emerald-300">{currentParticipant?.seat}</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ASSIGNED
          </span>
        </div>
      </div>

      {/* Logistics Details */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3.5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Travel & Health Info</h3>

        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <Truck className="w-4 h-4 text-indigo-400" />
              <span>Transportation Bus:</span>
            </div>
            <span className="font-bold text-white font-mono">{currentParticipant?.bus}</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <Utensils className="w-4 h-4 text-orange-400" />
              <span>Dietary Requirement:</span>
            </div>
            <span className="font-bold text-amber-300 font-mono">{currentParticipant?.dietary}</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <Wifi className="w-4 h-4 text-emerald-400" />
              <span>Resort Wi-Fi:</span>
            </div>
            <span className="font-mono text-slate-200">{eventInfo.wifiName} ({eventInfo.wifiPass})</span>
          </div>
        </div>
      </div>

      {/* Safety Induction Status */}
      <div className={`p-4 rounded-3xl border flex items-center justify-between text-xs ${
        currentParticipant?.safetyWatched 
          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200' 
          : 'bg-amber-500/10 border-amber-500/30 text-amber-200'
      }`}>
        <div className="flex items-center gap-3">
          <ShieldCheck className={`w-6 h-6 ${currentParticipant?.safetyWatched ? 'text-emerald-400' : 'text-amber-400'}`} />
          <div>
            <h4 className="font-bold">{currentParticipant?.safetyWatched ? "Safety Induction Completed" : "Safety Induction Pending"}</h4>
            <p className="text-[11px] opacity-80">
              {currentParticipant?.safetyWatched ? "Verified for Kalyana Resort" : "Please watch the video in Safety tab"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
