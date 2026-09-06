import React, { useState } from 'react';
import { 
  Calendar, 
  Plus, 
  Edit, 
  Trash2, 
  X, 
  Clock, 
  MapPin, 
  User 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminSchedule = () => {
  const { schedule, speakers, saveScheduleSession, deleteScheduleSession } = useApp();
  const [activeDay, setActiveDay] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSession, setEditingSession] = useState(null);

  const [formData, setFormData] = useState({
    day: 1,
    date: 'Sep 10, 2026',
    startTime: '09:00',
    endTime: '10:30',
    title: '',
    location: 'Main Ballroom',
    type: 'Training',
    speakerId: '',
    description: '',
    objective: '',
    preparation: ''
  });

  const filteredSessions = schedule.filter(s => s.day === activeDay);

  const handleOpenAdd = () => {
    setEditingSession(null);
    setFormData({
      day: activeDay,
      date: activeDay === 1 ? 'Sep 10, 2026' : activeDay === 2 ? 'Sep 11, 2026' : 'Sep 12, 2026',
      startTime: '09:00',
      endTime: '10:00',
      title: '',
      location: 'Main Ballroom - Kalyana Hall',
      type: 'Training',
      speakerId: '',
      description: '',
      objective: '',
      preparation: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (s) => {
    setEditingSession(s);
    setFormData({ ...s });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveScheduleSession(editingSession ? { ...formData, id: editingSession.id } : formData);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this session?")) {
      deleteScheduleSession(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            SCHEDULE <span className="text-amber-400">MANAGEMENT</span>
          </h1>
          <p className="text-xs text-slate-400">Add, Modify, & Organize Bootcamp Sessions</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>CREATE SESSION</span>
        </button>
      </div>

      {/* Day Tabs */}
      <div className="flex rounded-2xl bg-slate-900 p-1 border border-slate-800 max-w-sm">
        {[1, 2, 3].map((d) => (
          <button
            key={d}
            onClick={() => setActiveDay(d)}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all text-center ${
              activeDay === d ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' : 'text-slate-400 hover:text-white'
            }`}
          >
            DAY {d}
          </button>
        ))}
      </div>

      {/* Sessions List */}
      <div className="space-y-3">
        {filteredSessions.map((session) => (
          <div 
            key={session.id}
            className="p-4 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-300 font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>{session.startTime} – {session.endTime}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-sans border border-slate-700">
                  {session.type}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{session.title}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{session.location}</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleOpenEdit(session)}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold flex items-center gap-1 border border-slate-700 transition-colors"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>EDIT</span>
              </button>
              <button
                onClick={() => handleDelete(session.id)}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-900 text-rose-400 text-xs font-bold flex items-center gap-1 border border-slate-700 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>DELETE</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SESSION CREATE/EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-5 max-w-lg w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">
                {editingSession ? 'Edit Session' : 'Create New Session'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Day:</label>
                  <select
                    value={formData.day}
                    onChange={(e) => setFormData({ ...formData, day: parseInt(e.target.value, 10) })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                  >
                    <option value={1}>Day 1</option>
                    <option value={2}>Day 2</option>
                    <option value={3}>Day 3</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Session Type:</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                  >
                    <option>Training</option>
                    <option>Meal</option>
                    <option>Coffee Break</option>
                    <option>Outdoor</option>
                    <option>Morning Energy</option>
                    <option>Dinner</option>
                    <option>Transportation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Session Title:</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Start Time:</label>
                  <input
                    type="text"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">End Time:</label>
                  <input
                    type="text"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white font-mono"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Location:</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Assign Speaker:</label>
                <select
                  value={formData.speakerId || ''}
                  onChange={(e) => setFormData({ ...formData, speakerId: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                >
                  <option value="">None (General Session)</option>
                  {speakers.map(spk => (
                    <option key={spk.id} value={spk.id}>{spk.name} ({spk.role})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Overview Description:</label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all"
              >
                SAVE SESSION
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
