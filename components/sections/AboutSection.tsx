import React from 'react';
import { Section } from '../common/Section';

interface AboutSectionProps {
  data: any;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => (
  <Section id="about">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16" style={{ color: 'var(--text-primary)' }} data-aos="fade-up">
      About <span style={{ color: 'var(--text-secondary)' }}>Me</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start" data-aos="fade-up">
      <div className="md:col-span-2">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>My Journey</h3>
        <p className="mb-6 leading-relaxed text-base" style={{ color: 'var(--text-secondary)' }}>{data.about.summary}</p>

        <div className="mt-8 grid grid-cols-3 gap-4 p-4 sm:p-6 rounded-xl shadow-inner" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)', border: '1px solid var(--border-light)' }}>
          {data.about.stats.map((stat: any) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-extrabold mb-1" style={{ color: 'var(--text-primary)' }}>{stat.count}</p>
              <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Timeline */}
      <div className="md:col-span-1 border-l-4 pl-4 sm:pl-6 space-y-8" style={{ borderLeftColor: 'var(--border-medium)' }} data-aos="fade-up">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Career Timeline</h3>
        {data.about.timeline.map((event: any) => (
          <div key={event.year} className="relative">
            <div className="absolute -left-6 sm:-left-8 top-1 w-4 h-4 rounded-full border-4" style={{ backgroundColor: 'var(--text-secondary)', borderColor: 'var(--bg-base)' }}></div>
            <p className="text-xl font-bold" style={{ color: 'var(--text-primary)' }} data-aos="fade-up">{event.year}</p>
            <p className="text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>{event.title}</p>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
