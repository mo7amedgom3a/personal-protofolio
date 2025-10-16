import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  className?: string;
  delay?: number;
  threshold?: number;
  id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  className = '',
  delay = 0,
  threshold = 0.1,
  id
}) => {
  const { ref, isVisible } = useIntersectionObserver({ 
    threshold,
    triggerOnce: true 
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
};