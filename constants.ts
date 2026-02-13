
import { Particle, QuizQuestion } from './types';

export const PARTICLES: Particle[] = [
  // Quarks
  { 
    id: 'up', name: 'Up', symbol: 'u', type: 'quark', generation: 1, mass: '2.2 MeV/c²', charge: '+2/3', spin: '1/2', color: 'text-purple-400', 
    description: 'Elementares Fermion der 1. Generation. Bildet zusammen mit dem Down-Quark das Isospin-Dublett der Nukleon-Bausteine.',
    interaction: 'Starke WW (Farbe), Elektromagnetismus (+2/3 e), Schwache WW.',
    role: 'Hauptvalenzquark in Protonen (uud) und Neutronen (udd); essentiell für stabile baryonische Materie.'
  },
  { 
    id: 'down', name: 'Down', symbol: 'd', type: 'quark', generation: 1, mass: '4.7 MeV/c²', charge: '-1/3', spin: '1/2', color: 'text-purple-400', 
    description: 'Elementares Fermion der 1. Generation. Es ist schwerer als das Up-Quark, was die Instabilität des freien Neutrons erklärt.',
    interaction: 'Starke WW, Elektromagnetismus (-1/3 e), Schwache WW.',
    role: 'Bestandteil der Atomkerne; ermöglicht via schwache Wechselwirkung den Beta-Minus-Zerfall.'
  },
  { 
    id: 'charm', name: 'Charm', symbol: 'c', type: 'quark', generation: 2, mass: '1.28 GeV/c²', charge: '+2/3', spin: '1/2', color: 'text-purple-400', 
    description: 'Quark der 2. Generation. Die Entdeckung bestätigte den GIM-Mechanismus und die Existenz der zweiten Generation.',
    interaction: 'Starke WW, Elektromagnetismus, Schwache WW (bevorzugter Zerfall in Strange-Quarks).',
    role: 'Bildet Charmonium-Zustände; wichtig für Präzisionstests der Quantenchromodynamik.'
  },
  { 
    id: 'strange', name: 'Strange', symbol: 's', type: 'quark', generation: 2, mass: '96 MeV/c²', charge: '-1/3', spin: '1/2', color: 'text-purple-400', 
    description: 'Quark der 2. Generation. Trägt die Quantenzahl Strangeness, die in starken Wechselwirkungen erhalten bleibt.',
    interaction: 'Alle fundamentalen Wechselwirkungen; Zerfälle verletzen die Strangeness-Erhaltung.',
    role: 'Bestandteil von Kaonen und Hyperonen; relevant für das Studium der CP-Verletzung.'
  },
  { 
    id: 'top', name: 'Top', symbol: 't', type: 'quark', generation: 3, mass: '173 GeV/c²', charge: '+2/3', spin: '1/2', color: 'text-purple-400', 
    description: 'Das massereichste bekannte Elementarteilchen. Zerfällt extrem schnell, bevor es Hadronen bilden kann.',
    interaction: 'Starke WW, Elektromagnetismus, Schwache WW (fast ausschließlich Zerfall in W + Bottom).',
    role: 'Besitzt die stärkste Kopplung an das Higgs-Feld; Fenster zu Physik jenseits des Standardmodells.'
  },
  { 
    id: 'bottom', name: 'Bottom', symbol: 'b', type: 'quark', generation: 3, mass: '4.18 GeV/c²', charge: '-1/3', spin: '1/2', color: 'text-purple-400', 
    description: 'Quark der 3. Generation. Bildet langlebige B-Mesonen aufgrund der geringen CKM-Mischung.',
    interaction: 'Starke WW, Elektromagnetismus, Schwache WW.',
    role: 'Zentral für B-Physik-Experimente zur Untersuchung der Materie-Antimaterie-Asymmetrie.'
  },

  // Leptonen
  { 
    id: 'electron', name: 'Elektron', symbol: 'e', type: 'lepton', generation: 1, mass: '0.511 MeV/c²', charge: '-1', spin: '1/2', color: 'text-green-400', 
    description: 'Leichtestes geladenes Lepton. Stabil und punktförmig nach aktuellem Wissensstand.',
    interaction: 'Elektromagnetismus (QED), Schwache Wechselwirkung.',
    role: 'Träger der elektrischen Ladung in Atomen; bestimmt chemische Bindungen und Elektrizität.'
  },
  { 
    id: 'electron-neutrino', name: 'Elektron-Neutrino', symbol: 'νe', type: 'lepton', generation: 1, mass: '< 1.1 eV/c²', charge: '0', spin: '1/2', color: 'text-green-400', 
    description: 'Elektrisch neutrales Lepton. Tritt in Verbindung mit dem Elektron im schwachen Isospin-Dublett auf.',
    interaction: 'Ausschließlich Schwache Wechselwirkung und Gravitation.',
    role: 'Entscheidend für stellare Fusionsprozesse und die Leptonenzahlerhaltung beim Beta-Zerfall.'
  },
  { 
    id: 'muon', name: 'Myon', symbol: 'μ', type: 'lepton', generation: 2, mass: '105.7 MeV/c²', charge: '-1', spin: '1/2', color: 'text-green-400', 
    description: 'Instabile "schwere Kopie" des Elektrons (ca. 200-fache Masse).',
    interaction: 'Elektromagnetismus, Schwache Wechselwirkung.',
    role: 'Wichtigstes Teilchen der sekundären kosmischen Strahlung auf der Erdoberfläche.'
  },
  { 
    id: 'muon-neutrino', name: 'Myon-Neutrino', symbol: 'νμ', type: 'lepton', generation: 2, mass: '< 0.17 MeV/c²', charge: '0', spin: '1/2', color: 'text-green-400', 
    description: 'Partnerteilchen des Myons in der schwachen Wechselwirkung.',
    interaction: 'Schwache Wechselwirkung.',
    role: 'Ermöglichte den Nachweis der unterschiedlichen Lepton-Generationen.'
  },
  { 
    id: 'tau', name: 'Tauon', symbol: 'τ', type: 'lepton', generation: 3, mass: '1.777 GeV/c²', charge: '-1', spin: '1/2', color: 'text-green-400', 
    description: 'Schwerstes geladenes Lepton. Kann aufgrund seiner Masse auch in Hadronen zerfallen.',
    interaction: 'Elektromagnetismus, Schwache Wechselwirkung.',
    role: 'Ermöglicht Studien der Lepton-Universalität bei sehr hohen Massen.'
  },
  { 
    id: 'tau-neutrino', name: 'Tauon-Neutrino', symbol: 'ντ', type: 'lepton', generation: 3, mass: '< 18.2 MeV/c²', charge: '0', spin: '1/2', color: 'text-green-400', 
    description: 'Letztes entdecktes Materieteilchen der 3. Generation.',
    interaction: 'Schwache Wechselwirkung.',
    role: 'Vervollständigt das Drei-Generationen-Bild der Fermionen.'
  },

  // Eichbosonen
  { 
    id: 'gluon', name: 'Gluon', symbol: 'g', type: 'boson', mass: '0 MeV/c²', charge: '0', spin: '1', color: 'text-red-500', 
    description: 'Masseloses Eichboson der Quantenchromodynamik (QCD). Trägt selbst Farbladung.',
    interaction: 'Vermittelt die Starke Kernkraft; interagiert mit Quarks und anderen Gluonen.',
    role: 'Bindet Quarks in Hadronen ein; verantwortlich für 99% der Masse sichtbarer Materie durch Bindungsenergie.'
  },
  { 
    id: 'photon', name: 'Photon', symbol: 'γ', type: 'boson', mass: '0 MeV/c²', charge: '0', spin: '1', color: 'text-red-500', 
    description: 'Quant des elektromagnetischen Feldes. Masselos und ohne elektrische Ladung.',
    interaction: 'Vermittelt den Elektromagnetismus; koppelt an alle elektrisch geladenen Teilchen.',
    role: 'Basis für Licht, elektromagnetische Strahlung und den Zusammenhalt von Atomen.'
  },
  { 
    id: 'z-boson', name: 'Z-Boson', symbol: 'Z', type: 'boson', mass: '91.2 GeV/c²', charge: '0', spin: '1', color: 'text-red-500', 
    description: 'Neutrales, massereiches Eichboson der elektroschwachen Wechselwirkung.',
    interaction: 'Vermittelt neutrale schwache Ströme.',
    role: 'Ermöglicht Energieaustausch durch die schwache Kraft ohne Ladungsänderung.'
  },
  { 
    id: 'w-boson', name: 'W-Boson', symbol: 'W', type: 'boson', mass: '80.4 GeV/c²', charge: '±1', spin: '1', color: 'text-red-500', 
    description: 'Geladenes, massereiches Eichboson der schwachen Wechselwirkung.',
    interaction: 'Vermittelt geladene schwache Ströme; ändert den Flavor von Quarks und Leptonen.',
    role: 'Ermöglicht Kernfusion in der Sonne und den Beta-Zerfall.'
  },
  { 
    id: 'higgs', name: 'Higgs-Boson', symbol: 'H', type: 'higgs', mass: '125.1 GeV/c²', charge: '0', spin: '0', color: 'text-amber-400', 
    description: 'Einziges Skalarboson (Spin 0). Anregung des allgegenwärtigen Higgs-Feldes.',
    interaction: 'Koppelt an alle Teilchen mit Masse (Yukawa-Kopplung).',
    role: 'Gibt Elementarteilchen ihre Masse durch spontane Symmetriebrechung im frühen Universum.'
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: 'single',
    question: "Welches Boson verleiht anderen Elementarteilchen ihre Masse?",
    options: ["Photon", "W-Boson", "Higgs-Boson", "Gluon"],
    correctAnswer: 2,
    explanation: "Das Higgs-Boson ist das Quant des Higgs-Feldes, dessen Wechselwirkung Teilchen ihre Ruhemasse verleiht."
  },
  {
    id: 2,
    type: 'multi',
    question: "Welche dieser Teilchen gehören zur ersten Generation der Materie? (Mehrere Antworten möglich)",
    options: ["Up-Quark", "Myon", "Elektron", "Strange-Quark", "Down-Quark"],
    correctAnswers: [0, 2, 4],
    explanation: "Die erste Generation besteht aus Up-Quark, Down-Quark, Elektron und Elektron-Neutrino."
  },
  {
    id: 3,
    type: 'single',
    question: "Wie viele Quarks bilden ein Baryon (wie das Proton)?",
    options: ["Zwei", "Drei", "Vier", "Sechs"],
    correctAnswer: 1,
    explanation: "Baryonen bestehen immer aus drei Quarks (z.B. uud für Protonen). Mesonen bestehen aus zwei (Quark-Antiquark)."
  },
  {
    id: 4,
    type: 'single',
    question: "Welche Kraft wird durch Gluonen vermittelt?",
    options: ["Gravitation", "Elektromagnetismus", "Schwache Kernkraft", "Starke Kernkraft"],
    correctAnswer: 3,
    explanation: "Gluonen vermitteln die starke Kernkraft, welche Quarks in Hadronen zusammenhält."
  },
  {
    id: 5,
    type: 'order',
    question: "Sortiere die geladenen Leptonen nach ihrer Masse (Leichtestes zuerst).",
    options: ["Tauon", "Elektron", "Myon"],
    correctOrder: ["Elektron", "Myon", "Tauon"],
    explanation: "Das Elektron ist das leichteste (0,511 MeV), gefolgt vom Myon (105 MeV) und dem massiven Tauon (1777 MeV)."
  }
];
