import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-orange-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex justify-between">
        <div>
          <h3 className="text-orange-500 font-bold mb-2">Kaapse Taal</h3>
          <Link href="/wordle">
            <a className="block hover:text-orange-400">Daily Wordle</a>
          </Link>
          <Link href="/about">
            <a className="block hover:text-orange-400">About</a>
          </Link>
        </div>
        <div>
          <p className="text-sm">
            Made with ❤️ in Cape Town
          </p>
        </div>
      </div>
    </footer>
  );
}