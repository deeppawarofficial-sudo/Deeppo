import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';
import { heroData } from '../../data/content';

export default function Hero() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-bg grid-bg"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)' }}
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border"
                style={{ background: 'rgba(37, 99, 235, 0.1)', borderColor: 'rgba(37, 99, 235, 0.2)', color: 'var(--color-primary-light)' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{heroData.name}</span>
            </motion.h1>

            {/* Headline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg font-medium mb-4 font-[family-name:var(--font-mono)] flex flex-wrap gap-2"
              style={{ color: 'var(--color-primary-light)' }}
            >
              {heroData.headline.split(' | ').map((item, i) => (
                <span key={i} className="inline-flex items-center">
                  {i > 0 && <span className="mx-2 text-[var(--text-muted)]">·</span>}
                  {item}
                </span>
              ))}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              {heroData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={<Download size={18} />}
                href={heroData.resumeUrl}
              >
                Download Resume
              </Button>
              <Button
                variant="ghost"
                size="lg"
                icon={<MessageCircle size={18} />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Animated Illustration */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="relative w-full max-w-lg">
              {/* Main Code Editor Window */}
              <motion.div
                className="glass-card p-0 overflow-hidden"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Editor Top Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs font-[family-name:var(--font-mono)]" style={{ color: 'var(--text-muted)' }}>server.ts</span>
                </div>

                {/* Code Lines */}
                <div className="p-4 space-y-2 font-[family-name:var(--font-mono)] text-sm">
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)' }}>1</span>
                    <span><span style={{ color: '#C678DD' }}>import</span> <span style={{ color: '#E5C07B' }}>express</span> <span style={{ color: '#C678DD' }}>from</span> <span style={{ color: '#98C379' }}>'express'</span>;</span>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)' }}>2</span>
                    <span><span style={{ color: '#C678DD' }}>import</span> {'{'} <span style={{ color: '#E5C07B' }}>Router</span> {'}'} <span style={{ color: '#C678DD' }}>from</span> <span style={{ color: '#98C379' }}>'./routes'</span>;</span>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)' }}>3</span>
                    <span style={{ color: 'var(--text-muted)' }}>&nbsp;</span>
                  </div>
                  <div className="flex gap-4 rounded-md px-2 -mx-2" style={{ background: 'rgba(37, 99, 235, 0.08)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>4</span>
                    <span><span style={{ color: '#C678DD' }}>const</span> <span style={{ color: '#61AFEF' }}>app</span> = <span style={{ color: '#E5C07B' }}>express</span>();</span>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)' }}>5</span>
                    <span><span style={{ color: '#61AFEF' }}>app</span>.<span style={{ color: '#61AFEF' }}>use</span>(<span style={{ color: '#E5C07B' }}>Router</span>);</span>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)' }}>6</span>
                    <span style={{ color: 'var(--text-muted)' }}>&nbsp;</span>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)' }}>7</span>
                    <span><span style={{ color: '#61AFEF' }}>app</span>.<span style={{ color: '#61AFEF' }}>listen</span>(<span style={{ color: '#D19A66' }}>3000</span>, () =&gt; {'{'}</span>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)' }}>8</span>
                    <span>&nbsp;&nbsp;<span style={{ color: '#61AFEF' }}>console</span>.<span style={{ color: '#61AFEF' }}>log</span>(<span style={{ color: '#98C379' }}>'Server running'</span>);</span>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)' }}>9</span>
                    <span>{'}'});<span className="inline-block w-0.5 h-4 bg-[var(--color-primary)] animate-typing ml-1" /></span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Terminal */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-64 glass-card p-0 overflow-hidden"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-[family-name:var(--font-mono)]" style={{ color: 'var(--text-muted)' }}>terminal</span>
                </div>
                <div className="p-3 font-[family-name:var(--font-mono)] text-xs space-y-1">
                  <p style={{ color: 'var(--color-success)' }}>$ npm run dev</p>
                  <p style={{ color: 'var(--text-muted)' }}>➜ Server running on :3000</p>
                  <p style={{ color: 'var(--text-muted)' }}>➜ Routes loaded: 12</p>
                  <p className="flex items-center gap-1" style={{ color: 'var(--color-success)' }}>✓ Ready <span className="inline-block w-1.5 h-3 bg-green-400 animate-typing" /></p>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-3 py-2 text-xs font-medium"
                style={{ color: 'var(--color-primary-light)' }}
                animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                ⚡ API Response: 12ms
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 glass-card px-3 py-2 text-xs font-medium"
                style={{ color: 'var(--color-success)' }}
                animate={{ y: [0, 5, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                ✓ All Tests Passing
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'var(--border-light)' }}>
          <motion.div
            className="w-1 h-2 rounded-full bg-[var(--color-primary)]"
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
