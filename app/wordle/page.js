'use client'; // Required for interactivity

import { useState, useEffect } from 'react';
import { slangTerms } from '@/data/slangData';
import WordleGrid from '@/components/Wordle/WorldeGrid';
import WordleKeyboard from '@/components/Wordle/WorldeKeyboard';

// Move getDailyWord outside the component
const getDailyWord = () => {
  const terms = slangTerms.filter(term => term.term.length === 5);
  const today = new Date();
  const seed = today.getFullYear() + today.getMonth() + today.getDate();
  return terms[Math.floor(seed % terms.length)].term.toLowerCase();
};

export default function WordlePage() {
  const [solution] = useState(getDailyWord());
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);

  const handleKeyPress = (key) => {
    if (isGameOver) return;
    
    if (key === 'ENTER') {
      if (currentGuess.length !== 5) return;
      
      const newGuesses = [...guesses];
      newGuesses[guesses.findIndex(val => val === null)] = currentGuess;
      setGuesses(newGuesses);
      
      if (currentGuess === solution) {
        setIsGameOver(true);
      } else if (!newGuesses.includes(null)) {
        setIsGameOver(true);
      }
      setCurrentGuess('');
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(key)) {
      setCurrentGuess(prev => (prev + key).toLowerCase().slice(0, 5));
    }
  };

  useEffect(() => {
    const handlePhysicalKeyboard = (e) => {
      if (e.key === 'Enter') handleKeyPress('ENTER');
      else if (e.key === 'Backspace') handleKeyPress('BACKSPACE');
      else if (/^[A-Za-z]$/.test(e.key)) handleKeyPress(e.key);
    };

    window.addEventListener('keydown', handlePhysicalKeyboard);
    return () => window.removeEventListener('keydown', handlePhysicalKeyboard);
  }, [currentGuess, isGameOver]);

  return (

    <div className="min-h-screen bg-blue-900 text-white py-12">
    {/* Construction Notice Banner */}
    <div className="bg-orange-500/90 text-white p-4 mb-8 text-center">
      <div className="max-w-lg mx-auto flex items-center justify-center gap-3">
        <span className="text-2xl">🚧</span>
        <div>
          <h2 className="font-bold text-lg">Under Construction!</h2>
          <p className="text-sm opacity-90">
            This Wordle game is still being made lekker! Features might be kak
          </p>
        </div>
        <span className="text-2xl">🔨</span>
      </div>
    </div>

   
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-500">
          Kaaps Wordle
        </h1>
        
        <WordleGrid 
          solution={solution}
          guesses={guesses}
          currentGuess={currentGuess}
        />
        
        <WordleKeyboard 
          onKeyPress={handleKeyPress}
          solution={solution}
          guesses={guesses}
        />

        {isGameOver && (
          <div className="mt-8 text-center">
            <p className="text-xl mb-4">
              {guesses.includes(solution) 
                ? "Lekker! You got it!" 
                : `Ag shame! The word was: ${solution}`}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-orange-600"
            >
              Play Again Tomorrow
            </button>
          </div>
        )}
      </div>
      </div>
 
  );
}