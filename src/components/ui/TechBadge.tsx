import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className = '' }: TechBadgeProps) {
  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 ${className}`}
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
        color: 'var(--color-primary-light)',
      }}
      whileHover={{
        borderColor: 'var(--color-primary)',
        boxShadow: '0 0 15px rgba(37, 99, 235, 0.2)',
      }}
    >
      {name}
    </motion.span>
  );
}
