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

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, icon }) => {  // ✅ added color, icon here
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const mv = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }

    const clamped = Math.max(0, Math.min(100, Math.round(level)));
    const controls = animate(mv, clamped, { duration: 1.2, ease: [0.22, 1, 0.36, 1] });
    const unsubscribe = mv.on('change', (v: number) => setDisplay(Math.round(v)));

    return () => {
      controls.stop();
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [inView, level, mv]);

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
