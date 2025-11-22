import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from './ProfileImage';
import CurrentTime from "./Timer";
import 'aos/dist/aos.css';
import ProfileModal from './ProfileModal'; 
import { useTheme } from "../context/ThemeContext";


interface NavItem {
  id: string;
  name: string;
}

interface HeaderProps {
  name: string;
  navItems: NavItem[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}


export const Header: React.FC<HeaderProps> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false); 

    const handleProfileClick = () => {
    setShouldRender(true); 
        setTimeout(() => {
        setIsModalOpen(true); 
    }, 10); 
  };

  const { isDark, toggleTheme } = useTheme();

    const handleCloseModal = () => {
    setIsModalOpen(false); 
    
        setTimeout(() => {
      setShouldRender(false); 
    }, 300);    };
    
  const { 
    name,
    navItems,
    activeSection,
    scrollToSection,
  } = props;


  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: 'transparent',
          borderBottomColor: 'var(--border-light)',
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 font-normal backdrop-blur-sm border-b shadow-xl">

          {/* Desktop Navigation (Hidden on mobile) */}
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
          
          {/* Right-side controls (Timer, Theme Toggle, Profile) */}
          {/* This container is pushed to the far right on mobile via ml-auto since <nav> is hidden. */}
          <div className="flex items-center gap-2 ml-auto"> 
            <CurrentTime />
            <button
              onClick={toggleTheme}
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
              {isDark ? <FontAwesomeIcon size="lg" icon={faSun} /> : <FontAwesomeIcon size="lg" icon={faMoon} />}
            </button>

            {/* Profile Button */}
            <div
              className=" flex items-center gap-2 sm:gap-3 rounded-md transition shadow-md p-1 cursor-pointer"
              style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--border-medium)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
              onClick={handleProfileClick}              role="button"
              aria-label="Open profile / contact"
            >
              <ProfileImage src="./profile.png" size={40} />
            </div>
          </div>
        </div>
      </header>
      
      {/* 3. Modal Rendering */}
      {shouldRender && (          
        <div 
          className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
            isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none' 
          }`}
          onClick={handleCloseModal}
        >
          <ProfileModal 
            onClose={handleCloseModal} 
            isOpen={isModalOpen}
          />
        </div>
      )}
    </>
  );
};
