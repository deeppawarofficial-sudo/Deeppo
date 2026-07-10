import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { codingJourney } from '../../data/content';

export default function CodingJourney() {
  return (
    <section id="coding-journey" className="relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Coding Journey" subtitle="Key milestones in my development path" />

        <div className="relative">
          {/* Horizontal line (desktop) / vertical line (mobile) */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, var(--color-primary), var(--color-accent), transparent)' }}
          />
          <div
            className="md:hidden absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--color-primary), var(--color-accent), transparent)' }}
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {codingJourney.map((milestone, i) => (
              <motion.div
                key={i}
                className="relative flex md:flex-col items-start md:items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Dot */}
                <div className="relative z-10 ml-3.5 md:ml-0 md:mb-4">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] shadow-[0_0_12px_rgba(37,99,235,0.5)]" />
                </div>

                {/* Card */}
                <div className="ml-6 md:ml-0 glass-card p-4">
                  <span className="text-xs font-bold gradient-text">{milestone.year}</span>
                  <h4 className="text-sm font-semibold mt-1 mb-1 font-[family-name:var(--font-heading)]" style={{ color: 'var(--text)' }}>
                    {milestone.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
