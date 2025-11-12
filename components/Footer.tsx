import React from 'react';

export const Footer: React.FC = () => (
  <footer className="py-8 border-t" style={{ backgroundColor: 'var(--bg-elevated)', borderTopColor: 'var(--border-light)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
      <p>&copy; {new Date().getFullYear()} Richmano. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2 text-lg" style={{ color: 'var(--text-tertiary)' }}>
        <a href="#" className="transition" style={{ color: 'var(--text-tertiary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}>
          GitHub
        </a>
        <a href="#" className="transition" style={{ color: 'var(--text-tertiary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}>
          LinkedIn
        </a>
        <a href="#" className="transition" style={{ color: 'var(--text-tertiary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}>
          Twitter
        </a>
      </div>
    </div>
  </footer>
);
