"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SlideFromLeft, SlideFromRight } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

const TAGS = ["CIF & FOB Terms", "Full Documentation", "40-ft Container", "Export Grade"];

export default function About() {
  return (
    <section
      id="tentang-kami"
      className="relative bg-forest scroll-mt-24 min-h-screen flex flex-col justify-center py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-light/25 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideFromLeft distance={160} className="relative order-2 lg:order-1">
            <div className="relative h-130 rounded-2xl overflow-hidden bg-forest-light">
              <Image
                src="/images/split-coconut-1.jpg"
                alt="Split coconut showing flesh quality"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-forest/50 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-4 right-4 sm:-bottom-8 sm:-right-6 bg-gold text-white rounded-2xl p-4 sm:p-6 shadow-xl"
            >
              <div className="font-display text-base sm:text-xl font-bold leading-none">Pure Quality,</div>
              <div className="font-body text-[10px] sm:text-xs font-semibold tracking-wide mt-1 uppercase">
                Globally Trusted
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute top-4 left-4 w-24 h-24 sm:-top-8 sm:-left-6 sm:w-44 sm:h-44 rounded-xl overflow-hidden border-4 border-white shadow-xl bg-forest-light"
            >
              <Image
                src="/images/coconut-pile-1.jpg"
                alt="Coconut pile"
                fill
                sizes="(min-width: 640px) 176px, 96px"
                className="object-cover"
              />
            </motion.div>
          </SlideFromLeft>

          <SlideFromRight distance={160} className="order-1 lg:order-2">
            <div className="mb-3">
              <span className="text-gold font-body text-lg font-medium tracking-[0.3em] uppercase">
                About Us
              </span>
            </div>
            <p className="font-body text-cream-dim text-lg leading-relaxed mb-5">
              <strong className="text-cream">{siteConfig.name}</strong> is a de husked & semi husked coconut exporter based in Deli Serdang, North Sumatra — sourcing directly from the best coconut farms in the region.
            </p>
            <p className="font-body text-cream-dim leading-relaxed mb-5">
              At our warehouse, incoming coconuts aren&apos;t packed right away. We weigh every single nut, log the date, then sort it into Grade A, B, or C based on the number on paper — not a guess. This simple practice is why our buyers in China, Thailand, and Vietnam know exactly what they&apos;re getting, in every container.
            </p>
            <p className="font-body text-cream-dim leading-relaxed mb-10">
              Every shipment is backed by complete export documentation, professional logistics, and transparent communication — from our farms to your port of destination.
            </p>

            <div className="flex flex-wrap gap-4">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-leaf text-gold text-xs font-body font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SlideFromRight>
        </div>
      </div>
    </section>
  );
}
