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

interface HomeSectionProps {
  data: {
    name: string;
    title: string;
    tagline: string;
  };
  scrollToSection: (id: string) => void;
}

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
        >
          {/* CURRENTLY */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-1 font-semibold text-[var(--text-secondary)]">
              CURRENTLY
            </p>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Full-Stack Developer & Technical Lead
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">@ FREELANCING</p>
          </div>

          {/* PING ME */}
          <div className="mb-6">
            <p className="uppercase text-xs mb-2 font-semibold text-[var(--text-secondary)]">
              Ping Me
            </p>
            <div className="flex gap-2 text-xl">
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
            </div>
          </div>

          {/* TAGS */}
          <div className="mb-6">
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
              ))}
            </div>
          </div>

          {/* IN DEVELOPMENT */}
          <div
            className="
              p-3 rounded-xl flex justify-between items-center transition 
              cursor-pointer border
              bg-[var(--bg-surface)]
              border-[var(--border-light)]
              hover:bg-[var(--border-medium)]
            "
          >
            <div className="flex flex-col">
              <span className="text-xs font-semibold flex items-center mb-1 text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full mr-2 animate-pulse bg-[var(--text-secondary)]"></span>
                In Development
              </span>

              <span className="font-bold text-lg text-[var(--text-primary)]">
                Madagascar
              </span>

              <span className="text-xs text-[var(--text-secondary)]">
                Madagascar AI Historian: An intelligent platform leveraging LLMs.
              </span>
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
          >
            <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
            Book a discovery call
          </a>
        </div>
      </div>
    </div>
  </Section>
);
