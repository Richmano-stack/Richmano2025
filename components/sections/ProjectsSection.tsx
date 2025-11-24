import React from 'react';
import { Section } from '../common/Section';
import { ProjectCard } from '../ProjectCard';
import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  data: any;
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => (
  <Section id="projects" className="py-20">
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold text-center mb-16"
      style={{ color: 'var(--text-primary)' }}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Featured <span style={{ color: 'var(--text-secondary)' }}>Projects</span>
    </motion.h2>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {data.projects.map((project: any) => (
        <motion.div key={project.id} variants={cardVariant} className="h-full">
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  </Section>
);
