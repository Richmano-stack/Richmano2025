import { faEnvelope, faH, faUser } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

export const PORTFOLIO_DATA = {
  name: "Richmano NASY",
  title: "Full-Stack Developer",
  tagline: "Crafting responsive digital experiences with React, Next.js, and powerful AI integration.",
  skills: [
    { name: "React.js", level: 90, color: 'var(--text-secondary)', icon: faReact },
    { name: "Next.js", level: 85, color: 'var(--text-secondary)', icon: faCode },
    { name: "JavaScript", level: 88, color: 'var(--text-secondary)', icon: faCode },
    { name: "HTML/CSS", level: 92, color: 'var(--text-secondary)', icon: faHtml5 },
    { name: "Python", level: 60, color: 'var(--text-secondary)', icon: faPython },
  ],
  techLove: ["React","Next.js","Tailwind CSS","TypeScript","Vite","Google Gemini API","REST APIs","Node.js","Git/GitHub","Vercel","Framer Motion"],
  softSkills: [
    { name: "Leadership", level: 85, icon: faUser },
    { name: "Communication", level: 90, icon: faEnvelope },
  ],
  projects: [
    { id: 1, title: "Madagascar Presidents Website", tech: "Next.js, OpenAI API, Tailwind CSS", desc: "A Next.js project showcasing Madagascar's political history since 1958, featuring an AI historian assistant for exploration—a demonstration of powerful LLM integration." },
    { id: 2, title: "Photo Resizer App", tech: "Next.js, React, Tailwind CSS", desc: "A clean, responsive web application built for resizing and compressing images with an intuitive, seamless user interface." },
  ],
  about: {
    summary: "With 5 years of passionate coding experience, I've evolved from a curious beginner to a skilled full-stack developer specializing in modern web technologies. My journey began with HTML and CSS, but quickly expanded to embrace the power of React, Next.js, and API development, including LLM integrations. What sets me apart is my unique blend of technical expertise and leadership experience. Having spent 4 years as a call center supervisor, I've honed my communication skills, learned to manage teams effectively, and developed a deep understanding of user needs and business requirements. I believe in creating not just functional applications, but digital experiences that delight users and solve real-world problems. Every line of code I write is driven by passion, precision, and a commitment to excellence.",
    stats: [
      { count: 6, label: "Full-Stack Projects" },
      { count: 5, label: "Years Coding" },
      { count: 4, label: "Years Leadership" },
    ],
    timeline: [
      { year: 2024, title: "Senior Full-Stack Developer", desc: "Mastering advanced React patterns and AI/LLM integration" },
      { year: 2022, title: "Full-Stack Developer", desc: "Built 6 production-ready applications" },
      { year: 2020, title: "Call Center Supervisor", desc: "Led teams while learning to code" },
      { year: 2019, title: "Started Coding Journey", desc: "First 'Hello World' in JavaScript" },
    ]
  },
  contact: {
    email: "nasyrichmano@gmail.com",
    phone: "(+261) 38 24 212 75",
    location: "Madagascar",
  }
};
