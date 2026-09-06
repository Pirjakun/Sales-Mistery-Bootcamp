import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  X, 
  Check, 
  Key, 
  Home 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminParticipants = () => {
  const { participants, saveParticipant, deleteParticipant } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingParticipant, setEditingParticipant] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    group: 'Group 01',
    room: 'Room 201',
    roommate: '',
    seat: 'Table 01 - Seat A01',
    bus: 'Bus 01',
    dietary: 'Regular'
  });

  const filtered = participants.filter(p => {
    const q = searchQuery.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.group.toLowerCase().includes(q);
  });

  const handleOpenAddModal = () => {
    setEditingParticipant(null);
    setFormData({
      name: '',
      code: `PCODE${Math.floor(10 + Math.random() * 90)}`,
      group: 'Group 01',
      room: 'Room 201',
      roommate: '',
      seat: 'Table 01 - Seat A01',
      bus: 'Bus 01',
      dietary: 'Regular'
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (p) => {
    setEditingParticipant(p);
    setFormData({ ...p });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveParticipant(editingParticipant ? { ...formData, id: editingParticipant.id } : formData);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this participant?")) {
      deleteParticipant(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            PARTICIPANT <span className="text-amber-400">MANAGEMENT</span>
          </h1>
          <p className="text-xs text-slate-400">CRUD Participant Roster, Roommates, & Table Seats</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>ADD PARTICIPANT</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, code (e.g. ARIE01), or group..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* Table Roster */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-x-auto shadow-2xl">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
            <tr>
              <th className="p-4">Code</th>
              <th className="p-4">Name</th>
              <th className="p-4">Group</th>
              <th className="p-4">Room & Roommate</th>
              <th className="p-4">Table Seat</th>
              <th className="p-4">Dietary</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="p-4 font-mono font-bold text-amber-400">{p.code}</td>
                <td className="p-4 font-bold text-white">{p.name}</td>
                <td className="p-4 text-slate-300">{p.group}</td>
                <td className="p-4">
                  <div className="font-semibold text-slate-200">{p.room}</div>
                  <div className="text-[10px] text-slate-400">With {p.roommate}</div>
                </td>
                <td className="p-4 font-mono text-emerald-300">{p.seat}</td>
                <td className="p-4 text-slate-300">{p.dietary}</td>
                <td className="p-4 text-right space-x-2">
                  <button
                    onClick={() => handleOpenEditModal(p)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900 text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-5 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">
                {editingParticipant ? 'Edit Participant' : 'Add New Participant'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-medium">Full Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Participant Code:</label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-amber-300 font-mono font-bold"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Group:</label>
                <select
                  value={formData.group}
                  onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                >
                  <option>Group 01</option>
                  <option>Group 02</option>
                  <option>Group 03</option>
                  <option>Group 04</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Room Number:</label>
                <input
                  type="text"
                  value={formData.room}
                  onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Roommate Name:</label>
                <input
                  type="text"
                  value={formData.roommate}
                  onChange={(e) => setFormData({ ...formData, roommate: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Table & Seat:</label>
                <input
                  type="text"
                  value={formData.seat}
                  onChange={(e) => setFormData({ ...formData, seat: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Dietary Note:</label>
                <input
                  type="text"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white"
                />
              </div>

              <div className="col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all"
                >
                  SAVE PARTICIPANT RECORD
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
