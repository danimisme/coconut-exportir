"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig, whatsappHref } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Statistik", href: "#statistik" },
  { label: "Kontak", href: "#kontak" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-forest/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-forest font-display font-bold text-lg group-hover:scale-110 transition-transform duration-300">
            N
          </div>
          <div className="leading-none">
            <div className="font-display text-cream text-base font-semibold tracking-wide">
              {siteConfig.nameShort}
            </div>
            <div className="text-gold text-[9px] font-body font-medium tracking-[0.22em] uppercase">
              Semi Husked Coconut Exporter
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream-dim hover:text-gold text-sm font-body font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-full border border-gold text-gold text-sm font-body font-medium hover:bg-gold hover:text-forest transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Buka menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-cream"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-cream"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-cream"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-forest/98 border-t border-forest-light overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-cream-dim hover:text-gold font-body text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-body font-semibold"
              >
                WhatsApp: {siteConfig.whatsappDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
