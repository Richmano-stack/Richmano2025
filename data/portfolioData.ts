import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faReact, faPython, faHtml5, faGithub, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const PORTFOLIO_DATA = {
  name: "Richmano NASY",
  title: "Full-Stack Developer",
  tagline: "Building scalable, high-performance web applications with modern technologies and AI integration.",
  skills: [
    { name: "React.js", level: 90, color: 'var(--text-secondary)', icon: faReact },
    { name: "Next.js", level: 85, color: 'var(--text-secondary)', icon: faCode },
    { name: "JavaScript", level: 88, color: 'var(--text-secondary)', icon: faCode },
    { name: "HTML/CSS", level: 92, color: 'var(--text-secondary)', icon: faHtml5 },
    { name: "Python", level: 60, color: 'var(--text-secondary)', icon: faPython },
  ],
  techLove: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vite", "Google Gemini API", "REST APIs", "Node.js", "Git/GitHub", "Vercel", "Framer Motion"],
  softSkills: [
    { name: "Leadership", level: 85, icon: faUser },
    { name: "Communication", level: 90, icon: faEnvelope },
  ],
  projects: [
    {
      id: 1,
      title: "Madagascar Presidents Website",
      tech: "Next.js, OpenAI API, Tailwind CSS",
      desc: "A comprehensive digital archive of Madagascar's political history. Features an integrated AI historian powered by OpenAI, allowing users to interactively explore historical events and figures through natural language.",
      liveLink: "https://madagascar-nu.vercel.app/",
      githubLink: "https://github.com/Richmano-stack/madagascar",
      features: ["AI Historian Integration"],
    },
    {
      id: 2,
      title: "Photo Resizer App",
      tech: "Next.js, React, Tailwind CSS",
      desc: "A high-performance image processing tool built for speed and privacy. Offers client-side compression and resizing with a sleek, responsive interface, ensuring zero server latency.",
      liveLink: "https://typeracing-gray.vercel.app/",
      githubLink: "https://github.com/Richmano-stack/photo-resize",
      features: [],
    },
    {
      id: 3,
      title: "Typeracing Game",
      tech: "Next.js, React, Tailwind CSS, Prisma, Supabase, PostgreSQL, Auth.js",
      desc: "A competitive real-time typing platform. Architected with a robust full-stack solution using Supabase and Prisma to track live performance metrics, global leaderboards, and user progression.",
      liveLink: "https://typeracing-gray.vercel.app/",
      githubLink: "https://github.com/Richmano-stack/photo-resize",
      features: [],
    },
  ],
  about: {
    summary: "I am a Full-Stack Developer with a passion for building software that matters. My journey began in 2020, evolving from basic scripts to complex, AI-driven web applications. With a strong foundation in React and Next.js, I bridge the gap between technical complexity and user experience. My background in leadership at Concentrix has equipped me with the soft skills to drive projects forward, ensuring that every line of code contributes to a larger strategic vision.",
    stats: [
      { count: 6, label: "Full-Stack Projects" },
      { count: 4, label: "Years Coding" },
      { count: 3, label: "Years Leadership" },
    ],
    timeline: [
      { year: 2024, title: "React & Next.js Focus", desc: "Specializing in modern web frameworks and AI integration" },
      { year: 2022, title: "JavaScript Developer", desc: "Built multiple projects in JS and React" },
      { year: 2021, title: "Team Leader at Concentrix", desc: "Promoted after 3 months as Customer Advisor" },
      { year: 2020, title: "Started Coding Journey", desc: "Python, HTML, CSS basics" },
    ]
  },
  contact: {
    email: "nasyrichmano@gmail.com",
    phone: "(+261) 38 24 212 75",
    location: "Madagascar",
    Github: "@Richmano-stack",
    Linkedin: "Richmano NASY",
    formEndpoint: "https://formspree.io/f/xdkyapon",
    socialLinks: [
      {
        icon: faGithub,
        label: "GitHub Profile",
        url: "https://github.com/Richmano-stack",
      },
      {
        icon: faLinkedin,
        label: "LinkedIn Profile",
        url: "https://www.linkedin.com/in/nasy-richmano-15bb432b7",
      },
      {
        icon: faFacebook,
        label: "Facebook Profile",
        url: "https://www.facebook.com/share/17WDLA7KDe/",
      },
    ]
  },
  homeCard: {
    currentTitle: "Full-Stack Developer & Technical Lead",
    currentPlace: "@ FREELANCING",
    calendarLink: "https://cal.com/nasy-richmano-zs9hlu/30min?overlayCalendar=true",
    inDevProject: {
      title: "Madagascar",
      description: "Madagascar AI Historian: An intelligent platform leveraging LLMs to explore historical data.",
      link: "https://madagascar-nu.vercel.app/"
    },
    coreTechnologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vite", "Google Gemini API", "REST APIs", "Node.js", "Git/GitHub", "Vercel", "Framer Motion"],
  },
  footer: {
    copyrightText: `© ${new Date().getFullYear()} Richmano. All rights reserved.`,
    madeWithText: "Made with passion by Richmano.",
  },
  favoriteTools: [
    { name: "VS Code", icon: faCode },
    { name: "Postman", icon: faCode },
    { name: "Figma", icon: faCode },
    { name: "Git", icon: faGithub },
    { name: "Docker", icon: faCode },
    { name: "Vercel", icon: faCode },
  ]
}
