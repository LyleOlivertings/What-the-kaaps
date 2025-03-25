import { useState, useEffect } from 'react';
import { slangTerms } from '../data/slangData';

export default function Quiz() {
  const [currentTerm, setCurrentTerm] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  // Get 4 random terms for options
  const getRandomTerms = () => {
    const shuffled = [...slangTerms].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  // Start new question
  const newQuestion = () => {
    const terms = getRandomTerms();
    const correctTerm = terms[Math.floor(Math.random() * 4)];
    setCurrentTerm({
      question: correctTerm.explanation,
      options: terms,
      correct: correctTerm.term
    });
    setShowResult(false);
    setUserAnswer('');
  };

  // Check answer
  const checkAnswer = (selectedTerm) => {
    setUserAnswer(selectedTerm);
    setShowResult(true);
    if (selectedTerm === currentTerm.correct) {
      setScore(s => s + 1);
    }
  };

  useEffect(() => {
    newQuestion();
  }, []);

  return (
    <div className="bg-navy-100 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-navy-900">Test Your Kaaps Knowledge</h2>
        <div className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Score: {score}
        </div>
      </div>

      {currentTerm && (
        <div>
          <p className="text-lg mb-4 font-medium text-gray-700">
            "What's the term for: <span className="text-navy-900">{currentTerm.question}</span>"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentTerm.options.map((term) => (
              <button
                key={term.term}
                onClick={() => checkAnswer(term.term)}
                disabled={showResult}
                className={`p-4 text-left rounded-lg transition-all 
                  ${showResult ? 
                    (term.term === currentTerm.correct ? 
                      'bg-green-500 text-white' : 
                      (term.term === userAnswer ? 'bg-red-500 text-white' : 'bg-gray-200')) : 
                    'bg-white hover:bg-orange-100'}
                  ${!showResult && 'hover:shadow-md'}
                `}
              >
                {term.term}
                {showResult && term.term === currentTerm.correct && (
                  <span className="ml-2">✅</span>
                )}
                {showResult && term.term === userAnswer && term.term !== currentTerm.correct && (
                  <span className="ml-2">❌</span>
                )}
              </button>
            ))}
          </div>

          {showResult && (
            <div className="mt-6">
              <p className="mb-4">
                {userAnswer === currentTerm.correct ? 
                  "Lekker, you got it right!" : 
                  `Ag shame! The correct answer was: ${currentTerm.correct}`
                }
              </p>
              <button
                onClick={newQuestion}
                className="bg-orange-500 text-gray-400 px-6 py-2 rounded-lg hover:bg-orange-600"
              >
                Next Question →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}