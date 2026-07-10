import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { socialLinks } from '../../data/content';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { Mail, Code2, Send, MapPin, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Mail, Linkedin: FaLinkedin, Github: SiGithub, Code2 };

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project or opportunity" />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3" style={{ color: 'var(--text)' }}>
                Let's work together
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm always open to discussing new opportunities, collaborations, or interesting projects. Feel free to reach out!
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <MapPin size={16} style={{ color: 'var(--color-primary)' }} />
              Pune, Maharashtra, India
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map(link => {
                const IconComp = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                    whileHover={{ borderColor: 'var(--color-primary)', x: 4, boxShadow: '0 0 20px rgba(37, 99, 235, 0.1)' }}
                  >
                    {IconComp && <IconComp size={18} />}
                    <span className="text-sm font-medium">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                    style={{ background: 'var(--bg-secondary)', borderColor: errors.name ? 'var(--color-error)' : 'var(--border)', color: 'var(--text)' }}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                    style={{ background: 'var(--bg-secondary)', borderColor: errors.email ? 'var(--color-error)' : 'var(--border)', color: 'var(--text)' }}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                  style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Message *</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300 resize-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                  style={{ background: 'var(--bg-secondary)', borderColor: errors.message ? 'var(--color-error)' : 'var(--border)', color: 'var(--text)' }}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{errors.message}</p>}
              </div>

              <div className="relative">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Send size={16} />}
                  loading={isSubmitting}
                  className="w-full"
                  type="submit"
                >
                  Send Message
                </Button>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      className="absolute inset-0 rounded-xl flex items-center justify-center gap-2 text-sm font-medium"
                      style={{ background: 'var(--color-success)', color: 'white' }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <CheckCircle2 size={18} />
                      Message sent successfully!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
