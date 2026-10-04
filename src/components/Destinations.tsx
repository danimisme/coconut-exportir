"use client";

import { motion } from "framer-motion";

export const destinations = [
  "China 🇨🇳",
  "Thailand 🇹🇭",
  "Vietnam 🇻🇳",
  "Malaysia 🇲🇾",
  "Bangladesh 🇧🇩",
  "India 🇮🇳",
  "Middle East 🕌",
  "Singapore 🇸🇬",
];

export default function Destinations() {
  return (
    <section className="bg-forest-mid py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center">
        <span className="text-cream-dim font-body text-xs tracking-[0.3em] uppercase">
          Export Markets
        </span>
      </div>
      <div className="flex gap-10 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 items-center shrink-0"
        >
          {[...destinations, ...destinations].map((name, i) => (
            <div
              key={i}
              className="shrink-0 px-7 py-3 rounded-full border border-leaf/60 text-cream-dim font-body text-sm font-medium whitespace-nowrap hover:border-gold/40 hover:text-gold transition-colors duration-300 cursor-default"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
