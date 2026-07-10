import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';
import { aboutData } from '../../data/content';
import { User, Code2, Target, TrendingUp } from 'lucide-react';

const statIcons = [Code2, Target, TrendingUp, User];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {aboutData.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Location badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span>📍</span> Pune, Maharashtra, India
            </motion.div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {aboutData.stats.map((stat, i) => {
              const IconComp = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex justify-center mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(37, 99, 235, 0.1)' }}
                    >
                      <IconComp size={20} style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] mb-1" style={{ color: 'var(--text)' }}>
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.label === 'CGPA' ? '' : '+'}
                      decimals={stat.label === 'CGPA' ? 2 : 0}
                    />
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
