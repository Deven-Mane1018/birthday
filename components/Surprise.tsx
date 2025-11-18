
import React, { useState, useRef, useEffect, useCallback } from 'react';
import HeartIcon from './HeartIcon';
import { useFadeIn } from '../hooks/useFadeIn';

const Surprise: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sectionRef, isVisible] = useFadeIn<HTMLDivElement>();

  const handleSurprise = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 5000); // Animation lasts 5 seconds
  };

  const draw = useCallback((ctx: CanvasRenderingContext2D, particles: any[]) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.globalAlpha = p.opacity;

      if (p.type === 'heart') {
        ctx.font = `${p.size}px serif`;
        ctx.fillStyle = p.color;
        ctx.fillText('❤️', p.x, p.y);
      } else { // Sparkle
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }, []);

  useEffect(() => {
    if (!isAnimating || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];
    const particleCount = 100;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 20 + 5;
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + size,
            size: size,
            speedY: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            opacity: Math.random() * 0.5 + 0.5,
            color: `hsl(${Math.random() * 10 + 340}, 100%, ${Math.random() * 30 + 60}%)`, // Pinks and whites
            type: Math.random() > 0.3 ? 'heart' : 'sparkle'
        });
    }

    const animate = () => {
        particles.forEach(p => {
            p.y -= p.speedY;
            p.x += p.speedX;
            p.opacity -= 0.005;
            if (p.y < -p.size || p.opacity <= 0) {
                p.y = canvas.height + p.size;
                p.x = Math.random() * canvas.width;
                p.opacity = Math.random() * 0.5 + 0.5;
            }
        });
        draw(ctx, particles);
        animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.cancelAnimationFrame(animationFrameId);
    };
  }, [isAnimating, draw]);

  return (
    <section ref={sectionRef} className={`relative py-20 px-6 md:px-12 bg-[#FFDFEB]/30 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {isAnimating && <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />}
        <div className="container mx-auto text-center relative z-10">
            <div className="flex flex-col items-center">
                <div className="text-[#D9A5A0] animate-pulse">
                    <HeartIcon className="w-24 h-24" />
                </div>
                <h2 className="text-4xl md:text-5xl font-dancing text-[#D9A5A0] mt-4 mb-2">One Last Surprise...</h2>
                <p className="text-lg font-quicksand text-gray-500 mb-8">Because you deserve all the love in the world.</p>
                <button
                    onClick={handleSurprise}
                    disabled={isAnimating}
                    className="px-8 py-4 bg-[#FFC1D6] text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-pink-300/50 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isAnimating ? 'Showering you with love!' : 'Tap for Surprise'}
                </button>
            </div>
        </div>
    </section>
  );
};

export default Surprise;
