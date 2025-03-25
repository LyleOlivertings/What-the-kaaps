'use client';

export default function WordleKeyboard({ onKeyPress, solution, guesses }) {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  // Determine the status for each key
  const getKeyStatus = (key) => {
    const allGuesses = guesses.join('');
    if (!allGuesses.includes(key)) return '';

    // Check if key is in correct position in any guess
    const inCorrectPosition = guesses.some(guess => 
      guess && [...guess].some((char, i) => char === key && solution[i] === key)
    );

    if (inCorrectPosition) return 'correct';
    if (solution.includes(key)) return 'misplaced';
    return 'incorrect';
  };

  return (
    <div className="space-y-2">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center gap-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`px-3 py-4 rounded-md text-sm font-bold uppercase min-w-[2rem] 
                ${getKeyStatus(key) === 'correct' 
                  ? 'bg-green-600 text-white' 
                  : getKeyStatus(key) === 'misplaced' 
                  ? 'bg-yellow-500 text-white'
                  : getKeyStatus(key) === 'incorrect' 
                  ? 'bg-navy-700 text-gray-400 opacity-50'
                  : 'bg-gray-300 text-navy-900'}
                transition-all hover:scale-105 active:scale-95`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}

      {/* Special keys row */}
      <div className="flex justify-center gap-1 mt-4">
        <button
          onClick={() => onKeyPress('ENTER')}
          className="px-6 py-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium text-sm"
        >
          Enter
        </button>
        <button
          onClick={() => onKeyPress('BACKSPACE')}
          className="px-6 py-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium text-sm"
        >
          ⌫ Delete
        </button>
      </div>
    </div>
  );
}