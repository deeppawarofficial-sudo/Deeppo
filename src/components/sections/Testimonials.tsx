import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Team Lead',
    role: 'Hackathon Partner',
    quote: 'Deep\'s backend architecture skills were instrumental in our hackathon victory. His ability to design scalable APIs under pressure is remarkable.',
  },
  {
    name: 'Faculty Mentor',
    role: 'VIIT Pune',
    quote: 'One of the most dedicated students I\'ve mentored. Deep consistently goes beyond coursework to build production-quality projects.',
  },
  {
    name: 'Peer Developer',
    role: 'Project Collaborator',
    quote: 'Working with Deep on the SmartTourist project was a great experience. His backend integration with Solana was impressive.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(prev => (prev + 1) % testimonials.length);
  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Testimonials" subtitle="What people say about working with me" />

        <motion.div
          className="glass-card p-8 md:p-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote size={40} className="absolute top-6 left-6 opacity-10" style={{ color: 'var(--color-primary)' }} />

          <div className="min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg md:text-xl leading-relaxed mb-6 italic" style={{ color: 'var(--text-secondary)' }}>
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-semibold font-[family-name:var(--font-heading)]" style={{ color: 'var(--text)' }}>
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              className="p-2 rounded-xl border cursor-pointer transition-all"
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              onClick={prev}
              whileHover={{ scale: 1.1, borderColor: 'var(--color-primary)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i === current ? 'w-6 bg-[var(--color-primary)]' : ''
                  }`}
                  style={i !== current ? { background: 'var(--border-light)' } : {}}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>

            <motion.button
              className="p-2 rounded-xl border cursor-pointer transition-all"
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              onClick={next}
              whileHover={{ scale: 1.1, borderColor: 'var(--color-primary)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
