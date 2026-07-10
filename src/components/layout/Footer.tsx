import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { socialLinks } from '../../data/content';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { Mail, Code2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Mail, Linkedin: FaLinkedin, Github: SiGithub, Code2 };

export default function Footer() {
  return (
    <footer className="relative py-12 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            className="text-xl font-bold font-[family-name:var(--font-heading)] cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Deep</span>
            <span style={{ color: 'var(--text)' }}> Pawar</span>
          </motion.a>

          <div className="flex items-center gap-4">
            {socialLinks.map(link => {
              const IconComp = iconMap[link.icon];
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="p-2.5 rounded-xl border transition-all duration-300"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                  whileHover={{ scale: 1.1, borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {IconComp && <IconComp size={18} />}
                </motion.a>
              );
            })}
          </div>

          <p className="text-sm flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
            Built with <Heart size={14} className="text-red-500" fill="currentColor" /> by Deep Pawar
          </p>
        </div>

        <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Deep Pawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
