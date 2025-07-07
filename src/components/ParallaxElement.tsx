
import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal' | 'diagonal';
  reverse?: boolean;
}

const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className, 
  direction = 'vertical',
  reverse = false
}: ParallaxElementProps) => {
  const { scrollY } = useScrollAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const multiplier = reverse ? -1 : 1;
      let transform = '';

      switch (direction) {
        case 'vertical':
          transform = `translateY(${-(scrollY * speed * multiplier)}px)`;
          break;
        case 'horizontal':
          transform = `translateX(${-(scrollY * speed * multiplier)}px)`;
          break;
        case 'diagonal':
          transform = `translate(${-(scrollY * speed * multiplier * 0.5)}px, ${-(scrollY * speed * multiplier)}px)`;
          break;
      }

      ref.current.style.transform = transform;
    }
  }, [scrollY, speed, direction, reverse]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ParallaxElement;
