import React from 'react';

interface ProjectCardProps {
  title: string;
  tech: string;
  desc: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, desc }) => (
  <div
    className="p-6 rounded-xl shadow-lg border transition duration-300 transform hover:scale-[1.01] flex flex-col h-full"
    style={{
      backgroundColor: 'var(--bg-card)',
      borderColor: 'var(--border-light)',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}
  >
    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
      {title}
    </h3>
    <p className="text-sm font-mono mb-4" style={{ color: 'var(--text-secondary)' }}>
      {tech}
    </p>
    <p className="mb-6 flex-grow" style={{ color: 'var(--text-secondary)' }}>
      {desc}
    </p>

    {/* LLM Callout for the AI Project */}
    {title.includes('AI Historian') && (
      <span
        className="text-xs font-semibold border p-1 rounded-full w-fit mb-4"
        style={{
          color: 'var(--text-secondary)',
          borderColor: 'var(--text-secondary)',
          backgroundColor: 'var(--bg-surface)',
        }}
      >
        ✨ Features LLM Integration
      </span>
    )}

    <div className="flex space-x-4 mt-auto">
      <a
        href="#"
        className="text-sm transition flex items-center"
        style={{ color: 'var(--text-secondary)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
      >
        <span className="mr-2">GitHub</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'inherit' }}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.11.82-.257.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.087-.74.082-.725.082-.725 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.805 1.305 3.49.998.108-.77.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.12-.3-.538-1.528.115-3.18 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.234 2.88.115 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.62-5.475 5.92.42.36.81 1.096.81 2.22 0 1.604-.015 2.896-.015 3.286 0 .32.21.693.825.575C20.565 21.385 24 16.892 24 12 24 5.373 18.627 0 12 0z" />
        </svg>
      </a>
      <a
        href="#"
        className="text-sm transition flex items-center"
        style={{ color: 'var(--text-secondary)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
      >
        <span className="mr-2">Live Demo</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ stroke: 'currentColor' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-7h5m0 0v5m-5-5l5 5"></path>
        </svg>
      </a>
    </div>
  </div>
);
