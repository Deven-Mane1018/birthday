
import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { FUTURE_DREAMS } from '../constants';
import Sparkles from './Sparkles';
import { FutureDream } from '../types';

const iconMap: Record<FutureDream['icon'], React.ReactNode> = {
    plane: <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />,
    home: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    food: <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0c-.454-.303-.977-.454-1.5-.454V8.5a1 1 0 011-1h12a1 1 0 011 1v7.046zM12 3v5.5" />,
    road: <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />,
    stars: <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4-4 6-6z" />,
    heart: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
};


const FutureDreams: React.FC = () => {
  const [sectionRef, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="future-dreams" className={`relative py-20 px-6 md:px-12 transition-opacity duration-1000 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Sparkles count={25}/>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-dancing text-[#D9A5A0] mb-12">Dreaming of Our Forever...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FUTURE_DREAMS.map((dream, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center transition-all duration-700 transform hover:-translate-y-2 hover:shadow-rose-200/50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
                <div className="w-20 h-20 bg-[#FFC1D6] rounded-full mx-auto flex items-center justify-center mb-6 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {iconMap[dream.icon]}
                    </svg>
                </div>
              <h3 className="font-bold font-quicksand text-xl text-[#D9A5A0] mb-2">{dream.title}</h3>
              <p className="text-gray-500">{dream.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureDreams;
