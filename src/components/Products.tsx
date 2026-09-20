"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealSection, SlideFromLeft, SlideFromRight, fadeUp } from "@/lib/motion";
import { whatsappHrefWithMessage } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";

const SPECS = [
  { label: "Product Type", value: "De Husked & Semi Husked Coconut" },
  { label: "Grade A", value: "1000g – 2000+ g / nut" },
  { label: "Grade B", value: "800g – 1000g / nut" },
  { label: "Grade C", value: "500g – 800g / nut" },
  { label: "Color", value: "Golden Yellow & Light Brown (as requested)" },
  { label: "Packaging", value: "20–30 nuts / sack" },
  { label: "MOQ 1×40FT", value: "28,000 nuts" },
  { label: "MOQ 1×20FT", value: "23,000 nuts" },
];

export default function Products() {
  return (
    <section id="produk" className="bg-forest py-16 md:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="mb-16 text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            Our Products
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl lg:text-6xl text-cream font-semibold leading-tight"
          >
            De Husked &
            <em className="block italic font-light text-gold">Semi Husked Coconut</em>
          </motion.h2>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SlideFromLeft distance={150} className="space-y-4">
            <div className="relative h-80 rounded-2xl overflow-hidden bg-forest-light">
              <Image
                src="/images/coconut-grading.jpg"
                alt="Coconut weighing and grading process"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-xl overflow-hidden bg-forest-light">
                <Image
                    src="/images/split-coconut-2.jpg"
                alt="Split coconut showing flesh quality"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden bg-forest-light">
                <Image
                  src="/images/coconut-pile-1.jpg"
                  alt="Pile of coconuts ready for export"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>
          </SlideFromLeft>

          <SlideFromRight distance={150}>
            <div>
              <div className="rounded-2xl border border-leaf/50 overflow-hidden bg-forest-mid">
                <div className="px-6 py-5 border-b border-leaf/40 bg-forest-light/30">
                  <h3 className="font-display text-2xl text-cream font-semibold">Product Specifications</h3>
                </div>
                <div className="divide-y divide-leaf/30">
                  {SPECS.map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      variants={fadeUp}
                      custom={i * 0.5}
                      className="flex items-start gap-4 px-6 py-4"
                    >
                      <span className="font-body text-cream-dim text-sm w-32 sm:w-40 shrink-0">
                        {spec.label}
                      </span>
                      <span className="font-body text-cream text-sm font-medium min-w-0 flex-1">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href={whatsappHrefWithMessage("Hello, I'd like to ask about pricing for De Husked / Semi Husked Coconut")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-xl bg-gold text-white font-body font-bold text-sm hover:bg-gold-light transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Request a Quote
                </a>
                <a
                  href="#kontak"
                  className="flex items-center justify-center py-4 rounded-xl border border-leaf text-cream-dim font-body font-medium text-sm hover:border-gold hover:text-gold transition-colors"
                >
                  Inquiry Form
                </a>
              </div>
            </div>
          </SlideFromRight>
        </div>
      </div>
    </section>
  );
}
