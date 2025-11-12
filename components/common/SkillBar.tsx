import React from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const getColorStyle = (colorClass: string) => {
  switch (colorClass) {
    case 'text-cyan-400':
      return 'var(--color-primary)';
    case 'text-indigo-400':
      return 'var(--color-secondary)';
    case 'text-yellow-400':
      return 'var(--color-tertiary)';
    default:
      return 'var(--text-primary)';
  }
};

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, color }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-1" style={{ color: 'var(--text-secondary)' }}>
      <span className="text-lg font-medium">{name}</span>
      <span className="font-bold" style={{ color: getColorStyle(color) }}>
        {level}%
      </span>
    </div>
    <div className="w-full rounded-full h-2.5 shadow-inner" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div
        className={`h-2.5 rounded-full transition-all duration-500 ease-out`}
        style={{
          width: `${level}%`,
          backgroundColor: getColorStyle(color),
        }}
      />
    </div>
  </div>
);