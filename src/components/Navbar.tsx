import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navItems = [
    { label: 'Our Story', href: '#about' },
    { label: 'Services', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Cinema Gear', href: '#gear' },
    { label: 'Albums', href: '#prints' },
    { label: 'Visit & Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['hero', 'about', 'features', 'gallery', 'gear', 'prints', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
        {/* Animated Hanging Pill Navbar */}
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-3.5 py-2.5 sm:px-6 md:px-7 rounded-b-2xl md:rounded-b-3xl bg-white/90 dark:bg-black/90 text-neutral-900 dark:text-[#E1E0CC] border-b border-x border-neutral-300 dark:border-[#DEDBC8]/15 backdrop-blur-xl shadow-2xl transition-colors duration-500"
        >
          {/* Brand Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-1.5 group mr-1 select-none"
          >
            <span className="font-serif italic text-lg sm:text-xl text-neutral-900 dark:text-[#DEDBC8] group-hover:text-black dark:group-hover:text-white transition-colors tracking-wide">
              Maaya.
            </span>
            <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest font-mono text-neutral-400 dark:text-gray-500 border border-neutral-300 dark:border-white/10 px-1.5 py-0.5 rounded">
              Colombo
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const isHovered = hoveredNav === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`relative px-2.5 lg:px-3 py-1.5 text-[11px] lg:text-xs font-normal transition-colors ${
                    isActive
                      ? 'text-black dark:text-[#E1E0CC] font-medium'
                      : 'text-neutral-600 dark:text-[rgba(225,224,204,0.75)] hover:text-black dark:hover:text-[#E1E0CC]'
                  }`}
                >
                  {isHovered && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute inset-0 bg-black/5 dark:bg-[#DEDBC8]/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-black dark:bg-[#DEDBC8] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Direct Call / Booking Pill */}
          <a
            href="tel:0775562020"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/15 text-[11px] font-mono text-neutral-800 dark:text-[#DEDBC8] border border-neutral-200 dark:border-white/10 transition-colors"
            title="Call Maaya Studio"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>077 556 2020</span>
          </a>

          {/* Theme Switcher Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-[#DEDBC8]/20 text-neutral-800 dark:text-[#DEDBC8] transition-colors"
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-[#DEDBC8]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-neutral-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-800 dark:text-[#E1E0CC] hover:text-black dark:hover:text-[#DEDBC8]"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-16 z-40 p-6 rounded-2xl bg-white/95 dark:bg-black/95 border border-neutral-300 dark:border-[#DEDBC8]/20 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 text-center md:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-white/10">
              <span className="font-serif italic text-lg text-neutral-900 dark:text-[#DEDBC8]">
                Maaya Studio (Pvt) Ltd
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                ★ 4.5 (53 Reviews)
              </span>
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base text-neutral-700 dark:text-[rgba(225,224,204,0.85)] hover:text-black dark:hover:text-[#E1E0CC] font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-200 dark:border-[#DEDBC8]/10 flex flex-col gap-2 justify-center">
              <a
                href="tel:0775562020"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-[#E1E0CC] text-xs font-mono font-medium"
              >
                📞 Call 077 556 2020
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-6 py-2.5 rounded-full bg-black dark:bg-[#DEDBC8] text-white dark:text-black text-sm font-medium"
              >
                Reserve Date
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
