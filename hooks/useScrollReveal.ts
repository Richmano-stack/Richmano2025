import { useEffect, useRef } from 'react';

/**
 * Custom hook to add scroll-reveal animation to an element.
 * When the element enters the viewport, it fades in and slides up.
 * 
 * Usage:
 *   const ref = useScrollReveal();
 *   return <div ref={ref} className="reveal">Content</div>
 */
export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the 'visible' class to trigger animation
            entry.target.classList.add('visible');
            // Stop observing after animation plays
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};
