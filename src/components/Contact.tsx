import React, { useState } from 'react';
import { ArrowRight, Check, Star, MapPin, Phone, Clock, ExternalLink, MessageCircle, Compass } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    type: 'wedding',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        venue: '',
        type: 'wedding',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F5EE] dark:bg-black border-t border-neutral-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Card Wrapper */}
        <div className="rounded-2xl md:rounded-[2.5rem] bg-white dark:bg-[#101010] border border-neutral-200 dark:border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl dark:shadow-2xl">
          
          {/* Left Column (5 cols): Info & Google Business Details */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-neutral-50 dark:bg-[#141414] border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-white/10 flex flex-col justify-between gap-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-[#DEDBC8] font-mono block mb-2 font-medium">
                Reserve Your Date
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 dark:text-[#E1E0CC] tracking-tight leading-tight">
                Maaya Studio <span className="text-sm font-normal text-neutral-500 dark:text-gray-400 block font-sans mt-1">(Pvt) Ltd</span>
              </h2>
              <p className="text-neutral-500 dark:text-gray-400 text-xs sm:text-sm font-light leading-relaxed mt-3">
                Colombo's premier wedding cinematography and portrait studio. Now accepting wedding commissions, romantic pre-shoots, and heirloom album consultations across Sri Lanka.
              </p>
            </div>

            {/* Google Rating Badge & Actions */}
            <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="font-bold text-base text-neutral-900 dark:text-white ml-1">4.5</span>
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-gray-400">
                    (53 Google reviews)
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  Verified Studio
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-100 dark:border-white/5 text-xs">
                <a
                  href="https://www.google.com/search?q=Maaya+Studio&ie=UTF-8#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-800 dark:text-[#DEDBC8] hover:underline font-medium"
                >
                  <MapPin className="w-3 h-3 text-amber-500" />
                  <span>Directions</span>
                </a>
                <span className="text-neutral-300 dark:text-white/20">•</span>
                <a
                  href="https://www.google.com/search?q=Maaya+Studio&ie=UTF-8#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 dark:text-[#DEDBC8] hover:underline font-medium"
                >
                  Write a review
                </a>
                <span className="text-neutral-300 dark:text-white/20">•</span>
                <a
                  href="https://www.google.com/local/place/fid/0x3ae25bc792bca05d:0xd747fe230e02c31/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DY32HYkGd5XJuxyJQBY66VQ%26cb_client%3Dsearch.gws-prod.grass%26yaw%3D60.419838%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFlkzMkhZa0dkNVhKdXh5SlFCWTY2VlE%3D&sa=X&ved=2ahUKEwjYrKmXzZaXAxW43TgGHTmnC6gQpx96BAgbEBI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-800 dark:text-[#DEDBC8] hover:underline font-medium"
                >
                  <Compass className="w-3 h-3 text-sky-500" />
                  <span>See outside (360°)</span>
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-gray-500 block mb-1">
                  Studio Address
                </span>
                <a
                  href="https://www.google.com/search?sca_esv=b0c9a82e6cc79f1f&sxsrf=APpeQnsskxv2JSicuo93Bu4rxgS5LhOVdA:1790781562713&q=maaya+studio+pvt+ltd+colombo+address&ludocid=969540429250833457&sa=X&ved=2ahUKEwjYrKmXzZaXAxW43TgGHTmnC6gQ6BN6BAgjEAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-neutral-900 dark:text-[#DEDBC8] hover:text-black dark:hover:text-white transition-colors block"
                >
                  No. 24/10, Fedrica Road, Galle Rd, Colombo 6, Sri Lanka
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-gray-500 block mb-1">
                  Direct Inquiries &amp; WhatsApp
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="tel:0775562020"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 dark:text-[#DEDBC8] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>077 556 2020</span>
                  </a>
                  <span className="text-neutral-400">/</span>
                  <a
                    href="https://wa.me/94775562020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-gray-500 block mb-1">
                  Studio Opening Hours
                </span>
                <a
                  href="https://www.google.com/search?sca_esv=b0c9a82e6cc79f1f&sxsrf=APpeQnsskxv2JSicuo93Bu4rxgS5LhOVdA:1790781562713&q=maaya+studio+\(pvt\)+ltd+colombo+hours&ludocid=969540429250833457&sa=X&ved=2ahUKEwjYrKmXzZaXAxW43TgGHTmnC6gQ6BN6BAgkEAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-light text-neutral-700 dark:text-gray-300 flex items-center gap-1.5 hover:underline"
                >
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Monday – Sunday · 8:00 AM – 9:00 PM</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-white/10">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-neutral-200/60 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-300 dark:border-white/10 text-[11px] font-mono text-neutral-700 dark:text-gray-300 transition-colors"
              >
                Facebook / MAAYA STUDIO
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-neutral-200/60 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-300 dark:border-white/10 text-[11px] font-mono text-neutral-700 dark:text-gray-300 transition-colors"
              >
                YouTube / MAAYA STUDIO
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white dark:bg-transparent">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-black dark:bg-[#DEDBC8] text-white dark:text-black flex items-center justify-center shadow-lg">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 dark:text-[#E1E0CC]">Inquiry Received</h3>
                <p className="text-sm text-neutral-500 dark:text-gray-400 max-w-sm font-light">
                  Thank you! Your event inquiry has been sent to the Maaya Studio production team. We will contact you at {formData.phone || formData.email} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sanjeewa &amp; Dilani"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 077 556 2020"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                      Celebration Service
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                    >
                      <option value="wedding" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Wedding Day (Poruwa / Church / Hindu Ceremony)</option>
                      <option value="preshoot" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Romantic Pre-Shoot / Engagement Session</option>
                      <option value="homecoming" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Homecoming &amp; Grand Reception</option>
                      <option value="album" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Custom Heirloom Wedding Storybook</option>
                      <option value="milestone" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Anniversary &amp; Milestone Celebration</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                      Approximate Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                      Event Venue / City
                    </label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="e.g. Cinnamon Grand / Galle Fort"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                    Your Vision &amp; Requirements
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your wedding timing, cinematography expectations, or album preferences..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-[#DEDBC8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-black dark:bg-[#DEDBC8] text-white dark:text-black font-medium text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <span>Dispatch Wedding Inquiry</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
