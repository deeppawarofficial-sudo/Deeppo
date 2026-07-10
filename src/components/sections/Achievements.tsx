import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { achievements } from '../../data/content';

export default function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Achievements" subtitle="Milestones along my journey" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(37, 99, 235, 0.1)' }}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-2" style={{ color: 'var(--text)' }}>
                {achievement.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
