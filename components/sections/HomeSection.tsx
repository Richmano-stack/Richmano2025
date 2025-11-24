<<<<<<< HEAD
import React from 'react';
import { Section } from '../common/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
=======
import React from "react";
import { Section } from "../common/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779

interface HomeSectionProps {
  data: any;
  scrollToSection: (id: string) => void;
}

<<<<<<< HEAD
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
=======
const IconButton = ({
  children,
  href,
  label,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="
      p-4 w-8 h-8 rounded-md flex items-center justify-center 
      transition border 
      bg-[var(--bg-surface)]
      text-[var(--text-secondary)]
      hover:bg-[var(--border-medium)]
    "
  >
    {children}
  </a>
);

const Tag = ({ label }: { label: string }) => (
  <span
    className="
      px-3 py-1 text-xs sm:text-sm font-mono rounded-full shadow-md 
      transition bg-[var(--bg-surface)] text-[var(--text-secondary)]
      hover:bg-[var(--border-medium)]
    "
  >
    {label}
  </span>
);

export const HomeSection: React.FC<HomeSectionProps> = ({
  data,
  scrollToSection,
}) => (
  <Section
    id="home"
    className="min-h-screen pt-16 flex items-center justify-center"
  >
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 p-4">
      {/* LEFT */}
      <div
        className="relative z-10 w-full md:w-1/2 text-center md:text-left py-10 md:py-20"
        data-aos="fade-up"
      >
        <p className="text-base sm:text-xl mb-2 text-[var(--text-secondary)]">
          Hello, I'm
        </p>

        <h1
          className="
            text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight 
            mb-4 drop-shadow-lg text-[var(--text-primary)]
          "
        >
          {data.name}
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-6 text-[var(--text-secondary)]">
          {data.title}
        </h2>

        <p className="text-lg max-w-2xl mx-auto md:mx-0 mb-10 text-[var(--text-secondary)]">
          {data.tagline}
        </p>

        <button
          onClick={() => scrollToSection("projects")}
          className="
            px-10 py-4 font-bold text-lg rounded-xl shadow-xl transition 
            hover:scale-[1.05] border 
            bg-[var(--bg-card)] 
            text-[var(--text-primary)]
            border-[var(--border-light)]
            hover:bg-[var(--border-medium)]
          "
        >
          Explore My Work
        </button>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex justify-center py-10" data-aos="fade-up">
        <div
          className="
            p-6 rounded-2xl max-w-lg shadow-2xl border 
            bg-[var(--bg-card)] 
            border-[var(--border-light)]
          "
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
        >
          {/* CURRENTLY */}
          <div className="mb-6">
<<<<<<< HEAD
            <p className="uppercase text-xs mb-1 font-semibold" style={{ color: 'var(--text-secondary)' }}>CURRENTLY</p>
            <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{data.homeCard.currentTitle}</h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{data.homeCard.currentPlace}</p>
=======
            <p className="uppercase text-xs mb-1 font-semibold text-[var(--text-secondary)]">
              CURRENTLY
            </p>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Full-Stack Developer & Technical Lead
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">@ FREELANCING</p>
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
          </div>

          {/* PING ME */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-2 font-semibold text-[var(--text-secondary)]">
              Ping Me
            </p>
            <div className="flex gap-2 text-xl">
<<<<<<< HEAD

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
=======
              <IconButton href="https://github.com/Richmano-stack" label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </IconButton>

              <IconButton
                href="https://www.linkedin.com/in/nasy-richmano-15bb432b7"
                label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </IconButton>

              <IconButton
                href="https://www.facebook.com/share/17WDLA7KDe/"
                label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </IconButton>

              <IconButton href="mailto:nasyrichmano@gmail.com" label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </IconButton>
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
            </div>
          </div>

          {/* TAGS */}
          <div className="mb-6">
<<<<<<< HEAD
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
=======
            <p className="uppercase text-xs mb-2 font-semibold text-[var(--text-secondary)]">
              Core Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
                "Vite",
                "Google Gemini API",
                "REST APIs",
                "Node.js",
                "Git/GitHub",
                "Vercel",
                "Framer Motion",
              ].map((tag) => (
                <Tag key={tag} label={tag} />
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
              ))}
            </div>
          </div>

<<<<<<< HEAD
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
=======
          {/* IN DEVELOPMENT */}
          <div
            className="
              p-3 rounded-xl flex justify-between items-center transition 
              cursor-pointer border
              bg-[var(--bg-surface)]
              border-[var(--border-light)]
              hover:bg-[var(--border-medium)]
            "
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
          >
            <div className="flex flex-col">
              <span className="text-xs font-semibold flex items-center mb-1 text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full mr-2 animate-pulse bg-[var(--text-secondary)]"></span>
                In Development
              </span>
<<<<<<< HEAD
              <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{data.homeCard.inDevProject.title}</span>
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{data.homeCard.inDevProject.description}</span>
=======

              <span className="font-bold text-lg text-[var(--text-primary)]">
                Madagascar
              </span>

              <span className="text-xs text-[var(--text-secondary)]">
                Madagascar AI Historian: An intelligent platform leveraging LLMs.
              </span>
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
            </div>

            <svg
              className="w-5 h-5 ml-auto text-[var(--text-secondary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
<<<<<<< HEAD
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
=======
          </div>

          {/* CTA Button */}
          <a
            href="https://cal.com/nasy-richmano-zs9hlu/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block mt-8 px-10 py-4 font-bold text-lg rounded-xl shadow-xl 
              transition hover:scale-[1.05] border
              bg-[var(--bg-card)]
              text-[var(--text-primary)]
              border-[var(--border-light)]
              hover:bg-[var(--border-medium)]
            "
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
          >
            <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
            Book a discovery call
<<<<<<< HEAD
          </motion.a>
        </motion.div>
      </motion.div>

=======
          </a>
        </div>
      </div>
>>>>>>> dc924b98ae77dad590a266b4cd0e5db081818779
    </div>
  </Section>
);
