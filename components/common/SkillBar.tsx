'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useMotionValue, animate } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  icon?: any;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, icon }) => {
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(0);
  // ⭐ NEW STATE: Tracks if the animation has successfully run once
  const [hasAnimated, setHasAnimated] = useState(false); 
  const ref = useRef<HTMLDivElement>(null);

  const mv = useMotionValue(0);

  // 1. Intersection Observer (Unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 2. Animation Logic (Updated)
  useEffect(() => {
    // If the animation has already run, we skip the entire logic.
    if (hasAnimated) {
        return; 
    }
    
    // If it scrolls out of view AND it hasn't animated yet, reset to 0.
    if (!inView) {
      // ⭐ MODIFIED: Only reset if the animation hasn't run yet.
      if (!hasAnimated) setDisplay(0);
      return;
    }

    // This block runs only when: inView is TRUE AND hasAnimated is FALSE
    
    const clamped = Math.max(0, Math.min(100, Math.round(level)));
    const controls = animate(mv, clamped, { duration: 1.2, ease: [0.22, 1, 0.36, 1] });
    
    const unsubscribe = mv.on('change', (v: number) => {
        const roundedValue = Math.round(v);
        setDisplay(roundedValue);
        
        // ⭐ NEW: Once the animation reaches the final target value, mark it as animated.
        if (roundedValue >= clamped) {
            setHasAnimated(true);
        }
    });

    return () => {
      controls.stop();
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [inView, level, mv, hasAnimated]); // Added hasAnimated to dependency array

  return (
    <div
      ref={ref}
      className="flex items-center justify-between mb-4 p-3 rounded-lg"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="flex items-center space-x-2">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={`text-xl ${color || 'text-white'}`}
          />
        )}
        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
          {name}
        </span>
      </div>

      <span className="text-lg font-bold" style={{ color: 'var(--text-secondary)' }}>
        {display}%
      </span>
    </div>
  );
};