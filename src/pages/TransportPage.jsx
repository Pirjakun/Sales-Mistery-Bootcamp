import React from 'react';
import { 
  Truck, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Calendar, 
  Navigation 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TransportPage = () => {
  const { currentParticipant, eventInfo } = useApp();

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            EVENT <span className="text-indigo-400">TRANSPORT</span>
          </h1>
          <p className="text-xs text-slate-400">Shuttle Bus Schedules & Driver Contacts</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
          <Truck className="w-5 h-5" />
        </div>
      </div>

      {/* Your Assigned Vehicle */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">YOUR BUS ASSIGNMENT:</span>
          <span className="text-sm font-mono font-extrabold px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {currentParticipant?.bus}
          </span>
        </div>
      </div>

      {/* Departure Schedule */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Navigation className="w-4 h-4 text-indigo-400" />
          <span>Outbound Departure (Day 1)</span>
        </h3>

        <div className="space-y-2.5 text-xs">
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between">
            <span className="text-slate-400">Meeting Point:</span>
            <span className="font-bold text-white">HQ Office Lobby (Jakarta / Jogja HQ)</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between">
            <span className="text-slate-400">Departure Time:</span>
            <span className="font-bold text-amber-300 font-mono">08:00 AM Sharp</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between">
            <span className="text-slate-400">Driver & Vehicle:</span>
            <span className="font-bold text-slate-200">Pak Joko (Mercedes Coaster AB 7012 SK)</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between">
            <span className="text-slate-400">Transport PIC:</span>
            <span className="font-bold text-slate-200">Maya (+62 812-3456-7890)</span>
          </div>
        </div>
      </div>

      {/* Return Schedule */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Calendar className="w-4 h-4 text-indigo-400" />
          <span>Return Departure (Day 3)</span>
        </h3>

        <div className="space-y-2.5 text-xs">
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between">
            <span className="text-slate-400">Meeting Point:</span>
            <span className="font-bold text-white">Kalyana Main Reception Lobby</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between">
            <span className="text-slate-400">Departure Time:</span>
            <span className="font-bold text-amber-300 font-mono">13:30 PM (Post Lunch)</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between">
            <span className="text-slate-400">Destinations:</span>
            <span className="font-bold text-slate-200">Adisucipto Airport & Tugu Station</span>
          </div>
        </div>
      </div>
    </div>
  );
};
