import React from 'react';
import HeartIcon from './HeartIcon';
import Sparkles from './Sparkles';

const Hero: React.FC = () => {
  const scrollToMemories = () => {
    document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-soft text-white p-6 overflow-hidden">
      <Sparkles count={30} />
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
            <div key={i} className="absolute text-pink-300/50 animate-float-up" style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 60 + 20}px`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * -15}s`,
                bottom: '-100px', // Start from below the screen
            }}>
                <HeartIcon />
            </div>
        ))}
      </div>
      <div className="relative z-10 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-dancing font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
          Happy Birthday My Love ❤️
        </h1>
        <p className="font-quicksand text-xl md:text-2xl mt-4 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.2)' }}>
          To my dearest Radhu, my partner in every beautiful memory. Here's to celebrating you today and always.
        </p>
        <button
          onClick={scrollToMemories}
          className="mt-10 px-8 py-4 bg-white text-[#D9A5A0] font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-pink-300/50 custom-cursor-heart flex items-center mx-auto gap-2"
        >
          Click Me 🎁
          <HeartIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute bottom-10 text-white animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </header>
  );
};

export default Hero;
