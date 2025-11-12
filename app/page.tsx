'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeSection } from '@/components/sections/HomeSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

// =================================================================
// CUSTOM HOOKS
// =================================================================

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let rafId: number | null = null;

    const getCenterSection = () => {
      const centerY = window.innerHeight / 2;
      let foundId: string | null = null;
      let closestDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // If center is inside the element, it's the active one
        if (rect.top <= centerY && rect.bottom >= centerY) {
          foundId = id;
          closestDistance = 0;
          return;
        }
        // Otherwise measure distance from element center to viewport center
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - centerY);
        if (distance < closestDistance) {
          closestDistance = distance;
          foundId = id;
        }
      });
      return foundId || sectionIds[0];
    };

    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const id = getCenterSection();
        if (id && id !== activeSection) setActiveSection(id);
      });
    };

    // Run once to set initial
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds, activeSection]);

  return activeSection;
};


export default function Home() {
  const data = PORTFOLIO_DATA;

  const [isDarkMode, setIsDarkMode] = useState(true);
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeSection = useActiveSection(navItems.map((item) => item.id));
  // initialize theme from localStorage (if present) or default to dark
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light') {
        setIsDarkMode(false);
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        // ensure no data-theme set so CSS defaults to dark
        document.documentElement.removeAttribute('data-theme');
      }
    } catch (e) {
      // ignore (e.g., server or privacy mode)
    }
  }, []);

  // apply theme change when toggled and persist
  useEffect(() => {
    try {
      if (!isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      }
    } catch (e) {
      // ignore
    }
  }, [isDarkMode]);

  return (
    <div className="font-sans" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <Header
        name={data.name}
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Sections */}
      <HomeSection data={data} scrollToSection={scrollToSection} />
      <SkillsSection data={data} />
      <ProjectsSection data={data} />
      <AboutSection data={data} />
      <ContactSection data={data} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
