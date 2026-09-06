import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  QrCode, 
  UserCheck, 
  Clock, 
  MapPin, 
  ArrowRight, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';

export const AttendanceLanderPage = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const { schedule, currentParticipant, recordCheckIn, attendanceRecords } = useApp();

  const sessionObj = schedule.find(s => s.id === sessionId) || schedule[0];
  const targetSessionId = sessionObj ? sessionObj.id : 'session-01';

  const [inputCode, setInputCode] = useState(currentParticipant?.code || 'ARIE01');
  const [step, setStep] = useState('identify'); // identify -> confirm -> success
  const [confirmedParticipant, setConfirmedParticipant] = useState(currentParticipant);
  const [errorMsg, setErrorMsg] = useState('');
  const [checkInResult, setCheckInResult] = useState(null);

  useEffect(() => {
    // Check if current participant already checked in
    const existing = attendanceRecords.find(r => r.sessionId === targetSessionId && r.participantCode === currentParticipant?.code);
    if (existing) {
      setStep('success');
      setCheckInResult({ alreadyCheckedIn: true, record: existing, participant: currentParticipant });
    }
  }, [targetSessionId, attendanceRecords, currentParticipant]);

  const handleIdentifySubmit = (e) => {
    e.preventDefault();
    const res = recordCheckIn(targetSessionId, inputCode);
    if (res.success) {
      setConfirmedParticipant(res.participant);
      if (res.alreadyCheckedIn) {
        setCheckInResult(res);
        setStep('success');
      } else {
        setStep('confirm');
      }
      setErrorMsg('');
    } else {
      setErrorMsg(res.message);
    }
  };

  const handleFinalCheckIn = () => {
    const res = recordCheckIn(targetSessionId, inputCode);
    if (res.success) {
      setCheckInResult(res);
      setStep('success');
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback if canvas-confetti issue
      }
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 max-w-md mx-auto sm:max-w-lg space-y-6">
      {/* Session Title Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold uppercase">
          <QrCode className="w-3.5 h-3.5" />
          <span>ATTENDANCE CHECK-IN</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white font-heading leading-tight">
          {sessionObj.title}
        </h1>
        <div className="flex items-center justify-center gap-3 text-xs text-slate-300 font-mono">
          <span className="text-amber-300 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {sessionObj.startTime} – {sessionObj.endTime}
          </span>
          <span>•</span>
          <span className="text-slate-400 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            {sessionObj.location}
          </span>
        </div>
      </div>

      {/* STEP 1: IDENTIFY PARTICIPANT */}
      {step === 'identify' && (
        <div className="w-full rounded-3xl p-6 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-5">
          <div className="text-center space-y-1">
            <h3 className="text-base font-bold text-white">Who's checking in?</h3>
            <p className="text-xs text-slate-400">Enter your unique Participant Code to record attendance.</p>
          </div>

          <form onSubmit={handleIdentifySubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Participant Code:</label>
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                placeholder="e.g. ARIE01"
                className="w-full text-center text-lg font-mono font-bold tracking-wider py-3 px-4 rounded-2xl bg-slate-950 border border-slate-700 text-amber-300 focus:outline-none focus:border-amber-500"
              />
              {errorMsg && <p className="text-xs text-rose-400 mt-1.5 text-center font-medium">{errorMsg}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>CONTINUE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* STEP 2: CONFIRM ATTENDANCE */}
      {step === 'confirm' && confirmedParticipant && (
        <div className="w-full rounded-3xl p-6 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-5 animate-in fade-in duration-200">
          <div className="text-center space-y-1">
            <h3 className="text-base font-bold text-white">Confirm Attendance?</h3>
            <p className="text-xs text-slate-400">Verify your details before submitting.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-center">
            <span className="text-[10px] font-mono text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/30">
              {confirmedParticipant.code}
            </span>
            <h4 className="text-lg font-extrabold text-white">{confirmedParticipant.name}</h4>
            <p className="text-xs text-slate-400">{confirmedParticipant.group} • {confirmedParticipant.room}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setStep('identify')}
              className="flex-1 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 transition-all"
            >
              CHANGE CODE
            </button>
            <button
              onClick={handleFinalCheckIn}
              className="flex-1 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all"
            >
              CHECK IN
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: SUCCESS STATE */}
      {step === 'success' && (
        <div className="w-full rounded-3xl p-6 bg-slate-900/90 border border-emerald-500/40 shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <h3 className="text-xl font-black text-white">✓ You're Checked In</h3>
            <p className="text-xs text-emerald-300 mt-1 font-semibold">Attendance recorded successfully.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-400">Participant:</span>
              <span className="font-bold text-white">{currentParticipant?.name} ({currentParticipant?.code})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Session:</span>
              <span className="font-bold text-amber-300">{sessionObj.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Timestamp:</span>
              <span className="font-mono text-slate-300">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all"
          >
            RETURN TO HOMEPAGE
          </button>
        </div>
      )}
    </div>
  );
};
