import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

export default function Stats() {
  // Placeholder GitHub contribution data
  const weeks = 52;
  const days = 7;
  const generateContributions = () => {
    const data: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        week.push(Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0);
      }
      data.push(week);
    }
    return data;
  };

  const contributions = generateContributions();
  const intensityColors = [
    'var(--bg-card)',
    'rgba(37, 99, 235, 0.2)',
    'rgba(37, 99, 235, 0.4)',
    'rgba(37, 99, 235, 0.6)',
    'rgba(37, 99, 235, 0.9)',
  ];

  return (
    <section id="stats" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Coding Stats" subtitle="My coding activity and statistics" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Contributions */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-4" style={{ color: 'var(--text)' }}>
              GitHub Contributions
            </h3>
            <div className="overflow-x-auto">
              <div className="flex gap-[3px] min-w-[700px]">
                {contributions.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((intensity, di) => (
                      <motion.div
                        key={di}
                        className="w-3 h-3 rounded-sm"
                        style={{ background: intensityColors[intensity] }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: wi * 0.01 + di * 0.01, duration: 0.2 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>
              <span>Less</span>
              {intensityColors.map((color, i) => (
                <div key={i} className="w-3 h-3 rounded-sm" style={{ background: color }} />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* LeetCode Stats */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-6" style={{ color: 'var(--text)' }}>
              LeetCode Progress
            </h3>

            <div className="flex items-center justify-center mb-8">
              {/* Circular progress */}
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--border)" strokeWidth="8" />
                  <motion.circle
                    cx="60" cy="60" r="52" fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="100%" stopColor="var(--color-accent)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold" style={{ color: 'var(--text)' }}>300+</span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Solved</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Easy', count: 150, total: 800, color: 'var(--color-success)' },
                { label: 'Medium', count: 120, total: 1700, color: 'var(--color-warning)' },
                { label: 'Hard', count: 30, total: 800, color: 'var(--color-error)' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <p className="text-lg font-bold" style={{ color: item.color }}>{item.count}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                  <div className="mt-2 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: item.color }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${(item.count / item.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
