import React, { useState } from 'react';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGraduationCap, faCode, faUser, faGamepad, faBolt, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext'; 


interface StatItem {
  value: string;
  label: string;
}

interface InterestItem {
  name: string;
  icon: IconDefinition;
}

interface ToolItem {
    name: string;
    description: string;
    tag: string;
}

interface PortfolioData {
  name: string;
  title: string;
  stats: StatItem[];
  interests: InterestItem[];
  tools: ToolItem[]; 
}


interface ProfileModalProps {
  onClose: () => void;
  isOpen: boolean; 
}


const ProfileModal: React.FC<ProfileModalProps> = ({ 
    onClose, 
    isOpen
}) => {
    // State to manage which tab is active: 'interests' or 'favorites'
    const [activeTab, setActiveTab] = useState<'interests' | 'favorites'>('interests');

    // Use Theme Context
    const { isDark, toggleTheme } = useTheme();
  
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
      ],
      tools: [
        { name: "Cursor", description: "AI-powered code editor", tag: "Editor" },
        { name: "Figma", description: "All my design/prototyping", tag: "Design" },
        { name: "Notion", description: "Notes and planning", tag: "Productivity" },
        { name: "Httpie", description: "Lightweight HTTP client", tag: "API" },
        { name: "Product Hunt", description: "Discover and share ideas", tag: "Discovery" },
        { name: "Stitch", description: "My designer", tag: "Design" },
      ]
    };

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
      
      {/* Top Bar (Theme toggle and Close button) */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-[80]">
        
        {/* Theme toggle (Left side) */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-md transition shadow-md"
          style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
        >
          {isDark ? <FontAwesomeIcon size="lg" icon={faSun} /> : <FontAwesomeIcon size="lg" icon={faMoon} />}
        </button>

        {/* Close button (Right side) */}
        <button
          onClick={onClose}
          className="p-3 transition hover:opacity-80"
          style={{ color: 'var(--text-secondary)' }}
          aria-label="Close profile modal"
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

      </div>

      {/* Profile Header */}
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
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {portfolioData.name}
        </h1>
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
          {portfolioData.title}
        </p>
      </div>

      {/* Stats */}
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

      {/* Action Buttons (Tabs) */}
      {/* Removed 'relative' since the animated bar is gone. */}
      <div className="flex gap-4 px-8 py-6 border-b" style={{ borderColor: 'var(--border-light)' }}>
        
        {/* The Animated Active Bar is REMOVED here */}


        {/* Interests Button */}
        <button 
          onClick={() => setActiveTab('interests')}
          // Removed transition and z-10 for direct change
          className={`flex-1 font-medium py-3 px-6 rounded-full ${
            activeTab === 'interests' ? 'shadow-lg' : 'opacity-100' // Keeping shadow/opacity for distinct look
          }`}
          style={{ 
            background: activeTab === 'interests' ? 'var(--text-primary)' : 'var(--bg-surface)', 
            color: activeTab === 'interests' ? 'var(--bg-base)' : 'var(--text-primary)',
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            <span className="hidden sm:inline">Interests</span>
          </div>
        </button>

        {/* Favorites Button */}
        <button 
          onClick={() => setActiveTab('favorites')}
          // Removed transition and z-10 for direct change
          className={`flex-1 font-medium py-3 px-6 rounded-full ${
            activeTab === 'favorites' ? 'shadow-lg' : 'opacity-100' // Keeping shadow/opacity for distinct look
          }`}
          style={{ 
            background: activeTab === 'favorites' ? 'var(--text-primary)' : 'var(--bg-surface)', 
            color: activeTab === 'favorites' ? 'var(--bg-base)' : 'var(--text-primary)',
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            <span className="hidden sm:inline">Favorites</span>
          </div>
        </button>
      </div>
      
      {/* ------------------------------------- */}
      {/* Dynamic Content */}
      <div className="px-8 py-6">
        
        {/* Interests Content */}
        {activeTab === 'interests' && (
            <div>
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
            </div>
        )}

        {/* Favorites Content (New Section) */}
        {activeTab === 'favorites' && (
            <div>
                <h2 
                    className="text-sm font-medium uppercase tracking-wider mb-4"
                    style={{ color: 'var(--text-primary)' }}
                >
                    FAVORITE TOOLS & RESOURCES
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {portfolioData.tools.map((tool, index) => (
                        <div 
                            key={index}
                            className="p-4 rounded-lg border"
                            style={{ 
                                borderColor: 'var(--border-light)',
                                background: 'var(--bg-surface)'
                            }}
                        >
                            <div className="text-right">
                                {/* Tag (Looks like a simple tag badge in the screenshot) */}
                                <span 
                                    className="px-2 py-0.5 text-xs font-semibold rounded"
                                    style={{ 
                                        color: 'var(--text-primary)',
                                        background: 'var(--bg-elevated)', // Slightly darker background for the tag
                                        border: '1px solid var(--border-medium)'
                                    }}
                                >
                                    {tool.tag}
                                </span>
                            </div>
                            <h3 className="font-semibold mt-1 mb-1" style={{ color: 'var(--text-primary)' }}>
                                {tool.name}
                            </h3>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                {tool.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Note at the bottom */}
                <p className="text-xs mt-6" style={{ color: 'var(--text-tertiary)' }}>
                    Tools I use daily to build and create
                </p>
            </div>
        )}
        
        {/* Status (Appears below both tabs, so outside the conditional rendering) */}
        <div 
          className="rounded-lg p-4 border mt-6" // Added margin top for spacing
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