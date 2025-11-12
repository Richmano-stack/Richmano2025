import React from 'react';
import { Section } from '../common/Section';
import { SkillBar } from '../common/SkillBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



interface SkillsSectionProps {
  data: any;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => (
  <Section id="skills" className="">
    <h2
      className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16"
      style={{ color: 'var(--text-primary)' }}
    >
      Skills & <span style={{ color: 'var(--text-secondary)' }}>Expertise</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-6 sm:p-8 rounded-2xl shadow-xl border transition duration-300 transform hover:scale-[1.01]" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--text-primary)' }}>
          Technical Proficiency
        </h3>
        {data.skills.map((skill: any) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>

      <div>
        <div className="p-6 sm:p-8 rounded-2xl shadow-xl border mb-8 transition duration-300 transform hover:scale-[1.01]" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-secondary)' }}>
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {data.softSkills.map((skill: any) => (
              <div key={skill.name} className="p-3 sm:p-4 rounded-lg text-center shadow-inner" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <span className="text-2xl sm:text-3xl block mb-1"><FontAwesomeIcon icon={skill.icon} /></span>
                <p className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                  {skill.name}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl shadow-xl border transition duration-300 transform hover:scale-[1.01]" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Technologies I Love
          </h3>
          <div className="flex flex-wrap gap-3">
            {data.techLove.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs sm:text-sm font-mono rounded-full transition shadow-md"
                style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--border-medium)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-surface)';
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);
