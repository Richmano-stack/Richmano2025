import React from 'react';
import { Section } from '../common/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faLinkedin, faTwitter, faXTwitter} from '@fortawesome/free-brands-svg-icons';

interface HomeSectionProps {
  data: {
    name: string;
    title: string;
    tagline: string;
  };
  scrollToSection: (id: string) => void;
}


export const HomeSection: React.FC<HomeSectionProps> = ({ data, scrollToSection }) => (
  <Section 
    id="home" 
    className="min-h-screen pt-16 flex items-center justify-center"
  >
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 p-4">

      {/* LEFT BLOCK: HERO TEXT */}
      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left py-10 md:py-20">
        <p className="text-base sm:text-xl mb-2" style={{ color: 'var(--text-secondary)' }}>
          Hello, I'm
        </p>
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4 drop-shadow-lg"
          style={{ color: 'var(--text-primary)' }}
        >
          {data.name}
        </h1>
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-light mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {data.title}
        </h2>
        <p className="text-lg max-w-2xl mx-auto md:mx-0 mb-10 px-0 md:pr-4" style={{ color: 'var(--text-secondary)' }}>
          {data.tagline}
        </p>
        <a
          onClick={() => scrollToSection('projects')}
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.05] cursor-pointer"
          style={{
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-light)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--border-medium)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-card)';
          }}
        >
          View My Work
        </a>
      </div>

      {/* RIGHT BLOCK: PROFILE CARD */}
      <div className="w-full md:w-1/2 flex justify-center py-10" >
        <div 
          className="text-white p-6 rounded-2xl max-w-lg shadow-2xl border"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-light)',
          }}
        >
          {/* Currently Section */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-1 font-semibold" style={{ color: 'var(--text-secondary)' }}>CURRENTLY</p>
            <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>NextJS Developer</h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>@ FREELANCING</p>
          </div>

          {/* Ping Me Section (Icons) */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-2 font-semibold" style={{ color: 'var(--text-secondary)' }}>Ping Me</p>
            <div className="flex gap-2 text-xl">
              <button 
                className="p-2 rounded transition"
                style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--border-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
              >
                <FontAwesomeIcon icon={faGithub} />
              </button>
              <button 
                className="p-2 rounded transition"
                style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--border-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
              <button 
                className="p-2 rounded transition"
                style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--border-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button 
                className="p-2 rounded transition"
                style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--border-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>
          </div>

          {/* Buddies Section (Tags) */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-2 font-semibold" style={{ color: 'var(--text-secondary)' }}>My Buddies</p>
            <div className="flex flex-wrap gap-2">
              {["React","Next.js","Tailwind CSS","TypeScript","Vite","Google Gemini API","REST APIs","Node.js","Git/GitHub","Vercel","Framer Motion"].map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs sm:text-sm font-mono rounded-full transition shadow-md"
                  style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--border-medium)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-surface)';
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* In Development Section (Timo Card) */}
          <div 
            className="p-3 rounded-xl flex justify-between items-center transition cursor-pointer border"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-light)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--border-medium)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-surface)';
            }}
          >
            <div className="flex flex-col">
              <span className="text-xs font-semibold flex items-center mb-1" style={{ color: 'var(--text-secondary)' }}>
                <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: 'var(--text-secondary)' }}></span>
                In Development
              </span>
              <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Madagascar</span>
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Discover Madagascar Political history with an AI assistant</span>
            </div>
            <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
            <a
            onClick={() => scrollToSection('projects')}
            className="inline-block mt-8 px-8 sm:px-10 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.05] cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-light)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--border-medium)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-card)';
            }}
          >
            <span className="mr-2"><FontAwesomeIcon icon={faCalendarDays} /></span>
            Book a discovery call
          </a>
        </div>
      </div>

    </div>
  </Section>
);