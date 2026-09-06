import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  QrCode, 
  Maximize2, 
  Download, 
  Copy, 
  Check, 
  Plus, 
  FileSpreadsheet, 
  Clock, 
  X, 
  Users 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminAttendance = () => {
  const { 
    schedule, 
    participants, 
    attendanceSessions, 
    attendanceRecords, 
    createAttendanceSession 
  } = useApp();

  const [selectedSessionId, setSelectedSessionId] = useState(schedule[2]?.id || schedule[0]?.id);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const activeSessionObj = schedule.find(s => s.id === selectedSessionId) || schedule[0];
  const activeAttSession = attendanceSessions.find(a => a.sessionId === selectedSessionId) || {
    id: `att-${selectedSessionId}`,
    sessionId: selectedSessionId,
    title: activeSessionObj.title,
    date: activeSessionObj.date,
    time: activeSessionObj.startTime
  };

  const attendanceUrl = `${window.location.origin}/attendance/${selectedSessionId}`;

  const handleGenerateOrCreate = () => {
    createAttendanceSession(selectedSessionId);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(attendanceUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const getAttendanceStatusForParticipant = (sessionId, participantId) => {
    const record = attendanceRecords.find(r => r.sessionId === sessionId && r.participantId === participantId);
    return record ? record.status : 'Absent';
  };

  const handleExportCSV = () => {
    const headers = ['Participant Code', 'Name', 'Group', ...attendanceSessions.map(s => s.title)];
    const rows = participants.map(p => {
      const statuses = attendanceSessions.map(s => getAttendanceStatusForParticipant(s.sessionId, p.id));
      return [p.code, p.name, p.group, ...statuses];
    });

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Sales_Mastery_Attendance_Matrix.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            ATTENDANCE & <span className="text-amber-400">QR GENERATOR</span>
          </h1>
          <p className="text-xs text-slate-400">Session Specific Attendance QR & Real-Time Participant Matrix</p>
        </div>
        <button
          onClick={handleExportCSV}
          className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all w-fit"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>EXPORT ATTENDANCE CSV</span>
        </button>
      </div>

      {/* 1. QR GENERATOR SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls Card */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <QrCode className="w-4 h-4 text-amber-400" />
            <span>Attendance Session Controls</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-300 mb-1.5 font-medium">Select Training Session:</label>
              <select
                value={selectedSessionId}
                onChange={(e) => setSelectedSessionId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 font-medium"
              >
                {schedule.map(s => (
                  <option key={s.id} value={s.id}>
                    Day {s.day} • {s.startTime} - {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">TARGET SESSION URL</span>
              <p className="font-mono text-slate-300 text-[11px] truncate">{attendanceUrl}</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={handleGenerateOrCreate}
                className="flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>GENERATE QR</span>
              </button>

              <button
                onClick={() => setIsFullscreen(true)}
                className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Maximize2 className="w-4 h-4 text-sky-400" />
                <span>FULLSCREEN</span>
              </button>

              <button
                onClick={handleCopyUrl}
                className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedLink ? 'COPIED' : 'COPY URL'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* QR Preview Card */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center space-y-4 shadow-xl">
          <div className="p-4 bg-white rounded-2xl shadow-2xl border-4 border-slate-800">
            <QRCodeSVG value={attendanceUrl} size={180} level="H" />
          </div>

          <div>
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">SCAN TO CHECK IN</span>
            <h4 className="text-base font-bold text-white mt-0.5">{activeSessionObj.title}</h4>
            <p className="text-xs text-slate-400 font-mono">{activeSessionObj.date} • {activeSessionObj.startTime}</p>
          </div>
        </div>
      </div>

      {/* 2. PARTICIPANT ATTENDANCE MATRIX */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            <span>Participant Attendance Matrix</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            {attendanceRecords.length} Total Check-Ins Recorded
          </span>
        </div>

        <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
              <tr>
                <th className="p-4">Code</th>
                <th className="p-4">Participant Name</th>
                <th className="p-4">Group</th>
                {attendanceSessions.map(att => (
                  <th key={att.id} className="p-4 text-center">{att.title.split(':')[0]}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {participants.map(p => (
                <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-mono font-bold text-amber-400">{p.code}</td>
                  <td className="p-4 font-bold text-white">{p.name}</td>
                  <td className="p-4 text-slate-400">{p.group}</td>
                  {attendanceSessions.map(att => {
                    const st = getAttendanceStatusForParticipant(att.sessionId, p.id);
                    return (
                      <td key={att.id} className="p-4 text-center font-mono">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                          st === 'Present' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                          st === 'Late' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                          'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}>
                          {st}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FULLSCREEN PROJECTOR DISPLAY MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-8 animate-in zoom-in-95 duration-200">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center space-y-6 max-w-2xl w-full">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1 rounded-full border border-amber-500/30">
                SALES MASTERY BOOTCAMP — KALYANA RESORT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
                {activeSessionObj.title}
              </h2>
              <p className="text-lg text-slate-300 font-mono">
                {activeSessionObj.date} • {activeSessionObj.startTime} AM
              </p>
            </div>

            {/* Giant QR for Projector Screen */}
            <div className="p-8 bg-white rounded-3xl shadow-2xl border-8 border-slate-800 w-fit mx-auto">
              <QRCodeSVG value={attendanceUrl} size={320} level="H" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-emerald-400">Scan QR to check in now</h3>
              <p className="text-sm text-slate-400">Point your smartphone camera at the screen</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
