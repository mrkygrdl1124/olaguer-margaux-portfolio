
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  duration?: number;
  threshold?: number;
}

const ScrollRevealSection = ({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up',
  duration = 1000,
  threshold = 0.1
}: ScrollRevealSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        } else if (!entry.isIntersecting && hasAnimated) {
          // Re-animate when scrolling back up
          setIsVisible(false);
          setTimeout(() => setHasAnimated(false), 300);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold, hasAnimated]);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(50px)';
      case 'down': return 'translateY(-50px)';
      case 'left': return 'translateX(50px)';
      case 'right': return 'translateX(-50px)';
      case 'scale': return 'scale(0.8)';
      case 'rotate': return 'rotate(10deg) scale(0.9)';
      default: return 'translateY(50px)';
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case 'scale': return 'scale(1)';
      case 'rotate': return 'rotate(0deg) scale(1)';
      default: return 'translate(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible
          ? `opacity-100 ${getVisibleTransform()}`
          : `opacity-0 ${getTransform()}`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollRevealSection;
