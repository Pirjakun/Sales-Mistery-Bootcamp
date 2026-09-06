import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  QrCode, 
  Grid, 
  Lightbulb, 
  MessageSquare, 
  Bell, 
  Smartphone, 
  Settings, 
  FileSpreadsheet 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminLayout = () => {
  const navigate = useNavigate();

  const adminNavItems = [
    { title: "Dashboard", path: "/admin", icon: LayoutDashboard, end: true },
    { title: "Participants", path: "/admin/participants", icon: Users },
    { title: "Schedule", path: "/admin/schedule", icon: Calendar },
    { title: "Attendance & QR", path: "/admin/attendance", icon: QrCode },
    { title: "Seating Chart", path: "/admin/seating", icon: Grid },
    { title: "Insights & Playbook", path: "/admin/insights", icon: Lightbulb },
    { title: "Session Feedback", path: "/admin/feedback", icon: MessageSquare },
    { title: "Announcements", path: "/admin/announcements", icon: Bell }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* Sidebar Navigation for Desktop / Horizontal bar for Mobile Admin */}
      <aside className="w-full md:w-64 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 shrink-0 p-4 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center font-black text-slate-950 text-xs">
              ADM
            </div>
            <div>
              <h2 className="font-bold text-white text-sm font-heading leading-tight">CONTROL CENTER</h2>
              <p className="text-[10px] text-slate-400">Sales Mastery Bootcamp</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="md:hidden text-xs text-amber-400 font-medium flex items-center gap-1"
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile</span>
          </button>
        </div>

        <nav aria-label="Admin Dashboard" className="flex md:flex-col gap-1 overflow-x-auto no-scrollbar py-1">
          {adminNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden md:block pt-6 border-t border-slate-800 space-y-2">
          <button
            onClick={() => navigate('/')}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-700"
          >
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>Switch to Participant View</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
