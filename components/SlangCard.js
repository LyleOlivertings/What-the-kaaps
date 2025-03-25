export default function SlangCard({ term }) {
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-2xl font-bold text-orange-600">{term.term}</h2>
          <span className="text-sm text-gray-500 italic">{term.pronunciation}</span>
        </div>
        
        <div className="mb-2">
          <span className="inline-block bg-navy-100 text-navy-800 text-sm px-2 py-1 rounded">
            {term.partOfSpeech}
          </span>
        </div>
  
        <p className="text-gray-600 mb-4">{term.explanation}</p>
  
        {term.synonyms.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Also known as:</h4>
            <div className="flex flex-wrap gap-2">
              {term.synonyms.map((synonym, index) => (
                <span key={index} className="px-2 py-1 bg-slate-100 rounded text-sm">
                  {synonym}
                </span>
              ))}
            </div>
          </div>
        )}
  
        <div className="mt-4 border-t pt-4">
          <p className="text-gray-600 italic">
            <span className="font-semibold">Example:</span> "{term.example}"
          </p>
        </div>
      </div>
    );
  }