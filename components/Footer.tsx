import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
// Import des icônes de base
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Définition de la fonction de défilement
=======
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
const scrollToTop = () => {
  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
<<<<<<< HEAD

interface FooterProps {
  data?: any;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = data?.footer?.copyrightText || `© ${currentYear} Richmano. All rights reserved.`;
  const madeWithText = data?.footer?.madeWithText || "Made with passion by Richmano.";
  const socialLinks = data?.contact?.socialLinks || [];

  return (
    // Applique le décalage (lg:ml-20) pour l'alignement avec la Sidebar.
    <footer
      className="py-8 transition-all duration-300 lg:ml-20"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      {/* Conteneur principal: Utilise flex pour aligner les deux côtés */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">

        {/* ⬅️ CÔTÉ GAUCHE : Infos Auteur & Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left" style={{ color: 'var(--text-tertiary)' }}>
          <p>{copyrightText}</p>
          <p className="mt-1">
            {madeWithText}
          </p>
        </div>

        {/* ➡️ CÔTÉ DROIT : Liens Sociaux et Scroll Up */}
        <div className="flex flex-col items-center md:items-end space-y-3">

          {/* Bouton Scroll to Top */}
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

          {/* Liens sociaux (ICÔNES) */}
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

=======

export const Footer: React.FC = () => (
  <footer
    className="py-8 transition-all duration-300 lg:ml-20"
    style={{ backgroundColor: 'transparent' }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">

      <div className="mb-4 md:mb-0 text-center md:text-left" style={{ color: 'var(--text-tertiary)' }}>
        <p>&copy; {new Date().getFullYear()} Richmano. All rights reserved.</p>
        <p className="mt-1">Made with passion by Richmano.</p>
      </div>

      <div className="flex flex-col items-center md:items-end space-y-3">

        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-3 rounded-full transition-all duration-300 shadow-md"
          style={{
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-light)',
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

        <div className="flex justify-center space-x-4 text-lg" style={{ color: 'var(--text-tertiary)' }}>
          <a
            href="#"
            className="transition"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="#"
            className="transition"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="#"
            className="transition"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
      </div>
    </footer>
  );
};