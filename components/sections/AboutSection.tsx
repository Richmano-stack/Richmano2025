import React from 'react';
import { Section } from '../common/Section';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  data: any;
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => (
  <Section id="about" className="py-12 sm:py-20">
    <motion.h2
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 sm:mb-20"
      style={{ color: 'var(--text-primary)' }}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      About <span style={{ color: 'var(--color-accent)' }}>Me</span>
    </motion.h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto px-4">

      {/* LEFT COLUMN: SUMMARY & STATS */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--text-primary)' }}>
          My Journey
        </h3>
        <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-12" style={{ color: 'var(--text-secondary)' }}>
          {data.about.summary}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {data.about.stats.map((stat: any, index: number) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 rounded-2xl border transition hover:shadow-lg"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }}
              whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
            >
              <span className="block text-4xl sm:text-5xl font-extrabold mb-2" style={{ color: 'var(--color-accent)' }}>
                {stat.count}+
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT COLUMN: TIMELINE */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative pl-6 sm:pl-8 border-l-2 mt-8 lg:mt-0"
        style={{ borderColor: 'var(--border-medium)' }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 -ml-6 sm:-ml-8 pl-6 sm:pl-8" style={{ color: 'var(--text-primary)' }}>
          Career Timeline
        </h3>

        <div className="space-y-10 sm:space-y-12">
          {data.about.timeline.map((item: any, index: number) => (
            <motion.div key={index} variants={itemVariant} className="relative">
              {/* Timeline Dot */}
              <span
                className="absolute -left-[33px] sm:-left-[41px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4"
                style={{
                  backgroundColor: 'var(--bg-base)',
                  borderColor: 'var(--color-accent)'
                }}
              ></span>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                <span className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  {item.year}
                </span>
                <h4 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h4>
              </div>
              <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </Section>
);
