import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({ children, className = '', hover = true, glow = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card p-6 ${
        hover ? 'hover:border-[var(--border-light)] hover:-translate-y-1' : ''
      } ${glow ? 'animate-pulse-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
