
import React, { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import Memories from './components/Memories';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import Surprise from './components/Surprise';
import Footer from './components/Footer';
import Reasons from './components/Reasons';
import MusicToggle from './components/MusicToggle';
import OurSong from './components/OurSong';
import FutureDreams from './components/FutureDreams';


const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = document.getElementById('bg-music') as HTMLAudioElement;
    if (audioElement) {
        audioRef.current = audioElement;
        audioRef.current.volume = 0.2; // Softer volume
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
        setIsPlaying(!isPlaying);
    }
  };


  return (
    <div className="bg-[#FFF7FA] min-h-screen overflow-x-hidden custom-cursor-pink">
      <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
      <Hero />
      <main className="relative z-10">
        <Memories />
        <LoveLetter />
        <Timeline />
        <Reasons />
        <OurSong />
        <FutureDreams />
        <Surprise />
      </main>
      <Footer />
    </div>
  );
};

export default App;