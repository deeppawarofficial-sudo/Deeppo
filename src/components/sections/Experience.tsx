import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../data/content';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Experience & Leadership" subtitle="Roles that shaped my professional journey" />

        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--color-primary), var(--color-accent), transparent)' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-primary)] -translate-x-1/2 mt-8 z-10 shadow-[0_0_12px_rgba(37,99,235,0.5)]" />

              {/* Spacer for alignment */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <motion.div
                  className="glass-card p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={16} style={{ color: 'var(--color-primary)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-primary-light)' }}>
                      {exp.organization}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-2" style={{ color: 'var(--text)' }}>
                    {exp.role}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {exp.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
