// components/sections/Sidebar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faFile, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Mapping des liens
const NAV_LINKS: { id: string, label: string, icon: IconDefinition }[] = [
    { id: 'home', label: 'Home', icon: faHome },
    { id: 'skills', label: 'Skills', icon: faCode },
    { id: 'projects', label: 'Projects', icon: faFile },
    { id: 'about', label: 'About', icon: faUser },
    { id: 'contact', label: 'Contact', icon: faEnvelope },
];

interface SidebarProps {
    scrollToSection: (id: string) => void;
    activeSection: string; // Pour mettre en évidence la section actuelle
}

export const Sidebar: React.FC<SidebarProps> = ({ scrollToSection, activeSection }) => {
    return (
        <nav
            className="fixed left-0 top-0 h-full w-16 lg:w-20 p-2 hidden lg:flex flex-col items-center justify-center z-40 transition-all duration-300"
        >
            <div className="space-y-6 flex flex-col items-center">
                {NAV_LINKS.map((link, index) => (
                    <React.Fragment key={link.id}>
                        {/* Separator before Contact */}
                        {link.id === 'contact' && (
                            <div className="w-8 h-[1px] bg-[var(--border-medium)] my-2 opacity-50"></div>
                        )}

                        <button
                            onClick={() => scrollToSection(link.id)}
                            className={`
                                group relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full transition-all duration-300 transform
                            `}
                            style={{
                                color: activeSection === link.id
                                    ? 'var(--color-accent)'
                                    : 'var(--text-secondary)',
                                backgroundColor: activeSection === link.id ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                boxShadow: activeSection === link.id ? '0 0 0 2px var(--color-accent)' : 'none',
                            }}
                            aria-label={link.label}
                            onMouseEnter={(e) => {
                                if (activeSection !== link.id) {
                                    (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-elevated)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeSection !== link.id) {
                                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            {/* Icon */}
                            <FontAwesomeIcon
                                icon={link.icon}
                                className="text-lg lg:text-xl transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Tooltip */}
                            <div
                                className={`
                                    absolute left-full ml-4 whitespace-nowrap 
                                    text-sm font-semibold py-1 px-3 rounded-md transition-all duration-300 ease-out 
                                    opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
                                    pointer-events-none z-50 shadow-lg
                                `}
                                style={{
                                    backgroundColor: 'var(--bg-elevated)',
                                    color: 'var(--text-primary)',
                                    border: '1px solid var(--border-light)'
                                }}
                            >
                                {link.label}
                            </div>
                        </button>
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
};