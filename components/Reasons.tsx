import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { REASONS_I_LOVE_YOU } from '../constants';
import HeartIcon from './HeartIcon';
import Sparkles from './Sparkles';

const Reasons: React.FC = () => {
  const [sectionRef, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="reasons" className={`relative py-20 px-6 md:px-12 transition-opacity duration-1000 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Sparkles count={20} />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-dancing text-[#D9A5A0] mb-12">A Few Reasons Why I Love You...</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {REASONS_I_LOVE_YOU.map((reason, index) => (
              <li
                key={index}
                className={`bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg flex items-center text-left transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="text-[#FFC1D6] mr-4 flex-shrink-0"><HeartIcon className="w-8 h-8"/></span>
                <p className="font-quicksand text-gray-600 text-lg">{reason}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
