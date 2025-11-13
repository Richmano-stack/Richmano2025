import React from 'react';
import { Section } from '../common/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface ContactSectionProps {
  data: any;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => (
  <Section id="contact">
    <h2
      className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16"
      style={{ color: 'var(--text-primary)' }}
      data-aos="fade-up"
    >
      Get In <span style={{ color: 'var(--text-secondary)' }}>Touch</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-up">
      {/* A. Info & Details */}
      <div className="space-y-6 sm:space-y-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Let's Work Together
        </h3>
        <p className="mb-6 text-base" style={{ color: 'var(--text-secondary)' }}>
          I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>

        {/* Contact Details */}
        {[
          { label: 'Email', value: data.contact.email, icon: faEnvelope },
          { label: 'Phone', value: data.contact.phone, icon: faPhone },
          { label: 'Location', value: data.contact.location, icon: faMapMarkerAlt },
        ].map((item: any) => (
          <div key={item.label} className="flex items-center space-x-4 p-4 rounded-xl shadow-lg border transition duration-300 transform hover:scale-[1.01]" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
            <span className="text-2xl"><FontAwesomeIcon icon={item.icon} /></span>
            <div>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                {item.label}
              </p>
              <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* B. Contact Form (Placeholder) */}
      <div className="p-6 sm:p-8 rounded-2xl shadow-xl border transition duration-300 transform hover:scale-[1.01]" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
        <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          Send a Message
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Form Data: Simulated');
          }}
          className="space-y-4"
        >
          <input type="text" placeholder="Name" required className="w-full p-3 rounded-lg border transition" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} />
          <input type="email" placeholder="Email" required className="w-full p-3 rounded-lg border transition" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} />
          <textarea placeholder="Message" rows={4} required className="w-full p-3 rounded-lg border transition" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} />
          <button
            type="submit"
            className="w-full py-3 font-bold rounded-lg transition duration-300 active:scale-[0.99] shadow-md"
            style={{ backgroundColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </Section>
);
