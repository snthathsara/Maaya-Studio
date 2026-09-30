import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { AnimatedLetter } from './AnimatedLetter';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const statementText =
    "Located along Galle Road in Colombo 6, Maaya Studio (Pvt) Ltd has documented over 850 landmark weddings, romantic pre-shoots, and cultural celebrations across Sri Lanka. We fuse cinema-grade multi-camera filmmaking with heartfelt candid storytelling, crafting timeless heirloom storybooks and evocative wedding films that celebrate your legacy.";

  const characters = statementText.split('');

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F5EE] dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Inner Card */}
        <div
          ref={containerRef}
          className="relative rounded-2xl md:rounded-[2.5rem] bg-white dark:bg-[#101010] border border-neutral-200 dark:border-white/10 p-8 sm:p-12 md:p-16 lg:p-20 text-center flex flex-col items-center shadow-xl dark:shadow-2xl overflow-hidden transition-colors duration-500"
        >
          {/* Subtle noise backdrop */}
          <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

          {/* Top Label */}
          <span className="relative z-10 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-neutral-500 dark:text-[#DEDBC8] font-medium mb-8">
            Cinematography &amp; Fine Art Studio — Colombo 06
          </span>

          {/* Multi-Style Pull-Up Heading */}
          <div className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto text-neutral-900 dark:text-[#E1E0CC] font-normal leading-[1.05] sm:leading-[0.96] mb-12">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'We are Maaya Studio,', className: 'text-neutral-900 dark:text-[#E1E0CC] font-normal' },
                { text: "Colombo's premier wedding visualists.", className: 'font-serif italic text-neutral-950 dark:text-[#DEDBC8] px-2' },
                {
                  text: 'We immortalize timeless vows, intimate pre-shoots, and sacred traditions across Sri Lanka.',
                  className: 'text-neutral-900 dark:text-[#E1E0CC] font-normal',
                },
              ]}
            />
          </div>

          {/* Scroll-Linked Progressive Character Opacity Reveal */}
          <div className="relative z-10 max-w-2xl mx-auto text-neutral-600 dark:text-[#DEDBC8] text-sm sm:text-base md:text-lg leading-relaxed font-light mb-12">
            {characters.map((char, index) => (
              <AnimatedLetter
                key={index}
                char={char}
                index={index}
                totalChars={characters.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Credentials Strip (Clean typography, NO dots!) */}
          <div className="relative z-10 w-full pt-10 border-t border-neutral-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '4.5 ★', label: '53 Google Reviews' },
              { val: '12+', label: 'Years in Colombo' },
              { val: '850+', label: 'Weddings & Celebrations' },
              { val: '100%', label: 'Cinema 4K & Optical Art' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2 }}
                className="transition-transform duration-200"
              >
                <span className="block text-xl sm:text-2xl font-bold text-neutral-900 dark:text-[#E1E0CC]">{stat.val}</span>
                <span className="text-[10px] sm:text-xs tracking-wider uppercase text-neutral-500 dark:text-gray-400 font-light">{stat.label}</span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
