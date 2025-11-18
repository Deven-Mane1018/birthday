import React, { useMemo } from 'react';

interface SparklesProps {
  count?: number;
}

const Sparkles: React.FC<SparklesProps> = ({ count = 20 }) => {
  const sparkles = useMemo(() => {
    return [...Array(count)].map((_, i) => {
      const size = Math.random() * 5 + 2; // Sparkle size between 2px and 7px
      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `hsl(${Math.random() * 10 + 340}, 100%, ${Math.random() * 30 + 70}%)`, // Pinks and whites
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${Math.random() * 2 + 1.5}s`,
        },
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={sparkle.style}
        />
      ))}
    </div>
  );
};

export default Sparkles;
