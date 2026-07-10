import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { educationData } from '../../data/content';
import { GraduationCap, MapPin, Award, CalendarDays } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Education" subtitle="My academic background" />

        <motion.div
          className="glass-card p-8 md:p-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(37, 99, 235, 0.1)' }}
            >
              <GraduationCap size={28} style={{ color: 'var(--color-primary)' }} />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-1" style={{ color: 'var(--text)' }}>
                {educationData.degree}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-primary-light)' }}>
                  {educationData.institution}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                  <Award size={14} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                    CGPA: {educationData.cgpa}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                  <CalendarDays size={14} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                    {educationData.graduation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
