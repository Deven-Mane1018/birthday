import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import HeartIcon from './HeartIcon';
import Sparkles from './Sparkles';

const LoveLetter: React.FC = () => {
  const [sectionRef, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <section ref={sectionRef} className={`relative py-20 px-6 md:px-12 bg-[#FFDFEB]/30 transition-opacity duration-1000 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Sparkles count={20} />
      <div className="container mx-auto flex justify-center">
        <div className={`relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl transform transition-transform duration-700 ${isVisible ? 'scale-100 rotate-0' : 'scale-90 -rotate-2'}`}>
          <div className="absolute -top-6 -left-6 text-[#FFC1D6]">
            <HeartIcon className="w-16 h-16 opacity-70" />
          </div>
          <div className="absolute -bottom-5 -right-5 text-[#FFC1D6]">
            <HeartIcon className="w-12 h-12 opacity-50 transform rotate-12" />
          </div>
          <h2 className="text-4xl md:text-5xl font-dancing text-center text-[#D9A5A0] mb-6">A Little Note for You</h2>
          <div className="text-lg font-quicksand text-gray-600 leading-relaxed space-y-4 text-justify">
            <p className="font-dancing text-2xl text-pink-400">My Dearest Radhu,</p>
            <p>
              Happy Birthday, my love! It feels like just yesterday we were sharing that first kachori, and now, five incredible years have passed. You walked into my life and turned it into the most beautiful story I could ever imagine.
            </p>
            <p>
              Every moment with you is a treasure—from our quiet lunch dates to singing loudly on long drives, from sharing momos to just jogging beside you as the sun rises. You make the ordinary extraordinary.
            </p>
            <p>
              You are my greatest adventure, my calmest harbor, and my absolute everything. Thank you for five years of pure magic. I can't wait to see what the future holds for us. I love you more than words can say.
            </p>
            <p className="text-right font-dancing text-2xl text-pink-400 mt-6">
              Forever and always,<br/>
              Deven
            </p>
          </div>
           <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#D9A5A0] rounded-full flex items-center justify-center shadow-lg -rotate-12 transform group-hover:rotate-0 transition-transform">
            <span className="font-dancing text-white text-3xl">R+D</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
