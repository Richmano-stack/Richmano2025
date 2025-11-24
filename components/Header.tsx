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
    }, 300);
  };

  const { name, navItems, activeSection, scrollToSection } = props;

  return (
    <>
<<<<<<< HEAD
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-base)]/80 backdrop-blur-md border-b border-[var(--border-light)] transition-colors duration-300">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 font-normal">
=======
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: 'transparent',
          borderBottomColor: 'var(--border-light)',
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 font-normal backdrop-blur-sm shadow-xl border-b border-b-[0.5px] border-white/10">
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779

          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden sm:block">
              <CurrentTime />
            </div>

            {/* THEME ICON */}
            <button
              onClick={toggleTheme}
              className="p-1 border border-[var(--border-medium)] rounded-md bg-transparent shadow-none transition 
              hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FontAwesomeIcon size="lg" icon={faSun} />
              ) : (
                <FontAwesomeIcon size="lg" icon={faMoon} />
              )}
            </button>

            {/* PROFILE PIC WITH HOVER EFFECT */}
            <div
              onClick={handleProfileClick}
              role="button"
              aria-label="Open profile / contact"
              className="relative cursor-pointer transition transform hover:scale-105"
            >
              <ProfileImage src="./profile.png" size={40} />
            </div>

          </div>
        </div>
      </header>

      {shouldRender && (
        <div
          className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={handleCloseModal}
        >
          <ProfileModal onClose={handleCloseModal} isOpen={isModalOpen} />
        </div>
      )}
    </>
  );
};
