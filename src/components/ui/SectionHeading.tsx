import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4"
        style={{ color: 'var(--text)' }}
      >
        {title}
        <span className="gradient-text">.</span>
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
      <motion.div
        className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mt-6"
        style={align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}}
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </motion.div>
  );
}
