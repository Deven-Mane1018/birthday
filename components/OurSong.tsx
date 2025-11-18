
import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const MusicNoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z" />
    </svg>
);


const OurSong: React.FC = () => {
  const [sectionRef, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="our-song" className={`relative py-20 px-6 md:px-12 bg-[#FFDFEB]/30 transition-opacity duration-1000 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="absolute text-[#FFC1D6]/50 animate-float-up" style={{
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 40 + 20}px`,
                    animationDuration: `${Math.random() * 25 + 20}s`,
                    animationDelay: `${Math.random() * -20}s`,
                    bottom: '-80px',
                }}>
                    <MusicNoteIcon />
                </div>
            ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-dancing text-[#D9A5A0] mb-4">The Soundtrack of Us</h2>
        <p className="text-lg font-quicksand text-gray-500 mb-10 max-w-2xl mx-auto">
          This song always brings me back to our late-night drives and singing at the top of our lungs. It's more than just a song—it's our story.
        </p>
        
        <div className={`max-w-2xl mx-auto rounded-2xl shadow-2xl shadow-rose-200/50 overflow-hidden transform transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-90'}`}>
            {/* Replace this iframe with your actual song from Spotify, YouTube, etc. */}
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/1Iq8oo9XkmmvCQiGOfORsK?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Embed Player"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OurSong;
