import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Online Platform',
    date: '2024',
  },
  {
    title: 'Backend Development',
    issuer: 'Online Platform',
    date: '2024',
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'Online Platform',
    date: '2024',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Certifications" subtitle="Professional certifications and courses" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(37, 99, 235, 0.1)' }}
                >
                  <Award size={20} style={{ color: 'var(--color-primary)' }} />
                </div>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-muted)' }} />
              </div>
              <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] mb-1" style={{ color: 'var(--text)' }}>
                {cert.title}
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{cert.issuer}</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
