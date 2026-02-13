
import React, { useState } from 'react';
import { View } from './types';
import { Quiz } from './components/Quiz';
import { ModelGrid } from './components/ModelGrid';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('intro');

  const NavItem: React.FC<{ view: View; label: string }> = ({ view, label }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${
        currentView === view 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
          : 'text-gray-400 hover:text-white hover:bg-gray-800'
      }`}
    >
      {label}
    </button>
  );

  const ExplanationCard: React.FC<{ title: string; color: string; children: React.ReactNode }> = ({ title, color, children }) => (
    <div className={`bg-gray-900/50 p-6 rounded-2xl border ${color} shadow-inner h-full`}>
      <h3 className={`text-xl font-black mb-3 ${color.replace('border', 'text').replace('-500/20', '-400')}`}>{title}</h3>
      <div className="text-gray-400 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('intro')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">μ</div>
            <h1 className="text-xl font-bold tracking-tight">Teilchen-<span className="text-blue-500">Akademie</span></h1>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavItem view="model" label="Das Modell" />
            <NavItem view="quiz" label="Quiz" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 w-full pb-20">
        <div className={currentView === 'intro' ? '' : 'hidden'}>
          <div className="py-20 text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent leading-tight">
              Die Bausteine der <br /> Wirklichkeit.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Willkommen in der kleinsten Dimension. Erfahre, wie aus winzigen Quantenfeldern unsere gesamte Welt entsteht.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setCurrentView('model')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-blue-900/30 active:scale-95"
              >
                Studium beginnen
              </button>
              <button 
                onClick={() => setCurrentView('quiz')}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95 border border-gray-700"
              >
                Wissen testen
              </button>
            </div>
          </div>
        </div>

        <div className={currentView === 'model' ? '' : 'hidden'}>
          <div className="py-12 space-y-16">
            <section>
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">Das Standardmodell im Überblick</h2>
                <p className="text-gray-400 italic max-w-3xl mx-auto">
                  Alle fundamentalen Teilchen und ihre Wechselwirkungen in einer einzigen, interaktiven Ansicht. Klicke auf ein Teilchen, um seine Details zu enthüllen.
                </p>
              </div>
              <ModelGrid />
            </section>
            
            <section>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Die Teilchen-Familien</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Jedes Teilchen gehört zu einer Gruppe mit spezifischen Eigenschaften, die sein Verhalten im Universum bestimmen.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <ExplanationCard title="Quarks: Gebundene Bausteine" color="border-purple-500/20">
                  <p>Quarks sind die fundamentalen Bausteine der Materie, aus der Atomkerne bestehen. Ihre einzigartige Eigenschaft ist, dass sie die <strong>starke Kernkraft</strong> spüren. Diese Kraft ist so immens, dass Quarks niemals isoliert, sondern immer in Gruppen gebunden vorkommen – ein Phänomen namens <strong>Confinement</strong>.</p>
                  <p>Sie kombinieren sich zu Teilchen, die man <strong>Hadronen</strong> nennt. Die bekanntesten sind <strong>Baryonen</strong> (aus 3 Quarks), wie das Proton (Up, Up, Down) und das Neutron (Up, Down, Down), sowie <strong>Mesonen</strong> (aus 1 Quark und 1 Antiquark).</p>
                </ExplanationCard>
                 <ExplanationCard title="Leptonen: Freie Einzelgänger" color="border-green-500/20">
                   <p>Leptonen sind die zweite Klasse von Materieteilchen. Im Gegensatz zu Quarks spüren sie die starke Kernkraft nicht und können daher als freie, einzelne Teilchen existieren. Das bekannteste Lepton ist das <strong>Elektron</strong>, das die Hülle von Atomen bildet und für Elektrizität verantwortlich ist.</p>
                   <p>Es gibt drei Generationen von Leptonen, wobei jede ein schwereres, instabiles, geladenes Teilchen (Myon, Tauon) und ein fast masseloses, elektrisch neutrales <strong>Neutrino</strong> enthält. Neutrinos interagieren extrem schwach und durchdringen Materie fast ungehindert.</p>
                </ExplanationCard>
                 <ExplanationCard title="Eichbosonen: Boten der Kräfte" color="border-red-500/20">
                  <p>Diese Teilchen sind keine Materie, sondern die Vermittler der fundamentalen Naturkräfte. Man kann sie sich als "Boten" vorstellen, die zwischen Materieteilchen ausgetauscht werden und so eine Wechselwirkung erzeugen.</p>
                  <p>Das <strong>Photon</strong> vermittelt den Elektromagnetismus, die <strong>Gluonen</strong> die starke Kraft, die Quarks zusammenhält, und die massiven <strong>W- & Z-Bosonen</strong> die schwache Kraft, die für bestimmte radioaktive Zerfälle verantwortlich ist. Alle haben einen ganzzahligen Spin (Spin 1).</p>
                </ExplanationCard>
                 <ExplanationCard title="Skalarboson: Der Massen-Geber" color="border-amber-500/20">
                  <p>Diese Familie hat derzeit nur ein einziges bestätigtes Mitglied: das <strong>Higgs-Boson</strong>. Es ist einzigartig, weil es einen Spin von 0 hat. Es ist kein klassisches Kraftteilchen, sondern die sichtbare Anregung des unsichtbaren, allgegenwärtigen <strong>Higgs-Feldes</strong>.</p>
                  <p>Der Mechanismus ist elegant: Elementarteilchen erhalten ihre Masse nicht von sich aus, sondern durch ihre Interaktion mit diesem Feld. Teilchen, die stark mit dem Feld wechselwirken (z.B. Top-Quark), sind sehr schwer, während Teilchen, die gar nicht interagieren (z.B. Photon), masselos bleiben.</p>
                </ExplanationCard>
                <div className="md:col-span-2">
                  <ExplanationCard title="Antimaterie: Das Spiegelbild" color="border-pink-500/20">
                    <p>Für jedes Teilchen im Standardmodell gibt es ein entsprechendes <strong>Antiteilchen</strong>. Diese besitzen exakt dieselbe Masse wie ihre Gegenstücke, tragen aber die entgegengesetzte elektrische Ladung (und andere Quantenzahlen).</p>
                    <p>Das Antiteilchen des Elektrons ist beispielsweise das <strong>Positron</strong> (positive Ladung), und Quarks haben Antiquarks. Wenn Materie und Antimaterie aufeinandertreffen, löschen sie sich gegenseitig vollständig aus (Annihilation) und wandeln ihre Masse gemäß Einsteins Formel E=mc² in reine Energie um.</p>
                  </ExplanationCard>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={currentView === 'quiz' ? '' : 'hidden'}>
          <Quiz />
        </div>
      </main>

      {/* Footer / Mobile Nav */}
      <footer className="md:hidden sticky bottom-0 bg-gray-950 border-t border-gray-800 p-2 z-50">
        <nav className="flex justify-around">
           <button onClick={() => setCurrentView('model')} className={`p-2 rounded-xl flex flex-col items-center gap-1 ${currentView === 'model' ? 'text-blue-500' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
            <span className="text-[10px]">Modell</span>
          </button>
          <button onClick={() => setCurrentView('quiz')} className={`p-2 rounded-xl flex flex-col items-center gap-1 ${currentView === 'quiz' ? 'text-blue-500' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-[10px]">Quiz</span>
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default App;
