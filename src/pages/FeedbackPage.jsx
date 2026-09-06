import React, { useState } from 'react';
import { 
  MessageSquare, 
  Star, 
  Send, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FeedbackPage = () => {
  const { schedule, feedback, addFeedback, currentParticipant } = useApp();

  const [selectedSessionId, setSelectedSessionId] = useState(schedule[2]?.id || schedule[0]?.id);
  const [rating, setRating] = useState(5);
  const [learnings, setLearnings] = useState('');
  const [improvements, setImprovements] = useState('');
  const [actionTaking, setActionTaking] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    addFeedback({
      sessionId: selectedSessionId,
      rating,
      learnings,
      improvements,
      actionTaking
    });

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setLearnings('');
      setImprovements('');
      setActionTaking('');
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            SESSION <span className="text-teal-400">FEEDBACK</span>
          </h1>
          <p className="text-xs text-slate-400">How Was This Session? Rate & Reflect</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
          <MessageSquare className="w-5 h-5" />
        </div>
      </div>

      {/* Feedback Form Card */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-4">
        {submittedSuccess ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">Thank You for Your Feedback!</h3>
            <p className="text-xs text-slate-400">Your reflections help shape the Sales Mastery Playbook.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-medium text-slate-300 mb-1">Select Session:</label>
              <select
                value={selectedSessionId}
                onChange={(e) => setSelectedSessionId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-teal-500 font-medium"
              >
                {schedule.map(s => (
                  <option key={s.id} value={s.id}>{s.title} ({s.startTime})</option>
                ))}
              </select>
            </div>

            {/* 1-5 Star Rating */}
            <div>
              <label className="block font-medium text-slate-300 mb-1.5 text-center">Session Rating:</label>
              <div className="flex items-center justify-center gap-2 py-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1.5 transition-transform hover:scale-125 focus:outline-none"
                  >
                    <Star className={`w-7 h-7 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">1. What did you learn?</label>
              <textarea
                rows={2}
                value={learnings}
                onChange={(e) => setLearnings(e.target.value)}
                placeholder="Key takeaways or frameworks..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">2. What should we improve?</label>
              <textarea
                rows={2}
                value={improvements}
                onChange={(e) => setImprovements(e.target.value)}
                placeholder="Pacing, templates, exercises..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">3. What action will you take?</label>
              <textarea
                rows={2}
                value={actionTaking}
                onChange={(e) => setActionTaking(e.target.value)}
                placeholder="Specific 30-day implementation commitment..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>SUBMIT FEEDBACK</span>
            </button>
          </form>
        )}
      </div>

      {/* Past Submitted Feedbacks */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Your Submitted Feedback</h3>
        {feedback.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No feedback submitted yet.</p>
        ) : (
          feedback.map((fb) => (
            <div key={fb.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  {[...Array(fb.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-200"><strong>Learned:</strong> {fb.learnings}</p>
              <p className="text-slate-300"><strong>Action:</strong> {fb.actionTaking}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
