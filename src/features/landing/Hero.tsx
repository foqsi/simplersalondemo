import React from 'react';

export default function Hero() {
  return (
    <section className="bg-red-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Salon Demo</h1>
        <p className="mt-4 text-lg md:text-xl">&quot;Your Quote Here&quot;</p>
        <button className="mt-6 bg-white text-red-600 font-semibold py-2 px-6 rounded shadow hover:bg-gray-100 transition">
          <a href='/services'>
            Explore Our Services
          </a>
        </button>
      </div>
    </section>

  );
}
