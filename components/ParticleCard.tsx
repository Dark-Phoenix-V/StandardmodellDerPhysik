
import React from 'react';
import { Particle } from '../types';

interface ParticleCardProps {
  particle: Particle;
  onClick?: (p: Particle) => void;
  compact?: boolean;
}

export const ParticleCard: React.FC<ParticleCardProps> = ({ particle, onClick, compact }) => {
  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'quark': return 'Quark';
      case 'lepton': return 'Lepton';
      case 'boson': return 'Eichboson';
      case 'higgs': return 'Skalarboson';
      default: return type;
    }
  };

  const getColors = (type: string) => {
    switch(type) {
      case 'quark': return { border: 'border-purple-300', bg: 'bg-white', circle: 'bg-purple-500', text: 'text-purple-600', shadow: 'shadow-purple-50' };
      case 'lepton': return { border: 'border-green-300', bg: 'bg-white', circle: 'bg-green-500', text: 'text-green-600', shadow: 'shadow-green-50' };
      case 'boson': return { border: 'border-red-300', bg: 'bg-white', circle: 'bg-red-500', text: 'text-red-600', shadow: 'shadow-red-50' };
      case 'higgs': return { border: 'border-amber-200', bg: 'bg-white', circle: 'bg-amber-400', text: 'text-amber-600', shadow: 'shadow-amber-50' };
      default: return { border: 'border-gray-200', bg: 'bg-white', circle: 'bg-gray-500', text: 'text-gray-600', shadow: 'shadow-gray-50' };
    }
  };

  const colors = getColors(particle.type);

  // Hilfsfunktion zum Parsen der Masse für die Kompaktansicht (z.B. <1.1 oder 173)
  const getCompactMass = (massString: string) => {
    const trimmed = massString.trim();
    if (trimmed.startsWith('<')) {
        const parts = trimmed.split(' ');
        if (parts.length >= 2) return `${parts[0]}${parts[1]}`;
    }
    return trimmed.split(' ')[0];
  };

  // Hilfsfunktion zum Extrahieren der Einheit
  const getCompactUnit = (massString: string) => {
    const parts = massString.trim().split(' ');
    // Fall für Neutrinos: "< 1.1 eV/c²" -> Einheit ist dritter Teil
    if (massString.includes('<') && parts.length >= 3) return parts[2];
    // Fall für normale: "2.2 MeV/c²" -> Einheit ist zweiter Teil
    if (parts.length >= 2) return parts[1];
    return '';
  };

  if (compact) {
    return (
      <button 
        onClick={() => onClick?.(particle)}
        className={`relative w-full aspect-square min-w-[90px] max-w-[110px] flex flex-col items-center p-1.5 rounded-xl border-[2px] ${colors.border} ${colors.bg} ${colors.shadow} shadow-sm hover:shadow-md hover:scale-[1.02] transition-all active:scale-95 group overflow-hidden`}
      >
        {/* Oben Links: Masse und Quantenzahlen */}
        <div className="absolute top-1 left-1.5 flex flex-col items-start text-[7px] sm:text-[8px] font-mono text-gray-400 leading-none z-10 text-left">
          <span className="font-bold text-gray-500 mb-0.5">{getCompactMass(particle.mass)}</span>
          <div className="flex flex-col">
            <span className="flex items-center gap-0.5"><span className="opacity-40">q</span><span className="text-gray-600 font-bold">{particle.charge}</span></span>
            <span className="flex items-center gap-0.5"><span className="opacity-40">s</span><span className="text-gray-600 font-bold">{particle.spin}</span></span>
          </div>
        </div>

        {/* Unten Rechts: Einheit der Masse */}
        <div className="absolute bottom-1 right-1.5 text-[6px] sm:text-[7px] font-mono text-gray-400 font-bold leading-none z-10 opacity-70">
            {getCompactUnit(particle.mass)}
        </div>

        {/* Zentriertes Symbol */}
        <div className="flex-grow flex items-center justify-center w-full">
           <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center ${colors.circle} text-white shadow-sm relative z-0 transform group-hover:scale-105 transition-transform`}>
              <span className="text-lg sm:text-xl font-black">{particle.symbol}</span>
           </div>
        </div>

        {/* Name am unteren Rand */}
        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-tighter text-gray-700 leading-none pb-0.5">{particle.name}</span>
      </button>
    );
  }

  return (
    <div className={`bg-gray-900 border-4 ${colors.border} p-5 rounded-3xl shadow-2xl flex flex-col relative overflow-hidden text-left h-full`}>
      <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 blur-3xl ${colors.circle}`}></div>
      
      <div className="flex justify-between items-center mb-4 relative z-10">
        <div>
          <h3 className="text-2xl font-black text-white leading-none">{particle.name}</h3>
          <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${colors.text.replace('600', '400')}`}>
            {getTypeLabel(particle.type)}
          </span>
        </div>
        <div className={`text-5xl font-mono font-black ${colors.text.replace('600', '400')}`}>
          {particle.symbol}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4 relative z-10 text-[10px]">
        <div className="bg-white/5 p-2 rounded-xl border border-white/10">
          <p className="text-gray-500 uppercase font-black tracking-widest mb-0.5">Masse</p>
          <p className="font-mono text-gray-100 font-bold">{particle.mass}</p>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/10">
          <p className="text-gray-500 uppercase font-black tracking-widest mb-0.5">Ladung</p>
          <p className="font-mono text-gray-100 font-bold">{particle.charge}</p>
        </div>
      </div>

      <div className="space-y-4 flex-grow relative z-10">
        <div className="p-3 bg-gray-950 rounded-xl border border-white/5">
          <h4 className="text-[9px] uppercase font-black tracking-widest text-blue-400 mb-1">Physikalischer Hintergrund</h4>
          <p className="text-gray-400 text-xs leading-relaxed">{particle.description}</p>
        </div>
        <div className="px-1">
          <h4 className="text-[9px] uppercase font-black tracking-widest text-green-400 mb-1">Rolle im Standardmodell</h4>
          <p className="text-gray-200 text-xs leading-relaxed font-bold italic">"{particle.role}"</p>
        </div>
      </div>
    </div>
  );
};
