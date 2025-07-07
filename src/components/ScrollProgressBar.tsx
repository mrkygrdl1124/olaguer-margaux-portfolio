
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ScrollProgressBar = () => {
  const { scrollProgress } = useScrollAnimation();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
      <div 
        className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
