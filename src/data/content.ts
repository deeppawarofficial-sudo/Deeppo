import type { IconType } from 'react-icons';
import { SiPython, SiJavascript, SiNodedotjs, SiExpress, SiFastapi, SiMysql, SiMongodb, SiScikitlearn, SiPandas, SiNumpy, SiGit, SiGithub, SiPostman } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { Shield, Code2, Database, Brain, Cpu, Wrench, Key, Globe, type LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: string;
  github?: string;
  live?: string;
  gradient: string;
}

export interface Experience {
  role: string;
  organization: string;
  description: string;
  period: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const heroData = {
  name: 'Deep Pawar',
  headline: 'Backend Developer | Java | Node.js | FastAPI | Machine Learning | REST APIs',
  description: 'I build scalable backend systems, AI-powered applications, and efficient software solutions with a focus on clean architecture and real-world impact.',
  resumeUrl: '/resume.pdf',
};

export const aboutData = {
  paragraphs: [
    "I'm a B.Tech Information Technology student passionate about Backend Development, Machine Learning, and Software Engineering.",
    "I enjoy designing scalable APIs, solving complex engineering problems, and building software that creates real-world impact.",
    "My core expertise lies in Java, Node.js, FastAPI, REST APIs, Machine Learning, and System Design fundamentals.",
    "I'm continuously improving my Data Structures & Algorithms skills while building production-quality projects.",
  ],
  stats: [
    { label: 'Projects Built', value: 10 },
    { label: 'Problems Solved', value: 300 },
    { label: 'Day Streak', value: 180 },
    { label: 'CGPA', value: 8.25 },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Backend',
    icon: Globe,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'REST APIs', icon: Globe },
      { name: 'JWT Auth', icon: Key },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: [
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
    ],
  },
  {
    title: 'Core CS',
    icon: Cpu,
    skills: [
      { name: 'DSA', icon: Code2 },
      { name: 'DBMS', icon: Database },
      { name: 'OS', icon: Cpu },
      { name: 'CN', icon: Globe },
      { name: 'OOP', icon: Shield },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: VscVscode },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'ai-code-doc',
    title: 'AI Code Documentation Generator',
    description: 'An AI-powered documentation platform that automatically generates 14 types of software documentation and Mermaid diagrams directly from GitHub repositories.',
    highlights: [
      'Reduced LLM API calls by nearly 60%',
      'Python AST based code compression',
      'FastAPI backend',
      'Ollama integration',
    ],
    techStack: ['Python', 'FastAPI', 'MongoDB', 'React', 'Ollama'],
    category: 'AI/ML',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 'ml-ids',
    title: 'ML Intrusion Detection System',
    description: 'Built a multi-class network intrusion detection system using the NSL-KDD dataset with advanced feature engineering and model optimization.',
    highlights: [
      'Random Forest classifier',
      'Feature engineering',
      'Hyperparameter tuning',
      'Precision, Recall and F1 evaluation',
    ],
    techStack: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    category: 'AI/ML',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 'smart-tourist',
    title: 'SmartTourist',
    description: 'Hybrid Web3 tourist safety platform integrating Solana blockchain with backend REST APIs for real-time safety classification.',
    highlights: [
      'NewsAPI integration',
      'Safety classification',
      'Scalable backend',
      'Solana Web3 integration',
    ],
    techStack: ['Node.js', 'Express.js', 'JavaScript', 'Solana Web3.js'],
    category: 'Web3',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Associate Vishwaruni Incharge',
    organization: 'Competitive Examination Cell, VIIT',
    description: 'Led a team of 75 members to organize technical and academic events while managing planning, execution, and coordination.',
    period: '2024 - Present',
  },
  {
    role: 'Department Head',
    organization: 'Competitive Examination Cell, VIIT',
    description: 'Organized inter-department technical initiatives and competitions.',
    period: '2023 - 2024',
  },
];

export const achievements: Achievement[] = [
  { icon: '🏆', title: '1st Place — Build-a-Thon 2025', description: 'Won first place in the hackathon competition' },
  { icon: '🥇', title: 'Top 4 — TENET Hack 25', description: 'Reached top 4 among competitive teams' },
  { icon: '💻', title: '300+ LeetCode Problems', description: 'Solved over 300 problems on LeetCode' },
  { icon: '🔥', title: '180+ Day Coding Streak', description: 'Maintained a consistent daily coding streak' },
  { icon: '⚙️', title: 'Backend Developer', description: 'Specialized in building scalable backend systems' },
];

export const educationData = {
  degree: 'B.Tech Information Technology',
  institution: 'VIIT Pune',
  cgpa: '8.25',
  graduation: '2027 (Expected)',
};

export const socialLinks = [
  { label: 'Email', href: 'mailto:deeppawar@example.com', icon: 'Mail' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/deeppawar', icon: 'Linkedin' },
  { label: 'GitHub', href: 'https://github.com/deeppawar', icon: 'Github' },
  { label: 'LeetCode', href: 'https://leetcode.com/deeppawar', icon: 'Code2' },
];

export const techMarquee = [
  'Java', 'Python', 'JavaScript', 'Node.js', 'Express.js', 'FastAPI',
  'React', 'MongoDB', 'MySQL', 'REST APIs', 'Git', 'Docker',
  'Machine Learning', 'System Design', 'DSA', 'JWT',
];

export const codingJourney = [
  { year: '2023', title: 'Started B.Tech IT', description: 'Began learning programming fundamentals with C and Java' },
  { year: '2023', title: 'First Backend Project', description: 'Built my first REST API with Node.js and Express' },
  { year: '2024', title: 'ML & Data Science', description: 'Explored Machine Learning with Scikit-learn and built IDS project' },
  { year: '2024', title: 'Hackathon Wins', description: 'Won Build-a-Thon 2025 and placed Top 4 in TENET Hack' },
  { year: '2025', title: 'AI Documentation Platform', description: 'Built AI-powered code documentation generator with FastAPI' },
  { year: '2025', title: '300+ LeetCode', description: 'Crossed 300 problems solved with 180+ day streak' },
];
