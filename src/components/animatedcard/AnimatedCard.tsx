import React, { ReactNode, useState, useEffect } from 'react';

// Intersection Observer Hook for scroll animations
export const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return [setRef, isInView] as const;
};

// Active Section Hook for navbar
export const useActiveSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const options = {
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
};

// Mouse trail effect component
export const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setTrail((prev) => [...prev.slice(-15), mousePosition]);
  }, [mousePosition]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-primary/20 dark:bg-primary/40"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            opacity: index / trail.length,
            transition: 'opacity 0.5s ease'
          }}
        />
      ))}
    </div>
  );
};

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

// Animated Card Wrapper Component
export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '' }) => {
  const [setRef, isInView] = useInView();

  return (
    <div
      ref={setRef}
      className={`transform transition-all duration-700 ${
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};