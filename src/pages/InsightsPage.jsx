import React, { useState } from 'react';
import { 
  Lightbulb, 
  Plus, 
  Send, 
  UserCheck, 
  EyeOff, 
  Filter, 
  Check, 
  X, 
  Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const InsightsPage = () => {
  const { insights, addInsight, schedule, currentParticipant } = useApp();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState(schedule[2]?.id || schedule[0]?.id);
  const [type, setType] = useState('Idea');
  const [content, setContent] = useState('');
  const [actionItem, setActionItem] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const insightTypes = ['Idea', 'Problem', 'Opportunity', 'Question', 'Action', 'Learning'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    addInsight({
      sessionId: selectedSessionId,
      type,
      content,
      actionItem,
      isAnonymous
    });

    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsFormOpen(false);
      setContent('');
      setActionItem('');
    }, 1200);
  };

  const filteredInsights = insights.filter(i => filterType === 'All' || i.type === filterType);

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            BOOTCAMP <span className="text-yellow-400">INSIGHTS</span>
          </h1>
          <p className="text-xs text-slate-400">Raise Your Flag & Capture High-Value Learnings</p>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="p-2.5 rounded-2xl bg-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 flex items-center gap-1.5 hover:scale-105 transition-transform"
        >
          <Plus className="w-4 h-4" />
          <span>SUBMIT INSIGHT</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        {['All', ...insightTypes].map((t) => (
          <button
            key={t}
            onClick={() => setFilterType(t)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              filterType === t
                ? 'bg-yellow-500 text-slate-950 border-yellow-500 font-bold shadow-md shadow-yellow-500/20'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Insights Feed */}
      <div className="space-y-3.5">
        {filteredInsights.length === 0 ? (
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
            <Lightbulb className="w-8 h-8 text-slate-600 mx-auto" />
            <h4 className="text-sm font-bold text-slate-300">No Insights Submitted Yet</h4>
            <p className="text-xs text-slate-500 italic font-mono">
              "Your next insight could become our next action."
            </p>
          </div>
        ) : (
          filteredInsights.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                  item.type === 'Idea' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                  item.type === 'Problem' ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' :
                  item.type === 'Opportunity' ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' :
                  'bg-blue-500/10 text-blue-400 border-blue-500/30'
                }`}>
                  {item.type}
                </span>
                <span className="text-[10px] font-mono text-slate-400">{item.timestamp}</span>
              </div>

              <p className="text-xs text-slate-100 font-medium leading-relaxed">
                "{item.content}"
              </p>

              {item.actionItem && (
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">SUGGESTED ACTION</span>
                  <p className="text-slate-300">{item.actionItem}</p>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  {item.isAnonymous ? (
                    <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                  ) : (
                    <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                  )}
                  <span>{item.participantName}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* SUBMIT INSIGHT FORM MODAL */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-5 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white text-base">Submit Session Insight</h3>
              </div>
              <button onClick={() => setIsFormOpen(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Insight Submitted!</h4>
                <p className="text-xs text-slate-400">Added to team playbook feed.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Related Session:</label>
                  <select
                    value={selectedSessionId}
                    onChange={(e) => setSelectedSessionId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  >
                    {schedule.map(s => (
                      <option key={s.id} value={s.id}>{s.title} ({s.startTime})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1">Insight Type:</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {insightTypes.map(t => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setType(t)}
                        className={`py-1.5 px-2 rounded-xl text-center font-bold border transition-all ${
                          type === t 
                            ? 'bg-amber-500 text-slate-950 border-amber-500' 
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1">Your Key Insight:</label>
                  <textarea
                    rows={3}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Describe your breakthrough idea, problem, or takeaway..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1">Suggested Action Item (Optional):</label>
                  <input
                    type="text"
                    value={actionItem}
                    onChange={(e) => setActionItem(e.target.value)}
                    placeholder="What action should be taken next?"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-0"
                    />
                    <span>Submit Anonymously</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all"
                >
                  SUBMIT TO PLAYBOOK
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
