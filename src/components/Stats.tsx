"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Counter, RevealSection, SlideFromLeft, SlideFromRight, fadeUp } from "@/lib/motion";

const stats = [
  { value: 3, suffix: "+", label: "Negara Tujuan Ekspor Aktif" },
  { value: 40, suffix: "-ft", label: "Ukuran Container Pengiriman" },
  { value: 2, suffix: " Term", label: "Opsi Pengiriman (CIF & FOB)" },
  { value: 100, suffix: "%", label: "Komitmen Tepat Waktu" },
];

export default function Stats() {
  return (
    <section
      id="statistik"
      className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden bg-forest"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618478872836-f8efa847e8ab?w=1800&h=800&fit=crop&auto=format"
          alt="Kebun kelapa luas"
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-forest/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-5xl text-cream font-semibold">
            Komitmen Kami dalam
            <em className="italic font-light text-gold"> Angka</em>
          </motion.h2>
        </RevealSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Slide = i < 2 ? SlideFromLeft : SlideFromRight;
            return (
              <Slide
                key={stat.label}
                distance={100}
                className="text-center p-8 rounded-2xl border border-leaf/50 bg-forest-mid/40 backdrop-blur-sm hover:border-gold/40 transition-colors duration-300"
              >
                <div className="font-display text-5xl lg:text-6xl font-bold text-gold mb-3">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-cream-dim text-sm leading-tight">{stat.label}</div>
              </Slide>
            );
          })}
        </div>
      </div>
    </section>
  );
}
