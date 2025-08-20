"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  url: string; // can be hash links or routes
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "");
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // set active based on hash when using section links
  useEffect(() => {
    const updateActiveFromHash = () => {
      const hash = window.location.hash || "#";
      const match = items.find((i) => i.url === hash);
      if (match) setActiveTab(match.name);
    };
    updateActiveFromHash();
    window.addEventListener("hashchange", updateActiveFromHash);
    return () => window.removeEventListener("hashchange", updateActiveFromHash);
  }, [items]);

  // apply theme to root and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
        className
      )}
    >
      <div
        className="pointer-events-auto flex items-center gap-3 rounded-full py-1 px-1 shadow-lg
        backdrop-blur-[10px] backdrop-saturate-150
        bg-[rgba(255,255,255,0.10)] dark:bg-[rgba(15,23,42,0.35)]
        border border-[rgba(255,255,255,0.20)] dark:border-[rgba(255,255,255,0.18)]
        supports-[backdrop-filter]:bg-[rgba(255,255,255,0.10)]"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          const isHash = item.url.startsWith('#');
          const isHome = item.url === '/';

          return (
            (isHash || isHome) ? (
              <a
                key={item.name}
                href={isHome ? '/#home' : item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full",
                  "text-slate-900/90 dark:text-slate-100/90",
                  "transition-colors transition-transform duration-200 will-change-transform",
                  "hover:text-cyan-300 dark:hover:text-violet-300 hover:bg-white/10 dark:hover:bg-white/5 hover:scale-[1.02]",
                  isActive && "bg-white/20 dark:bg-white/10 text-cyan-300 dark:text-violet-300"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden inline-flex"><Icon size={18} strokeWidth={2.5} /></span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-t-full">
                      <div className="absolute w-14 h-7 bg-cyan-400/25 rounded-full blur-md -top-2 -left-3" />
                      <div className="absolute w-10 h-6 bg-violet-400/25 rounded-full blur-md -top-1 left-2" />
                      <div className="absolute w-6 h-5 bg-cyan-400/25 rounded-full blur-sm top-0 left-3" />
                    </div>
                  </motion.div>
                )}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full",
                  "text-slate-900/90 dark:text-slate-100/90",
                  "transition-colors transition-transform duration-200 will-change-transform",
                  "hover:text-cyan-300 dark:hover:text-violet-300 hover:bg-white/10 dark:hover:bg-white/5 hover:scale-[1.02]",
                  isActive && "bg-white/20 dark:bg-white/10 text-cyan-300 dark:text-violet-300"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden inline-flex"><Icon size={18} strokeWidth={2.5} /></span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-t-full">
                      <div className="absolute w-14 h-7 bg-cyan-400/25 rounded-full blur-md -top-2 -left-3" />
                      <div className="absolute w-10 h-6 bg-violet-400/25 rounded-full blur-md -top-1 left-2" />
                      <div className="absolute w-6 h-5 bg-cyan-400/25 rounded-full blur-sm top-0 left-3" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          );
        })}
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="pointer-events-auto ml-1 p-2 rounded-full border text-slate-800 dark:text-slate-100
          border-[rgba(255,255,255,0.25)] dark:border-[rgba(255,255,255,0.22)]
          bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10
          backdrop-blur-[10px] transition-colors"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
}
