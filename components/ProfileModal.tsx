import React from 'react';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
// Suppression des imports faSun et faMoon, car ils ne sont plus nécessaires
import { faGraduationCap, faCode, faUser, faGamepad, faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface StatItem {
  value: string;
  label: string;
}

interface InterestItem {
  name: string;
  icon: IconDefinition;
}

interface PortfolioData {
  name: string;
  title: string;
  stats: StatItem[];
  interests: InterestItem[];
}


interface ProfileModalProps {
  onClose: () => void;
  isOpen: boolean; 
  // Les props du thème sont retirées, car non utilisées ici
}


const ProfileModal: React.FC<ProfileModalProps> = ({ 
    onClose, 
    isOpen
}) => {
  
    const portfolioData: PortfolioData = {
    name: "Richmano NASY",
    title: "Full-Stack Developer",
    stats: [
      { value: '5+', label: 'Years' },
      { value: '6+', label: 'Projects' },
      { value: '8h', label: 'Sleep' }
    ],
    interests: [
      { name: 'React', icon: faReact },
      { name: 'Continuous Learning', icon: faGraduationCap },
      { name: 'Next.js', icon: faCode },
      { name: 'TypeScript', icon: faCode },
      { name : 'Gaming', icon: faGamepad },
      { name: 'Dancing', icon: faBolt }
    ]
  };

    // ✅ Animation de glissement rétablie
    const animationClasses = isOpen 
        ? 'translate-x-0'
        : 'translate-x-full';

  return (
    <div 
        onClick={(e) => e.stopPropagation()} 
        
        className={`
            fixed top-0 right-0 z-[70] 
            h-full w-full 
            md:w-96 
            shadow-2xl 
            overflow-y-auto 
            transition-transform duration-300 ease-in-out
            ${animationClasses} 
        `}
        style={{ background: 'var(--bg-elevated)' }}
    >
      
      {/* ------------------------------------- */}
      {/* Bouton de Fermeture (Haut Droite) */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 transition hover:opacity-80 p-3 z-[80]"
        style={{ color: 'var(--text-secondary)' }}
        aria-label="Close profile modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* ------------------------------------- */}

      {/* Profile Header (Rétablissement du padding original, ou ajustement léger) */}
      {/* Le padding était initialement pt-12, ce qui est suffisant pour le bouton de fermeture absolu */}
      <div className="pt-12 pb-8 px-8 text-center">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4" style={{ borderColor: 'var(--border-medium)' }}>
          <img 
            src="./profile.png" 
            alt={portfolioData.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl font-light mb-2" style={{ color: 'var(--text-primary)' }}>
          {portfolioData.name}
        </h1>
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
          {portfolioData.title}
        </p>
      </div>

      {/* Stats */}
      {/* ... (Contenu inchangé) ... */}
      <div className="grid grid-cols-3 gap-4 px-8 pb-8 border-b" style={{ borderColor: 'var(--border-light)' }}>
        {portfolioData.stats.map((stat, index) => (
          <div 
            key={index} 
            className={`text-center ${index === 1 ? 'border-l border-r' : ''}`}
            style={index === 1 ? { borderColor: 'var(--border-light)' } : {}}
          >
            <div className="text-2xl font-light mb-1" style={{ color: 'var(--text-primary)' }}>
              {stat.value}
            </div>
            <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 px-8 py-6 border-b" style={{ borderColor: 'var(--border-light)' }}>
        <button 
          className="flex-1 font-medium py-3 px-6 rounded-full transition hover:opacity-90 flex items-center justify-center gap-2"
          style={{ background: 'var(--text-primary)', color: 'var(--bg-base)' }}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>

      {/* Interests */}
      <div className="px-8 py-6">
        <h2 
          className="text-sm font-medium uppercase tracking-wider mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          Interests
        </h2>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {portfolioData.interests.map((interest, index) => (
            <button 
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg border transition hover:opacity-80"
              style={{ 
                borderColor: 'var(--border-light)',
                color: 'var(--text-primary)'
              }}
            >
              <FontAwesomeIcon icon={interest.icon} className="text-lg" />
              <span className="text-sm">{interest.name}</span>
            </button>
          ))}
        </div>

        {/* Status */}
        <div 
          className="rounded-lg p-4 border" 
          style={{ 
            background: 'var(--bg-surface)',
            borderColor: 'var(--border-light)'
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
              Currently Available
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Open to freelance projects, collaborations, and full-time opportunities. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;