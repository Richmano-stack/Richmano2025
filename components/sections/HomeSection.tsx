import React from 'react';
import { Section } from '../common/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface HomeSectionProps {
  data: any;
  scrollToSection: (id: string) => void;
}

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
} as const;

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const HomeSection: React.FC<HomeSectionProps> = ({ data, scrollToSection }) => (
  <Section
    id="home"
    className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden"
  >
    {/* Subtle Background Gradient */}
    <div className="absolute inset-0 pointer-events-none opacity-20" style={{
      background: 'radial-gradient(circle at 50% 50%, var(--color-accent) 0%, transparent 50%)'
    }}></div>

    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 p-4 relative z-10">

      {/* LEFT BLOCK: HERO TEXT */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 text-center md:text-left py-6 md:py-20"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={textVariant} className="text-sm sm:text-xl mb-2 font-medium tracking-wide" style={{ color: 'var(--color-accent)' }}>
          Hello, I'm
        </motion.p>
        <motion.h1
          variants={textVariant}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-3 sm:mb-4 drop-shadow-2xl"
          style={{ color: 'var(--text-primary)' }}
        >
          {data.name}
        </motion.h1>
        <motion.h2
          variants={textVariant}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          {data.title}
        </motion.h2>
        <motion.p variants={textVariant} className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 sm:mb-12 px-0 md:pr-4 leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
          {data.tagline}
        </motion.p>
        <motion.a
          variants={textVariant}
          onClick={() => scrollToSection('projects')}
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-full shadow-lg transition duration-300 transform cursor-pointer relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--color-accent)',
            border: '2px solid var(--color-accent)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)';
            (e.currentTarget as HTMLElement).style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)';
          }}
        >
          Explore My Work
        </motion.a>
      </motion.div>

      {/* RIGHT BLOCK: PROFILE CARD */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center py-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <motion.div
          className="text-white p-6 rounded-2xl max-w-lg shadow-2xl border"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-light)',
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Currently Section */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-1 font-semibold" style={{ color: 'var(--text-secondary)' }}>CURRENTLY</p>
            <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{data.homeCard.currentTitle}</h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{data.homeCard.currentPlace}</p>
          </div>

          {/* Ping Me Section (Icons) */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-2 font-semibold" style={{ color: 'var(--text-secondary)' }}>Ping Me</p>
            <div className="flex gap-2 text-xl">

              {data.contact.socialLinks.map((link: any) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.a>
              ))}

              {/* Email Link (mailto) */}
              <motion.a
                href={`mailto:${data.contact.email} `}
                className="p-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
                whileTap={{ scale: 0.9 }}
                aria-label="Send Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </motion.a>
            </div>
          </div>

          {/* Buddies Section (Tags) */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-2 font-semibold" style={{ color: 'var(--text-secondary)' }}>Core Technologies</p>
            <div className="flex flex-wrap gap-2">
              {data.homeCard.coreTechnologies.map((tag: string) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 text-xs sm:text-sm font-mono rounded-full transition shadow-md"
                  style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* In Development Section (Timo Card) */}
          <motion.a
            href={data.homeCard.inDevProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-xl flex justify-between items-center transition cursor-pointer border"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-light)',
            }}
            whileHover={{ scale: 1.02, backgroundColor: 'var(--border-medium)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col">
              <span className="text-xs font-semibold flex items-center mb-1" style={{ color: 'var(--text-secondary)' }}>
                <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: 'var(--text-secondary)' }}></span>
                In Development
              </span>
              <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{data.homeCard.inDevProject.title}</span>
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{data.homeCard.inDevProject.description}</span>
            </div>
            <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-secondary)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
          <motion.a
            href={data.homeCard.calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-block mt-8 px-8 sm:px-10 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-xl shadow-xl transition duration-300 transform cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.a>
        </motion.div>
      </motion.div>

    </div>
  </Section>
);