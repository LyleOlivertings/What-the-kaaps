"use client";

import { useState } from "react";
import Header from "../components/Header";
import SlangCard from "../components/SlangCard";
import { slangTerms } from "../data/slangData";
import Quiz from "@/components/Quiz";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = slangTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="What you bymekaar with? (Search for something)"
            className="w-full p-4 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-16">
          <Quiz />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term, index) => (
            <SlangCard key={index} term={term} />
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>Nai, I can't find this one (Not found)</p>
          </div>
        )}
      </div>
    </div>
  );
}
