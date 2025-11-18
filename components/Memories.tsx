import React, { useState } from 'react';
import Modal from './Modal';
import { useFadeIn } from '../hooks/useFadeIn';
import { MEMORIES } from '../constants';
import { MemoryItem } from '../types';

const Memories: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [sectionRef, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <section id="memories" ref={sectionRef} className={`py-20 px-6 md:px-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-dancing text-[#D9A5A0] mb-2">Our Sweet Memories</h2>
        <p className="text-lg font-quicksand text-gray-500 mb-12">Every picture tells a part of our beautiful story.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {MEMORIES.map((memory: MemoryItem, index) => (
            <div
              key={memory.id}
              className={`transform transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-rose-200/50 cursor-pointer animate-subtle-float ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-3'}`}
              style={{ transitionDelay: `${index * 150}ms`, animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedImg(memory.src)}
            >
              <img
                src={memory.src}
                alt={memory.alt}
                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white hover:border-[#FFC1D6] transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </section>
  );
};

export default Memories;
