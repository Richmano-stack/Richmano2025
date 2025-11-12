import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from './ProfileImage';
import CurrentTime from "./Timer";


interface NavItem {
  id: string;
  name: string;
}

interface HeaderProps {
  name: string;
  navItems: NavItem[];
  activeSection: string;
  scrollToSection: (id: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  name,
  navItems,
  activeSection,
  scrollToSection,
  isDarkMode,
  setIsDarkMode,
}) => (
  <header
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-xl"
    style={{
      backgroundColor: 'var(--bg-surface)',
      borderBottomColor: 'var(--border-light)',
    }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
{/*       <div className="flex items-center gap-2 sm:gap-3 rounded transition shadow-md p-1 cursor-pointer"
                      
      style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--border-medium)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
      >
        <ProfileImage src="./profile.png" size={55} />
        <a
          onClick={() => scrollToSection('home')}
          className="text-xl sm:text-2xl font-extrabold cursor-pointer transition"
          style={{ color: 'var(--text-primary)' }}
        >
          {name}
        </a>
        
      </div> */}
      {/* Desktop Navigation - Hidden on Mobile */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item: NavItem) => (
          <a
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-sm font-medium transition cursor-pointer relative group"
            style={{
              color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
            }}
          >
            {item.name}
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                activeSection === item.id ? 'scale-x-100' : ''
              }`}
              style={{ backgroundColor: 'var(--text-secondary)' }}
            ></span>
          </a>
        ))}
      </nav>
      {/* Right-side controls (theme toggle + profile) - grouped so they stay together on mobile & desktop */}
      <div className="flex items-center gap-2 ml-auto">
        <CurrentTime />
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-3 py-3 text-xs sm:text-sm font-mono rounded-md transition shadow-md"
          style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--border-medium)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-surface)';
          }}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <FontAwesomeIcon size="lg" icon={faSun} /> : <FontAwesomeIcon size="lg" icon={faMoon} />}
        </button>

        <div
          className="flex items-center gap-2 sm:gap-3 rounded transition shadow-md p-1 cursor-pointer"
          style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--border-medium)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
          onClick={() => scrollToSection('contact')}
          role="button"
          aria-label="Open profile / contact"
        >
          <ProfileImage src="./profile.png" size={40} />
        </div>
      </div>
    </div>
  </header>
);
