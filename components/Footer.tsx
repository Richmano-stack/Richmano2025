import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const scrollToTop = () => {
  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

interface FooterProps {
  data?: any;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = data?.footer?.copyrightText || `© ${currentYear} Richmano. All rights reserved.`;
  const madeWithText = data?.footer?.madeWithText || "Made with passion by Richmano.";
  const socialLinks = data?.contact?.socialLinks || [];

  return (
    <footer
      className="py-8 transition-all duration-300 lg:ml-20"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">

        {/* Left side: Author info & Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left" style={{ color: 'var(--text-tertiary)' }}>
          <p>{copyrightText}</p>
          <p className="mt-1">
            {madeWithText}
          </p>
        </div>

        {/* Right side: Social links and Scroll Up */}
        <div className="flex flex-col items-center md:items-end space-y-3">

          {/* Scroll to Top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 rounded-full transition-all duration-300 shadow-md"
            style={{
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-light)'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--border-medium)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-surface)';
            }}
            aria-label="Scroll to top"
          >
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </button>

          {/* Social links (icons) */}
          <div className="flex justify-center space-x-4 text-lg" style={{ color: 'var(--text-tertiary)' }}>
            {socialLinks.map((link: any) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition"
                style={{ color: 'var(--text-tertiary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};