import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  category: 'wedding' | 'preshoot' | 'tradition' | 'portrait';
  categoryLabel: string;
  location: string;
  camera: string;
  exif: string;
  thumb: string;
  full: string;
  colSpan: string;
  heightClass: string;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'galle-vows',
    title: 'The Galle Fort Vow Exchange',
    category: 'wedding',
    categoryLabel: 'Signature Wedding',
    location: 'Galle Fort Ramparts, Southern Province',
    camera: 'Sony FX3 / FE 50mm f/1.2 GM',
    exif: 'f/1.4 / 1/2000s / ISO 100',
    thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2200&auto=format&fit=crop',
    colSpan: 'lg:col-span-7',
    heightClass: 'h-[360px] md:h-[400px]',
  },
  {
    id: 'mount-lavinia',
    title: 'Golden Hour at Mount Lavinia',
    category: 'preshoot',
    categoryLabel: 'Coastal Pre-Shoot',
    location: 'Mount Lavinia Beach, Colombo',
    camera: 'Sony α7R V / FE 85mm f/1.4 GM',
    exif: 'f/1.8 / 1/1600s / ISO 100',
    thumb: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-5',
    heightClass: 'h-[360px] md:h-[400px]',
  },
  {
    id: 'poruwa-blessing',
    title: 'Sacred Poruwa Traditions',
    category: 'tradition',
    categoryLabel: 'Traditional Ceremony',
    location: 'Cinnamon Grand Ballroom, Colombo',
    camera: 'Sony α7R V / FE 35mm f/1.4 GM',
    exif: 'f/2.0 / 1/400s / ISO 400',
    thumb: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'hindu-elegance',
    title: 'Crimson & Gold Splendor',
    category: 'tradition',
    categoryLabel: 'Hindu Ceremony',
    location: 'Mayurapathy Kovil, Colombo 06',
    camera: 'Sony α7R V / FE 85mm f/1.4 GM',
    exif: 'f/1.4 / 1/800s / ISO 160',
    thumb: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'nuwara-eliya-mist',
    title: 'Whispers in Ceylon Tea Hills',
    category: 'preshoot',
    categoryLabel: 'Highland Pre-Shoot',
    location: 'Nuwara Eliya Tea Estates',
    camera: 'Sony FX3 / FE 24-70mm f/2.8 GM II',
    exif: 'f/2.8 / 1/640s / ISO 200',
    thumb: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'bridal-silk',
    title: 'Bridal Radiance in Silk',
    category: 'portrait',
    categoryLabel: 'Bridal Portrait',
    location: 'Shangri-La Atelier, Colombo',
    camera: 'Hasselblad X2D 100C / XCD 90mm f/2.5',
    exif: 'f/2.8 / 1/500s / ISO 100',
    thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2200&auto=format&fit=crop',
    colSpan: 'lg:col-span-6',
    heightClass: 'h-[240px] md:h-[270px]',
  },
  {
    id: 'bentota-sunset',
    title: 'Bentota Oceanfront Stroll',
    category: 'preshoot',
    categoryLabel: 'Sunset Romance',
    location: 'Bentota Beach, Southern Province',
    camera: 'Sony α7R V / FE 70-200mm f/2.8 GM II',
    exif: 'f/2.8 / 1/1250s / ISO 100',
    thumb: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-6',
    heightClass: 'h-[240px] md:h-[270px]',
  },
  {
    id: 'first-dance',
    title: 'The First Dance of Forever',
    category: 'wedding',
    categoryLabel: 'Grand Reception',
    location: 'Hilton Grand Ballroom, Colombo',
    camera: 'Sony FX3 / FE 24mm f/1.4 GM',
    exif: 'f/1.6 / 1/250s / ISO 800',
    thumb: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'st-marys-vows',
    title: 'Sanctuary of Eternal Devotion',
    category: 'tradition',
    categoryLabel: 'Church Nuptials',
    location: 'St. Mary’s Church, Bambalapitiya',
    camera: 'Sony α7R V / FE 50mm f/1.2 GM',
    exif: 'f/1.8 / 1/320s / ISO 400',
    thumb: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'groom-regalia',
    title: 'Groom in Aristocratic Regalia',
    category: 'portrait',
    categoryLabel: 'Editorial Portrait',
    location: 'Galle Face Court, Colombo 03',
    camera: 'Hasselblad X2D 100C / XCD 55mm f/2.5',
    exif: 'f/2.5 / 1/800s / ISO 64',
    thumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
];

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'wedding', label: 'Signature Weddings' },
    { id: 'preshoot', label: 'Destination Pre-Shoots' },
    { id: 'tradition', label: 'Traditions & Rituals' },
    { id: 'portrait', label: 'Portraits & Regalia' },
  ];

  const filteredPhotos =
    selectedFilter === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedFilter);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredPhotos.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < filteredPhotos.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F5EE] dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-neutral-200 dark:border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-[#DEDBC8] font-mono block mb-2 font-medium">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 dark:text-[#E1E0CC] tracking-tight">
              Moments of Forever
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-md font-light leading-relaxed">
            Unforgettable wedding celebrations, romantic coastal pre-shoots, and traditional Poruwa ceremonies documented across Sri Lanka.
          </p>
        </div>

        {/* Clean Filter Pills (NO DOTS!) */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-black dark:bg-[#DEDBC8] text-white dark:text-black shadow-lg shadow-black/10 dark:shadow-[#DEDBC8]/10'
                    : 'bg-white dark:bg-[#181818] text-neutral-700 dark:text-gray-300 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 12-Column Editorial Grid (Image 2 style) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => {
              const isFiltered = selectedFilter !== 'all';
              const colClass = isFiltered ? 'lg:col-span-4' : photo.colSpan;
              const heightClass = isFiltered ? 'h-[340px]' : photo.heightClass;

              return (
                <motion.figure
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-[#121212] ${colClass} ${heightClass} shadow-xl transform-gpu`}
                >
                  <img
                    src={photo.thumb}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Editorial Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#E1E0CC]">
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#DEDBC8] font-mono">
                          {photo.categoryLabel}
                        </span>
                        <h4 className="text-lg font-medium text-white">{photo.title}</h4>
                        <span className="text-xs text-gray-300">{photo.location}</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform group-hover:scale-110">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[90vh] rounded-2xl md:rounded-3xl bg-[#141414] border border-white/15 overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-[#E1E0CC]">
                    {activePhoto.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono">{activePhoto.location}</span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Viewport */}
              <div className="relative flex-1 flex items-center justify-center p-4 overflow-hidden">
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white flex items-center justify-center transition-transform hover:scale-105"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <img
                  src={activePhoto.full}
                  alt={activePhoto.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />

                <button
                  onClick={handleNext}
                  className="absolute right-4 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white flex items-center justify-center transition-transform hover:scale-105"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom EXIF Strip */}
              <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                      Optical System
                    </span>
                    <span className="text-xs font-medium text-[#E1E0CC]">
                      {activePhoto.camera}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                      Exposure
                    </span>
                    <span className="text-xs font-medium text-[#E1E0CC]">{activePhoto.exif}</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setLightboxIndex(null)}
                  className="px-4 py-2 rounded-full bg-[#DEDBC8] text-black text-xs font-medium hover:bg-white transition-colors"
                >
                  Inquire Wedding Collection
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
