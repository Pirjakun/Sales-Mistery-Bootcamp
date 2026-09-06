import React from 'react';
import { Grid, User, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminSeating = () => {
  const { participants } = useApp();

  const tables = [
    { name: "Table 01", seats: ["Table 01 - Seat A01", "Table 01 - Seat A02", "Table 01 - Seat A03", "Table 01 - Seat A04", "Table 01 - Seat A05"] },
    { name: "Table 02", seats: ["Table 02 - Seat B01", "Table 02 - Seat B02", "Table 02 - Seat B03", "Table 02 - Seat B04", "Table 02 - Seat B05"] },
    { name: "Table 03", seats: ["Table 03 - Seat C01", "Table 03 - Seat C02", "Table 03 - Seat C03", "Table 03 - Seat C04", "Table 03 - Seat C05"] },
    { name: "Table 04", seats: ["Table 04 - Seat D01", "Table 04 - Seat D02", "Table 04 - Seat D03", "Table 04 - Seat D04", "Table 04 - Seat D05"] }
  ];

  const getOccupant = (seatCode) => {
    return participants.find(p => p.seat === seatCode);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            TABLE <span className="text-amber-400">SEATING CHART</span>
          </h1>
          <p className="text-xs text-slate-400">Visual Ballroom Seating Grid for 20 Bootcamp Participants</p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 font-bold text-emerald-400">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            Occupied ({participants.length})
          </span>
        </div>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tables.map((table, idx) => (
          <div key={idx} className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Grid className="w-4 h-4 text-amber-400" />
                <span>{table.name}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">5 Seats</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {table.seats.map((seatCode) => {
                const occupant = getOccupant(seatCode);
                return (
                  <div
                    key={seatCode}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                      occupant
                        ? 'bg-slate-950 border-emerald-500/30'
                        : 'bg-slate-950/60 border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border font-mono text-xs font-bold ${
                        occupant ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {seatCode.split('-')[1].trim()}
                      </div>
                      <div>
                        {occupant ? (
                          <>
                            <h4 className="text-xs font-bold text-white">{occupant.name}</h4>
                            <p className="text-[10px] text-slate-400">{occupant.group} • Code: {occupant.code}</p>
                          </>
                        ) : (
                          <span className="text-xs text-slate-500 italic">Available Seat</span>
                        )}
                      </div>
                    </div>

                    {occupant && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
