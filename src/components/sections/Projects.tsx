import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import TechBadge from '../ui/TechBadge';
import { projects } from '../../data/content';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const categories = ['All', 'AI/ML', 'Web3', 'Backend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="Some of the projects I've built recently" />

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                  : 'border-[var(--border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
              style={activeFilter !== cat ? { color: 'var(--text-secondary)', background: 'var(--bg-card)' } : {}}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="glass-card p-0 overflow-hidden group"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient Header */}
                <div
                  className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}
                  style={{ background: `linear-gradient(135deg, var(--bg-card), var(--bg-secondary))` }}
                >
                  {/* Abstract Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 right-4 w-20 h-20 border border-[var(--color-primary)]/20 rounded-2xl rotate-12" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border border-[var(--color-accent)]/20 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[var(--color-primary)]/10 rounded-3xl rotate-45" />
                  </div>

                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold font-[family-name:var(--font-heading)] gradient-text opacity-40">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(37, 99, 235, 0.2)', color: 'var(--color-primary-light)' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass"
                        style={{ color: 'var(--text)' }}
                      >
                        <SiGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass"
                        style={{ color: 'var(--text)' }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2" style={{ color: 'var(--text)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <ChevronRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
