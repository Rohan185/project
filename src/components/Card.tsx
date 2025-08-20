import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`
        relative p-8 rounded-3xl border border-slate-700/50
        bg-gradient-to-br from-slate-800/30 via-slate-900/20 to-slate-800/30
        backdrop-blur-xl shadow-2xl
        ${hover ? 'hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] hover:border-blue-500/30' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default Card;