"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig, whatsappHrefWithMessage } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen overflow-hidden bg-fixed-desktop-only"
      style={{
        position: "sticky",
        top: 0,
        backgroundImage: "url(/images/bg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-forest/70 via-forest/40 to-forest" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-gold font-body text-xs font-medium tracking-[0.35em] uppercase mb-6"
        >
          Coconut Exporter — North Sumatra, Indonesia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[96px] text-cream leading-[0.9] font-semibold max-w-5xl"
        >
          De Husked &
          <em className="block text-gold italic font-light">Semi Husked</em>
          Coconut
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-8 text-cream-dim font-body text-md sm:text-lg max-w-2xl leading-relaxed"
        >
          {siteConfig.name} supplies export-grade de husked & semi husked coconut
          from North Sumatra, Indonesia — trusted by buyers in China, Thailand, and Vietnam, with premium
          quality and on-time delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={whatsappHrefWithMessage("Hello, I'd like pricing information for De Husked / Semi Husked Coconut")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gold text-white font-body font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30 flex items-center gap-2 justify-center"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat WhatsApp
          </a>
          <a
            href="#produk"
            className="px-8 py-4 rounded-full border border-cream/40 text-cream font-body font-medium text-sm tracking-wide hover:border-cream transition-all duration-300"
          >
            View Product Details
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream-dim/60 font-body text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-linear-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
