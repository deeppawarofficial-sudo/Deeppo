import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Newspaper } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Blog" subtitle="Thoughts, tutorials, and insights" />

        <motion.div
          className="glass-card p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: 'rgba(37, 99, 235, 0.1)' }}
          >
            <Newspaper size={28} style={{ color: 'var(--color-primary)' }} />
          </div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3" style={{ color: 'var(--text)' }}>
            Coming Soon
          </h3>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            I'm working on writing articles about backend development, system design, and machine learning. Stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
