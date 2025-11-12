import React from 'react';
import { Section } from '../common/Section';
import { ProjectCard } from '../ProjectCard';

interface ProjectsSectionProps {
  data: any;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => (
  <Section id="projects" className="">
    <h2
      className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16"
      style={{ color: 'var(--text-primary)' }}
    >
      Featured <span style={{ color: 'var(--text-secondary)' }}>Projects</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {data.projects.map((project: any) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </Section>
);
