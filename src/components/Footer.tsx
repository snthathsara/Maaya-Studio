import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 md:px-8 bg-[#ECE8DD] dark:bg-black border-t border-neutral-300 dark:border-white/10 text-neutral-800 dark:text-[#E1E0CC] transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="font-serif italic text-2xl text-neutral-900 dark:text-[#DEDBC8]">Maaya.</span>
            <span className="text-[11px] font-mono tracking-wider text-neutral-500 dark:text-gray-400">Studio (Pvt) Ltd</span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-gray-500 max-w-sm font-light">
            Premier wedding cinematography &amp; fine art portraiture. Galle Rd, Colombo 06, Sri Lanka. Rated 4.5 ★ on Google. Call: 077 556 2020.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600 dark:text-gray-400 font-light">
          <a href="#hero" className="hover:text-black dark:hover:text-[#DEDBC8] transition-colors">Home</a>
          <a href="#about" className="hover:text-black dark:hover:text-[#DEDBC8] transition-colors">Our Story</a>
          <a href="#features" className="hover:text-black dark:hover:text-[#DEDBC8] transition-colors">Services</a>
          <a href="#gallery" className="hover:text-black dark:hover:text-[#DEDBC8] transition-colors">Gallery</a>
          <a href="#gear" className="hover:text-black dark:hover:text-[#DEDBC8] transition-colors">Cinema Gear</a>
          <a href="#prints" className="hover:text-black dark:hover:text-[#DEDBC8] transition-colors">Albums</a>
          <a href="#contact" className="hover:text-black dark:hover:text-[#DEDBC8] transition-colors">Contact</a>
        </div>

        <div className="text-xs text-neutral-500 dark:text-gray-500 font-mono text-center md:text-right">
          <div>&copy; {new Date().getFullYear()} Maaya Studio (Pvt) Ltd</div>
          <div className="text-[10px] text-neutral-400 dark:text-gray-600 mt-1">Colombo 6, Sri Lanka</div>
        </div>
      </div>
    </footer>
  );
};
