import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faReact, faPython, faHtml5, faGithub, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
    { 
      id: 1,
      title: "Madagascar Presidents Website",
      tech: "Next.js, OpenAI API, Tailwind CSS",
      desc: "A Next.js project showcasing Madagascar's political history since 1958, featuring an AI historian assistant for exploration—a demonstration of powerful LLM integration.",
      liveLink: "https://madagascar-nu.vercel.app/",
      githubLink: "https://github.com/Richmano-stack/madagascar",
    },
    { 
      id: 2,
      title: "Photo Resizer App",
      tech: "Next.js, React, Tailwind CSS",
      desc: "A clean, responsive web application built for resizing and compressing images with an intuitive, seamless user interface.",
      liveLink: "https://photo-resize-two.vercel.app/",
      githubLink: "https://github.com/Richmano-stack/photo-resize",
    },
  ],
  about: {
    summary: "With coding experience since 2021, I've evolved from learning Python, HTML, and CSS to mastering JavaScript and modern frameworks like React and Next.js. My journey started with small personal projects, gradually growing into full-stack development with LLM and API integrations. Alongside my coding journey, I began working at Concentrix in 2021, quickly moving from Customer Advisor to Team Leader within months, honing leadership and communication skills. Today, I combine technical expertise and leadership to build digital experiences that are both functional and impactful.",
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
  },
  homeCard: {
    currentTitle: "NextJS Developer",
    currentPlace: "@ FREELANCING",
    calendarLink: "https://cal.com/nasy-richmano-zs9hlu/30min?overlayCalendar=true",
    inDevProject: {
      title: "Madagascar",
      description: "Discover Madagascar Political history with an AI assistant",
      link: "https://madagascar-nu.vercel.app/"
    },
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
  }
}
