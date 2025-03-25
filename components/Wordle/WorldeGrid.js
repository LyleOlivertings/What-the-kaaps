'use client';

export default function WordleGrid({ solution, guesses, currentGuess }) {
  return (
    <div className="mb-8">
      {guesses.map((guess, index) => {
        const isCurrent = index === guesses.findIndex(val => val === null);
        const displayGuess = isCurrent ? currentGuess.padEnd(5) : guess || '';

        return (
          <div key={index} className="flex justify-center gap-2 mb-2">
            {[...Array(5)].map((_, position) => {
              let status = '';
              const char = displayGuess[position];
              
              if (guess) {
                if (solution[position] === char) {
                  status = 'correct';
                } else if (solution.includes(char)) {
                  status = 'misplaced';
                } else {
                  status = 'incorrect';
                }
              }

              return (
                <div
                  key={position}
                  className={`w-12 h-12 border-2 flex items-center justify-center text-xl font-bold
                    ${status === 'correct' ? 'bg-green-600 border-green-600 text-white' :
                      status === 'misplaced' ? 'bg-yellow-500 border-yellow-500 text-white' :
                      guess ? 'bg-navy-700 border-navy-700 text-gray-400' : 
                      'bg-navy-800 border-gray-500 text-gray-200'}
                    ${isCurrent && 'border-orange-500 animate-pulse'}`}
                >
                  {char?.toUpperCase()}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}