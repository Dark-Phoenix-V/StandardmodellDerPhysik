
import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizQuestion, QuestionType } from '../types';

export const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(QUIZ_QUESTIONS);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [orderedItems, setOrderedItems] = useState<string[]>([]);

  const [isAnswered, setIsAnswered] = useState(false);
  const [incorrectlyAnsweredIds, setIncorrectlyAnsweredIds] = useState<number[]>([]);

  const initializeQuestionState = (index: number, currentQuestions: QuizQuestion[]) => {
    const q = currentQuestions[index];
    setSelectedOption(null);
    setSelectedOptions([]);
    setIsAnswered(false);
    if (q?.type === 'order') {
      setOrderedItems([...q.options]);
    } else {
      setOrderedItems([]);
    }
  };

  useEffect(() => {
    initializeQuestionState(0, questions);
  }, []);

  const question = questions[currentQuestion];
  const qType: QuestionType = question?.type || 'single';

  const handleSingleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    checkAnswer(index);
  };

  const handleMultiSelect = (index: number) => {
    if (isAnswered) return;
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter(i => i !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  const handleMoveItem = (index: number, direction: -1 | 1) => {
    if (isAnswered) return;
    const newOrder = [...orderedItems];
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < newOrder.length) {
      [newOrder[index], newOrder[targetIndex]] = [newOrder[targetIndex], newOrder[index]];
      setOrderedItems(newOrder);
    }
  };

  const checkAnswer = (manualSelection?: any) => {
    let isCorrect = false;
    
    if (qType === 'single') {
      const selection = manualSelection !== undefined ? manualSelection : selectedOption;
      isCorrect = selection === question.correctAnswer;
    } else if (qType === 'multi') {
      const correctSet = new Set(question.correctAnswers || []);
      const selectedSet = new Set(selectedOptions);
      // Korrekt wenn: Größe identisch UND alle Korrekten sind gewählt
      isCorrect = correctSet.size === selectedSet.size && 
                  [...correctSet].every(value => selectedSet.has(value));
    } else if (qType === 'order') {
      isCorrect = JSON.stringify(orderedItems) === JSON.stringify(question.correctOrder);
    }

    setIsAnswered(true);
    if (isCorrect) {
        setScore(s => s + 1);
    } else {
        setIncorrectlyAnsweredIds(prev => [...prev, question.id]);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      initializeQuestionState(nextQuestion, questions);
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(QUIZ_QUESTIONS);
    setIncorrectlyAnsweredIds([]);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    initializeQuestionState(0, QUIZ_QUESTIONS);
  };

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto text-center py-12 animate-in fade-in duration-500">
        <h2 className="text-4xl font-bold mb-4">Quiz beendet!</h2>
        <p className="text-xl text-gray-400 mb-8">Du hast {score} von {questions.length} Fragen richtig beantwortet.</p>
        <div className="mb-10 p-4 bg-gray-900 rounded-2xl border border-gray-800">
             <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{width: `${(score/questions.length)*100}%`}}></div>
             </div>
        </div>
        <button onClick={restartQuiz} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl shadow-lg transition-all active:scale-95">
            Quiz neu starten
        </button>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8 text-gray-500 uppercase text-[10px] font-black tracking-[0.2em]">
        <span>Frage {currentQuestion + 1} von {questions.length}</span>
        <div className="flex gap-1">
            {questions.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === currentQuestion ? 'bg-blue-500' : i < currentQuestion ? 'bg-gray-700' : 'bg-gray-800'}`}></div>
            ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="inline-block px-2 py-1 bg-blue-900/30 text-blue-400 text-[10px] font-bold rounded mb-3 uppercase tracking-widest">
            {qType === 'multi' ? 'Mehrfachauswahl' : qType === 'order' ? 'Reihenfolge' : 'Einzelauswahl'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight">{question.question}</h2>
      </div>

      <div className="grid gap-3 mb-8">
        {question.options.map((option, index) => {
          const isSelected = qType === 'multi' ? selectedOptions.includes(index) : selectedOption === index;
          const isCorrect = qType === 'single' ? index === question.correctAnswer : question.correctAnswers?.includes(index);
          
          let stateClass = "border-gray-700 bg-gray-900 hover:border-gray-600";
          let statusLabel = null;

          if (isAnswered) {
            if (isCorrect) {
              if (isSelected) {
                // Richtig gewählt
                stateClass = "border-green-500 bg-green-500/10 text-green-400";
                statusLabel = <span className="text-[10px] uppercase font-black bg-green-500/20 px-2 py-0.5 rounded ml-auto">Korrekt</span>;
              } else {
                // Richtig, aber VERGESSEN
                stateClass = "border-yellow-500 bg-yellow-500/5 text-yellow-400 border-dashed";
                statusLabel = <span className="text-[10px] uppercase font-black bg-yellow-500/20 px-2 py-0.5 rounded ml-auto">Fehlt</span>;
              }
            } else if (isSelected) {
              // Falsch gewählt
              stateClass = "border-red-500 bg-red-500/10 text-red-400";
              statusLabel = <span className="text-[10px] uppercase font-black bg-red-500/20 px-2 py-0.5 rounded ml-auto">Falsch</span>;
            } else {
              // Nicht gewählt und war auch falsch
              stateClass = "opacity-30 border-gray-800";
            }
          } else if (isSelected) {
            stateClass = "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500";
          }

          return (
            <button
              key={index}
              disabled={isAnswered}
              onClick={() => qType === 'multi' ? handleMultiSelect(index) : handleSingleSelect(index)}
              className={`p-4 text-left border rounded-xl flex items-center gap-4 transition-all ${stateClass}`}
            >
              <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-600'}`}>
                {isSelected && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                )}
              </div>
              <span className="flex-grow font-medium">{option}</span>
              {statusLabel}
            </button>
          );
        })}
      </div>

      {!isAnswered && qType === 'multi' && (
        <button 
            onClick={() => checkAnswer()} 
            disabled={selectedOptions.length === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
        >
            Antworten prüfen
        </button>
      )}

      {isAnswered && (
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl animate-in fade-in slide-in-from-bottom-2">
          <div className="mb-6">
            <h4 className="text-blue-400 font-black uppercase text-xs tracking-widest mb-2">Erklärung</h4>
            <p className="text-sm text-gray-300 leading-relaxed italic">"{question.explanation}"</p>
          </div>
          <button 
            onClick={handleNext} 
            className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-all shadow-lg active:scale-[0.98]"
          >
            {currentQuestion + 1 === questions.length ? "Ergebnis anzeigen" : "Nächste Frage"}
          </button>
        </div>
      )}
    </div>
  );
};
