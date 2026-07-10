import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Marquee from '../ui/Marquee';
import { skillCategories, techMarquee } from '../../data/content';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Skills & Technologies" subtitle="Technologies I work with on a daily basis" />

        {/* Tech Marquee */}
        <div className="mb-16">
          <Marquee speed={25} className="py-4">
            {techMarquee.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border whitespace-nowrap"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', background: 'var(--bg-card)' }}
              >
                {tech}
              </span>
            ))}
          </Marquee>
          <Marquee speed={30} reverse className="py-4">
            {techMarquee.map((tech) => (
              <span
                key={`rev-${tech}`}
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border whitespace-nowrap"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', background: 'var(--bg-card)' }}
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            const isActive = activeCategory === category.title;

            return (
              <motion.div
                key={category.title}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                  isActive ? 'border-[var(--color-primary)]/50 shadow-[0_0_30px_rgba(37,99,235,0.1)]' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                onClick={() => setActiveCategory(isActive ? null : category.title)}
                whileHover={{ scale: 1.02 }}
                layout
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(37, 99, 235, 0.1)' }}
                  >
                    <CategoryIcon size={20} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]" style={{ color: 'var(--text)' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  <AnimatePresence>
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all duration-300"
                          style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', background: 'var(--bg-secondary)' }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                          whileHover={{
                            borderColor: 'var(--color-primary)',
                            background: 'rgba(37, 99, 235, 0.05)',
                            scale: 1.05,
                          }}
                        >
                          <SkillIcon size={16} />
                          <span>{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
