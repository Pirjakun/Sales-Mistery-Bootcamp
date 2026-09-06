import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  UserCheck, 
  ShieldCheck, 
  Zap, 
  Lightbulb, 
  MessageSquare, 
  QrCode, 
  Calendar, 
  ArrowUpRight 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { participants, attendanceRecords, insights, feedback, schedule } = useApp();

  const totalParticipants = participants.length;
  const safetyCompleted = participants.filter(p => p.safetyWatched).length;
  const totalCheckIns = attendanceRecords.length;
  const uniqueCheckedInCount = new Set(attendanceRecords.map(r => r.participantId)).size;
  const totalInsights = insights.length;
  const totalFeedback = feedback.length;

  const avgFeedbackRating = feedback.length 
    ? (feedback.reduce((sum, f) => sum + f.rating, 0) / feedback.length).toFixed(1)
    : "5.0";

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            EVENT <span className="text-amber-400">ANALYTICS & CONTROL</span>
          </h1>
          <p className="text-xs text-slate-400">Live Metrics for Sales Mastery Bootcamp at Kalyana Resort</p>
        </div>
        <button
          onClick={() => navigate('/admin/attendance')}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all w-fit"
        >
          <QrCode className="w-4 h-4" />
          <span>GENERATE ATTENDANCE QR</span>
        </button>
      </div>

      {/* Primary Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">TOTAL PARTICIPANTS</span>
            <Users className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-black text-white">{totalParticipants}</div>
          <p className="text-[11px] text-slate-400">20 Registered / 4 Groups</p>
        </div>

        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">CHECKED IN TODAY</span>
            <UserCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-emerald-400">{uniqueCheckedInCount} <span className="text-sm text-slate-500 font-normal">/ {totalParticipants}</span></div>
          <p className="text-[11px] text-emerald-400 font-semibold">{Math.round((uniqueCheckedInCount / totalParticipants) * 100)}% Participation Rate</p>
        </div>

        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">SAFETY INDUCTION</span>
            <ShieldCheck className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-3xl font-black text-white">{safetyCompleted} <span className="text-sm text-slate-500 font-normal">/ {totalParticipants}</span></div>
          <p className="text-[11px] text-rose-300 font-semibold">{Math.round((safetyCompleted / totalParticipants) * 100)}% Verified</p>
        </div>

        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">INSIGHTS & PLAYBOOK</span>
            <Lightbulb className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-3xl font-black text-yellow-400">{totalInsights}</div>
          <p className="text-[11px] text-slate-400">Game-changing ideas captured</p>
        </div>
      </div>

      {/* Quick Action Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          onClick={() => navigate('/admin/attendance')}
          className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer group space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <QrCode className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">QR Attendance Generator</h3>
          <p className="text-xs text-slate-400">Create session QR, launch projector fullscreen mode, or view attendance matrix.</p>
        </div>

        <div 
          onClick={() => navigate('/admin/participants')}
          className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer group space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Users className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">Manage Participants</h3>
          <p className="text-xs text-slate-400">CRUD 20 participants, manage rooms, roommates, and codes.</p>
        </div>

        <div 
          onClick={() => navigate('/admin/insights')}
          className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer group space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              <Lightbulb className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-yellow-400 transition-colors" />
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">Sales Mastery Playbook</h3>
          <p className="text-xs text-slate-400">Synthesize top insights, challenges, and actions into final event playbook.</p>
        </div>
      </div>
    </div>
  );
};
