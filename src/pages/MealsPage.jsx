import React, { useState } from 'react';
import { 
  Utensils, 
  Clock, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  Truck, 
  Coffee 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MealsPage = () => {
  const { meals } = useApp();
  const [selectedDay, setSelectedDay] = useState(2);

  const activeMealPlan = meals.find(m => m.day === selectedDay);

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            MEALS & <span className="text-orange-400">DINING</span>
          </h1>
          <p className="text-xs text-slate-400">3-Day Culinary Guide & Menus</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
          <Utensils className="w-5 h-5" />
        </div>
      </div>

      {/* Day Selector */}
      <div className="flex rounded-2xl bg-slate-900/90 p-1.5 border border-slate-800">
        {[1, 2, 3].map((dayNum) => (
          <button
            key={dayNum}
            onClick={() => setSelectedDay(dayNum)}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all text-center ${
              selectedDay === dayNum
                ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20 scale-[1.02]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DAY {dayNum}
          </button>
        ))}
      </div>

      {/* Meals List */}
      <div className="space-y-4">
        {activeMealPlan && activeMealPlan.meals.map((meal, idx) => (
          <div 
            key={idx}
            className={`rounded-3xl p-5 border space-y-3 shadow-xl transition-all ${
              meal.isRaminten 
                ? 'bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border-amber-500/50' 
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            {meal.isRaminten && (
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold font-mono tracking-wider uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SPECIAL EXPERIENCE</span>
              </div>
            )}

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-extrabold text-white leading-snug">{meal.type}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <div className="flex items-center gap-1 text-amber-300 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{meal.time}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{meal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">MENU SPREAD</span>
              <p className="text-slate-200 leading-relaxed">{meal.menu}</p>
            </div>

            {meal.notes && (
              <p className="text-xs text-slate-400 italic">Note: {meal.notes}</p>
            )}

            {/* RAMINTEN SPECIAL CTA */}
            {meal.isRaminten && (
              <div className="pt-2 border-t border-amber-500/30 space-y-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1 text-amber-200">
                  <div className="flex items-center gap-1.5 font-bold text-amber-400">
                    <Truck className="w-4 h-4" />
                    <span>Shuttle Bus Departure: 18:30 Sharp</span>
                  </div>
                  <p className="opacity-90">Buses depart from Kalyana Main Lobby. Please gather at 18:20.</p>
                </div>

                <a
                  href={meal.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <span>EXTERNAL FOOD ORDERING LINK</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
