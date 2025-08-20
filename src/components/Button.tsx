import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}) => {
  const baseClasses = `
    relative overflow-hidden font-light tracking-wide transition-all duration-300
    rounded-2xl border backdrop-blur-sm
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20
      border-blue-500/30 text-white
      hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
      hover:shadow-blue-500/30
    `,
    secondary: `
      bg-slate-800/30 border-slate-700/50 text-slate-300
      hover:bg-slate-700/40 hover:text-white
      hover:shadow-[0_0_20px_rgba(148,163,184,0.2)]
    `,
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <motion.span
      className="relative z-10 flex items-center justify-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;