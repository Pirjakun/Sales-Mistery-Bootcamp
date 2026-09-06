import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Coffee, 
  Utensils, 
  TreePine, 
  ShoppingBag, 
  Camera 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ExplorePage = () => {
  const { destinations } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Coffee & Local Eats', 'Nature & Adventure', 'Attraction', 'Food & Souvenirs'];

  const filtered = destinations.filter(d => {
    return selectedCategory === 'All' || d.category === selectedCategory;
  });

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            EXPLORE <span className="text-emerald-400">KALYANA</span>
          </h1>
          <p className="text-xs text-slate-400">Mini Destination Guide Around Kaliurang</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <Compass className="w-5 h-5" />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategory === cat
                ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-md shadow-emerald-500/20 font-bold'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Destination Cards List */}
      <div className="space-y-4">
        {filtered.map((dest) => (
          <div 
            key={dest.id}
            className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl hover:border-slate-700 transition-all group"
          >
            <div className="relative h-44 overflow-hidden">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 uppercase">
                {dest.category}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">
                  {dest.name}
                </h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{dest.description}</p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{dest.distance}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{dest.travelTime}</span>
                  </div>
                </div>

                <a
                  href={dest.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-[11px] flex items-center gap-1 border border-slate-700 transition-all"
                >
                  <span>MAPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
