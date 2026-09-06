import React, { useState } from 'react';
import { 
  Lightbulb, 
  Download, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  User 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminInsights = () => {
  const { insights } = useApp();
  const [filterType, setFilterType] = useState('All');

  const filtered = insights.filter(i => filterType === 'All' || i.type === filterType);

  const handleExportPlaybook = () => {
    const header = "==================================================\n" +
                   "SALES MASTERY BOOTCAMP OFFICIAL PLAYBOOK\n" +
                   "Kalyana Resort 2026\n" +
                   "==================================================\n\n";

    const content = insights.map((i, idx) => (
      `[INSIGHT #${idx + 1}] (${i.type})\n` +
      `Submitted By: ${i.participantName}\n` +
      `Insight: ${i.content}\n` +
      `Suggested Action: ${i.actionItem || 'None'}\n` +
      `Timestamp: ${i.timestamp}\n` +
      `--------------------------------------------------\n`
    )).join('\n');

    const fullText = header + content;
    const element = document.createElement("a");
    const file = new Blob([fullText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Sales_Mastery_Bootcamp_Playbook.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            PLAYBOOK & <span className="text-amber-400">INSIGHTS REVIEW</span>
          </h1>
          <p className="text-xs text-slate-400">Synthesize Participant Breakthroughs into Official Sales Playbook</p>
        </div>
        <button
          onClick={handleExportPlaybook}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all w-fit"
        >
          <Download className="w-4 h-4" />
          <span>EXPORT PLAYBOOK REPORT</span>
        </button>
      </div>

      {/* Type Filters */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        {['All', 'Idea', 'Problem', 'Opportunity', 'Question', 'Action', 'Learning'].map(t => (
          <button
            key={t}
            onClick={() => setFilterType(t)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              filterType === t
                ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(i => (
          <div key={i.id} className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                {i.type}
              </span>
              <span className="text-[10px] font-mono text-slate-400">{i.timestamp}</span>
            </div>

            <p className="text-xs text-slate-100 font-medium leading-relaxed">
              "{i.content}"
            </p>

            {i.actionItem && (
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">ACTION ITEM</span>
                <p className="text-slate-300">{i.actionItem}</p>
              </div>
            )}

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Author: <strong className="text-white">{i.participantName}</strong></span>
              <span className="text-emerald-400 font-bold">✓ Approved for Playbook</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
