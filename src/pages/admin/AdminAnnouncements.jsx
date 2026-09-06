import React, { useState } from 'react';
import { Bell, Plus, AlertTriangle, CheckCircle2, Megaphone } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminAnnouncements = () => {
  const { announcements, addAnnouncement } = useApp();
  const [priority, setPriority] = useState('Important');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return;

    addAnnouncement({ priority, title, text });
    setSuccess(true);
    setTitle('');
    setText('');
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
          ANNOUNCEMENTS <span className="text-rose-400">MANAGER</span>
        </h1>
        <p className="text-xs text-slate-400">Broadcast Real-Time Alerts to Participant Mobile Handbooks</p>
      </div>

      {/* Broadcast Form */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Megaphone className="w-4 h-4 text-amber-400" />
          <span>New Broadcast Announcement</span>
        </h3>

        {success && (
          <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            ✓ Announcement Broadcasted Successfully to Mobile App!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block text-slate-300 mb-1 font-medium">Priority Level:</label>
            <div className="flex gap-2">
              {['Normal', 'Important', 'Urgent'].map(p => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPriority(p)}
                  className={`px-4 py-2 rounded-xl font-bold border transition-all ${
                    priority === p 
                      ? p === 'Urgent' ? 'bg-rose-500 text-white border-rose-500' : p === 'Important' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-800 text-white border-slate-700'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-slate-300 mb-1 font-medium">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Coffee Break is ready ☕"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1 font-medium">Message Body:</label>
            <textarea
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Detailed announcement instruction..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Bell className="w-4 h-4" />
            <span>BROADCAST ANNOUNCEMENT NOW</span>
          </button>
        </form>
      </div>

      {/* Broadcast History */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Active Broadcast History</h3>
        <div className="space-y-2">
          {announcements.map((anc) => (
            <div key={anc.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                  anc.priority === 'Urgent' ? 'bg-rose-500 text-white' : anc.priority === 'Important' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}>
                  {anc.priority}
                </span>
                <span className="font-mono text-slate-400">{anc.time}</span>
              </div>
              <h4 className="font-bold text-white text-sm mt-1">{anc.title}</h4>
              <p className="text-slate-300">{anc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
