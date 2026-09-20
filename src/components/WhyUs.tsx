"use client";

import { RevealSection, SlideFromLeft, SlideFromRight, fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: "🏆",
    title: "Export-Grade Quality",
    desc: "Every coconut is strictly selected — uniform size, fresh condition, neatly husked to international importer standards. Consistent in every container.",
    dir: "left" as const,
  },
  {
    icon: "🚢",
    title: "Flexible Terms: CIF & FOB",
    desc: "We ship with CIF or FOB terms based on buyer needs. Complete export documents: Phytosanitary Certificate, Certificate of Origin, B/L, and Packing List.",
    dir: "right" as const,
  },
  {
    icon: "🌏",
    title: "Proven Export Experience",
    desc: "Not an empty claim — we've shipped to China, Thailand, and Vietnam, and understand customs procedures and quarantine requirements in each destination country.",
    dir: "left" as const,
  },
  {
    icon: "📋",
    title: "Professional Logistics & Documentation",
    desc: "Our team handles the entire process from sourcing, fumigation, 40-ft container stuffing, to document handling — you just receive your goods on time.",
    dir: "right" as const,
  },
];

export default function WhyUs() {
  return (
    <section id="keunggulan" className="bg-forest-mid scroll-mt-24 min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="mb-20 text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl lg:text-6xl text-cream font-semibold leading-tight"
          >
            More Than Just
            <em className="block italic font-light text-gold">a Coconut Supplier</em>
          </motion.h2>
        </RevealSection>

        <div className="space-y-8">
          {advantages.map((adv, i) => {
            const Slide = adv.dir === "left" ? SlideFromLeft : SlideFromRight;
            return (
              <Slide key={adv.title} distance={180}>
                <div className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl border border-leaf/40 bg-white hover:border-gold/30 transition-colors duration-500 group">
                  <div className="text-4xl shrink-0 w-14 h-14 rounded-full bg-forest-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-cream font-semibold mb-3">{adv.title}</h3>
                    <p className="font-body text-cream-dim leading-relaxed">{adv.desc}</p>
                  </div>
                  <div className="sm:ml-auto shrink-0 self-center">
                    <span className="font-display text-6xl font-bold text-gold/10">0{i + 1}</span>
                  </div>
                </div>
              </Slide>
            );
          })}
        </div>
      </div>
    </section>
  );
}
