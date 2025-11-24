import React, { useState } from 'react';
import { Section } from '../common/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactSectionProps {
  data: any;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(data.contact.formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <Section id="contact" className="py-20">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In <span style={{ color: 'var(--text-secondary)' }}>Touch</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Let's Talk
          </h3>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <motion.a
              href={`mailto:${data.contact.email}`}
              className="flex items-center gap-4 text-lg transition-colors"
              style={{ color: 'var(--text-primary)' }}
              whileHover={{ x: 5, color: 'var(--text-secondary)' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              {data.contact.email}
            </motion.a>

            <motion.a
              href={`tel:${data.contact.phone}`}
              className="flex items-center gap-4 text-lg transition-colors"
              style={{ color: 'var(--text-primary)' }}
              whileHover={{ x: 5, color: 'var(--text-secondary)' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              {data.contact.phone}
            </motion.a>

            <div className="flex gap-4 mt-8">
              {data.contact.socialLinks.map((link: any) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl transition-colors"
                  style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--border-medium)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl border shadow-lg" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg outline-none border transition-colors"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}
                whileFocus={{ scale: 1.01, borderColor: 'var(--text-secondary)' }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg outline-none border transition-colors"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}
                whileFocus={{ scale: 1.01, borderColor: 'var(--text-secondary)' }}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Message</label>
              <motion.textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg outline-none border transition-colors resize-none"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}
                whileFocus={{ scale: 1.01, borderColor: 'var(--text-secondary)' }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md"
              style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-base)' }}
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
            >
              {formStatus === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <FontAwesomeIcon icon={faPaperPlane} />
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-green-500 text-center font-medium"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-500 text-center font-medium"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

      </div>
    </Section>
  );
};