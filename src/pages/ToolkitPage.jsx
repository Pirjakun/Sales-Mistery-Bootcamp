import React, { useState } from 'react';
import { 
  PenTool, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Check, 
  Lightbulb, 
  Sparkles, 
  FileText 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ToolkitPage = () => {
  const { toolkitGuide } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="space-y-6 pb-24 max-w-md mx-auto sm:max-w-xl">
      {/* Header */}
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
            TRAINING <span className="text-purple-400">TOOLKIT</span>
          </h1>
          <p className="text-xs text-slate-400">4-Color Pen System & Workspace Guide</p>
        </div>
        <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
          <PenTool className="w-5 h-5" />
        </div>
      </div>

      {/* Video Explainer Card */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
        <video
          ref={videoRef}
          src={toolkitGuide.videoExplainerUrl}
          className="w-full h-52 object-cover"
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-between p-4">
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-500 text-white w-fit">
            EXPLAINER VIDEO
          </span>

          <div className="flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="p-3 rounded-2xl bg-purple-500 text-white font-bold text-xs shadow-lg flex items-center gap-2 hover:bg-purple-400 transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              <span>{isPlaying ? 'PAUSE TUTORIAL' : 'HOW TO USE YOUR TOOLKIT'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4-COLOR PEN SYSTEM breakdown */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">4-Color Pen System</h3>
        </div>
        <p className="text-xs text-slate-400">Color-code your physical notes during training for instant visual synthesis.</p>

        <div className="grid grid-cols-1 gap-2.5 pt-1">
          {toolkitGuide.penSystem.map((item, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3"
            >
              <div 
                className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-bold text-xs text-white shadow-md"
                style={{ backgroundColor: item.code }}
              >
                {item.color[0]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.color}</h4>
                  <span className="text-[11px] font-semibold text-slate-300">• {item.label}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Physical Workspace Toolkit Items */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <FileText className="w-4 h-4 text-purple-400" />
          <span>Provided Workspace Toolkit</span>
        </h3>

        <div className="space-y-2 text-xs">
          {toolkitGuide.physicalItems.map((pi, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
              <h4 className="font-bold text-slate-200 mb-0.5">{pi.name}</h4>
              <p className="text-slate-400">{pi.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
