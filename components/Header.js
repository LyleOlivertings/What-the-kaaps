import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-navy-900 text-orange-500 py-6 px-4 gap-4">  
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className=''>
          <h1 className="text-4xl font-bold mb-2">Kaapse Dictionary</h1>
          <p className="text-black-200">
            A guide to Cape Town's most lekker slang
          </p>
        </div>

        <nav>
          <Link
            href="/wordle"
            className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2"
          >
            Play Wordle (Not working)
          </Link>
        </nav>
      </div>
    </header>
  );
}