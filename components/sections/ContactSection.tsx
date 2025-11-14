import React, { useState, FormEvent, ChangeEvent } from 'react'; // ⭐ Nouveaux imports pour la gestion d'état et d'événements
import { Section } from '../common/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface ContactSectionProps {
  data: any;
}

// ⭐ Endpoint Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkyapon"; 

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
    // 1. Définition des états
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // 2. Gestionnaire de changement pour les inputs
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // 3. Gestionnaire de soumission AJAX
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('sending');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Formatage des données pour Formspree
                body: JSON.stringify({
                    name: formData.name,
                    _replyto: formData.email, // Formspree pour l'adresse de réponse
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                // Réinitialiser le formulaire après un envoi réussi
                setFormData({ name: '', email: '', message: '' });
                // Le message de succès s'affichera via le rendu conditionnel
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
            console.error('Submission error:', error);
        }
    };
    
    // Le JSX utilise les états et les gestionnaires mis à jour
    return (
        <Section id="contact">
            <h2
                className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16"
                style={{ color: 'var(--text-primary)' }}
                data-aos="fade-up"
            >
                Get In <span style={{ color: 'var(--text-secondary)' }}>Touch</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12" >
                {/* A. Info & Details (Unchanged) */}
                <div className="space-y-6 sm:space-y-8" data-aos="fade-up">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                        Let's Work Together
                    </h3>
                    <p className="mb-6 text-base" style={{ color: 'var(--text-secondary)' }}>
                        I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say
                        hi, I'll try my best to get back to you!
                    </p>

                    {/* Contact Details (Unchanged) */}
                    {[
                        { label: 'Email', value: data.contact.email, icon: faEnvelope },
                        { label: 'WhatsApp', value: data.contact.phone, icon: faWhatsapp },
                        { label: 'Github', value: data.contact.Github, icon: faGithub },
                        { label: 'Linkedin', value: data.contact.Linkedin, icon: faLinkedin },
                    ].map((item: any) => (
                        <div key={item.label} className="flex items-center space-x-4 p-4 rounded-xl shadow-lg border transition duration-300 transform hover:scale-[1.01]" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
                            <span className="text-2xl" style={{ color: 'var(--text-secondary)' }}><FontAwesomeIcon icon={item.icon} /></span>
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

                {/* B. Contact Form (Géré par React/AJAX) */}
                <div className="p-6 sm:p-8 rounded-2xl shadow-xl border transition duration-300 transform hover:scale-[1.01]" data-aos="fade-up" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                        Send a Message
                    </h3>
                    <form
                        onSubmit={handleSubmit} // ⭐ Utilisation du gestionnaire React
                        className="space-y-4"
                    >
                        {/* INPUT NAME */}
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            required 
                            value={formData.name} // ⭐
                            onChange={handleChange} // ⭐
                            disabled={submissionStatus === 'sending'}
                            className="w-full p-3 rounded-lg border transition" 
                            style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} 
                        />
                        {/* INPUT EMAIL */}
                        <input 
                            type="email" 
                            name="email" // Utilisé 'email' pour la gestion locale, 'name' dans Formspree est '_replyto'
                            placeholder="Email" 
                            required 
                            value={formData.email} // ⭐
                            onChange={handleChange} // ⭐
                            disabled={submissionStatus === 'sending'}
                            className="w-full p-3 rounded-lg border transition" 
                            style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} 
                        />
                        {/* TEXTAREA MESSAGE */}
                        <textarea 
                            placeholder="Message" 
                            name="message" 
                            rows={4} 
                            required 
                            value={formData.message} // ⭐
                            onChange={handleChange} // ⭐
                            disabled={submissionStatus === 'sending'}
                            className="w-full p-3 rounded-lg border transition" 
                            style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} 
                        />
                        
                        {/* Messages d'état de soumission */}
                        {submissionStatus === 'success' && (
                            <p className="text-center font-bold p-2 rounded-lg" style={{ color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                                Message Sent Successfully! 🎉
                            </p>
                        )}
                        {submissionStatus === 'error' && (
                            <p className="text-center font-bold p-2 rounded-lg" style={{ color: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                                Error sending message. Please try again! 😔
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={submissionStatus === 'sending' || submissionStatus === 'success'}
                            className="w-full py-3 font-bold rounded-lg transition duration-300 active:scale-[0.99] shadow-md"
                            style={{ 
                                backgroundColor: submissionStatus === 'sending' ? 'var(--text-tertiary)' : 'var(--border-medium)', 
                                color: 'var(--text-primary)',
                                opacity: submissionStatus === 'sending' || submissionStatus === 'success' ? 0.7 : 1, // Opacité si désactivé
                                cursor: submissionStatus === 'sending' || submissionStatus === 'success' ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {/* Texte du bouton selon l'état */}
                            {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};