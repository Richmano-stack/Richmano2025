import React from 'react';
import { Section } from '../common/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

interface SkillsSectionProps {
  data: any;
}

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

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => (
  <Section id="skills" className="py-12 sm:py-20">
    <motion.h2
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 sm:mb-20"
      style={{ color: 'var(--text-primary)' }}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      My <span style={{ color: 'var(--color-accent)' }}>Skills</span>
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto px-4">

      {/* Technical Skills */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
          Technical Expertise
        </h3>
        <div className="space-y-6 sm:space-y-8">
          {data.skills.map((skill: any) => (
            <motion.div key={skill.name} variants={itemVariant}>
              <div className="flex justify-between mb-2 sm:mb-3">
                <span className="font-semibold text-base sm:text-lg flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                  <FontAwesomeIcon icon={skill.icon} className="text-lg sm:text-xl" style={{ color: 'var(--color-accent)' }} />
                  {skill.name}
                </span>
                <span className="text-xs sm:text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
              </div>
              <div className="h-3 sm:h-4 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <motion.div
                  className="h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills & Tech Love & Favorite Tools */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-10 sm:space-y-12"
      >
        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--text-primary)' }}>
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {data.softSkills.map((skill: any) => (
              <motion.div
                key={skill.name}
                variants={itemVariant}
                className="p-4 sm:p-5 rounded-2xl border flex items-center gap-4 transition shadow-sm group"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }}
                whileHover={{ scale: 1.03, borderColor: 'var(--color-accent)' }}
              >
                <FontAwesomeIcon icon={skill.icon} className="text-2xl sm:text-3xl transition-colors group-hover:text-[var(--color-accent)]" style={{ color: 'var(--text-secondary)' }} />
                <span className="font-bold text-base sm:text-lg" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies I Love */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>
            Technologies I Love
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {data.techLove.map((tech: string) => (
              <motion.span
                key={tech}
                variants={itemVariant}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-default"
                style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)', borderColor: 'var(--border-light)' }}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--color-accent)', color: '#ffffff', borderColor: 'var(--color-accent)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Favorite Tools */}
        {data.favoriteTools && (
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>
              Favorite Tools
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {data.favoriteTools.map((tool: any) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariant}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border transition"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }}
                  whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
                >
                  <FontAwesomeIcon icon={tool.icon} className="text-lg sm:text-xl" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

    </div>
  </Section>
);
