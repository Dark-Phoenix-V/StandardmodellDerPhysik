
import React, { useState } from 'react';
import { PARTICLES } from '../constants';
import { ParticleCard } from './ParticleCard';
import { Particle } from '../types';

export const ModelGrid: React.FC = () => {
  const [selectedParticle, setSelectedParticle] = useState<Particle | null>(null);

  const getP = (id: string) => PARTICLES.find(p => p.id === id)!;

  return (
    <div className="py-4 max-w-[1100px] mx-auto px-2 select-none">
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
        
        <div className="w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 inline-block">
            
            <div className="grid grid-cols-[30px_repeat(3,minmax(100px,1fr))_minmax(100px,1fr)_minmax(100px,1fr)] gap-1 mb-1">
              <div className="col-start-2 col-span-3 text-center py-1 bg-blue-50 rounded-t-lg border-x border-t border-blue-100">
                <span className="text-[9px] font-black text-blue-800 uppercase tracking-tighter">Fermionen (Materie)</span>
              </div>
              <div className="col-start-5 col-span-2 text-center py-1 bg-red-50 rounded-t-lg border-x border-t border-red-100">
                <span className="text-[9px] font-black text-red-800 uppercase tracking-tighter">Bosonen (Kräfte)</span>
              </div>
              
              <div className="col-start-1"></div>
              <div className="text-center text-gray-400 font-serif italic text-sm">I</div>
              <div className="text-center text-gray-400 font-serif italic text-sm">II</div>
              <div className="text-center text-gray-400 font-serif italic text-sm">III</div>
              <div className="col-span-2"></div>
            </div>

            <div className="grid grid-cols-[30px_repeat(3,minmax(100px,1fr))_minmax(100px,1fr)_minmax(100px,1fr)] gap-1.5">
              
              <div className="row-start-1 row-span-2 flex items-center justify-center">
                <div className="-rotate-90 whitespace-nowrap uppercase tracking-widest text-purple-600 font-black text-[10px] w-full text-center">
                  Quarks
                </div>
              </div>

              <div className="row-start-1 col-start-2"><ParticleCard particle={getP('up')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-1 col-start-3"><ParticleCard particle={getP('charm')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-1 col-start-4"><ParticleCard particle={getP('top')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-1 col-start-5"><ParticleCard particle={getP('gluon')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-1 col-start-6"><ParticleCard particle={getP('higgs')} compact onClick={setSelectedParticle} /></div>

              <div className="row-start-2 col-start-2"><ParticleCard particle={getP('down')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-2 col-start-3"><ParticleCard particle={getP('strange')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-2 col-start-4"><ParticleCard particle={getP('bottom')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-2 col-start-5"><ParticleCard particle={getP('photon')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-2 col-start-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-[8px] text-gray-300 font-bold uppercase rotate-45">Skalar</span>
              </div>

              <div className="row-start-3 row-span-2 flex items-center justify-center">
                <div className="-rotate-90 whitespace-nowrap uppercase tracking-widest text-green-600 font-black text-[10px] w-full text-center">
                  Leptonen
                </div>
              </div>

              <div className="row-start-3 col-start-2"><ParticleCard particle={getP('electron')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-3 col-start-3"><ParticleCard particle={getP('muon')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-3 col-start-4"><ParticleCard particle={getP('tau')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-3 col-start-5"><ParticleCard particle={getP('z-boson')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-3 col-start-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-[8px] text-gray-300 font-bold uppercase rotate-45">Vektor</span>
              </div>

              <div className="row-start-4 col-start-2"><ParticleCard particle={getP('electron-neutrino')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-4 col-start-3"><ParticleCard particle={getP('muon-neutrino')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-4 col-start-4"><ParticleCard particle={getP('tau-neutrino')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-4 col-start-5"><ParticleCard particle={getP('w-boson')} compact onClick={setSelectedParticle} /></div>
              <div className="row-start-4 col-start-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-[8px] text-gray-300 font-bold uppercase rotate-45">Eich</span>
              </div>

            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 justify-center">
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">Oben links: Masse</span></div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">q: Ladung</span></div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">s: Spin</span></div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div><span className="text-[8px] font-bold text-blue-500 uppercase tracking-tighter">Unten rechts: Einheit</span></div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[320px] shrink-0">
          {selectedParticle ? (
            <div className="animate-in fade-in zoom-in duration-200">
              <ParticleCard particle={selectedParticle} />
              <button 
                onClick={() => setSelectedParticle(null)}
                className="mt-4 w-full py-3 text-[10px] font-black text-gray-400 hover:text-white uppercase tracking-widest border border-gray-800 rounded-xl hover:bg-gray-900 transition-all active:scale-[0.98]"
              >
                Auswahl aufheben
              </button>
            </div>
          ) : (
            <div className="h-full min-h-[400px] border border-gray-800/50 rounded-3xl flex flex-col items-center justify-center p-8 text-center bg-gray-900/10">
              <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Detail-Ansicht</h4>
              <p className="text-xs text-gray-600 leading-relaxed max-w-[180px]">Wähle ein Teilchen im Tableau aus, um die Quantenzahlen und physikalischen Rollen zu erkunden.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
