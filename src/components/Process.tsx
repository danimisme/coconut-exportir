"use client";

import { RevealSection, SlideFromLeft, SlideFromRight, fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Sourcing & Seleksi",
    desc: "Kelapa dipilih dari kebun mitra terpercaya di Sumatera dengan standar ukuran, kesegaran, dan kondisi sabut yang ketat.",
    icon: "🌿",
  },
  {
    num: "02",
    title: "Pengupasan Sabut",
    desc: "Proses semi husking dilakukan secara manual dan mekanik, menghasilkan produk bersih siap ekspor dengan tampilan konsisten.",
    icon: "🥥",
  },
  {
    num: "03",
    title: "Sortir & Grading",
    desc: "Setiap kelapa disortir berdasarkan ukuran dan kualitas. Hanya grade A yang lolos untuk pengiriman ekspor.",
    icon: "⚙️",
  },
  {
    num: "04",
    title: "Fumigasi & Karantina",
    desc: "Fumigasi dan pengurusan sertifikat phytosanitary sesuai regulasi negara tujuan.",
    icon: "🔬",
  },
  {
    num: "05",
    title: "Stuffing & Pengiriman",
    desc: "Pemuatan ke container 40-ft yang bersih, pengurusan dokumen B/L, dan pengiriman ke pelabuhan tujuan sesuai jadwal.",
    icon: "🚢",
  },
];

export default function Process() {
  return (
    <section id="proses" className="bg-forest min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="mb-20 max-w-xl">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            Alur Ekspor
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl lg:text-6xl text-cream font-semibold leading-tight"
          >
            Dari Kebun
            <em className="block italic font-light text-gold">ke Pelabuhan Anda</em>
          </motion.h2>
        </RevealSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-13 left-0 right-0 h-px bg-leaf/50" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Slide = i % 2 === 0 ? SlideFromLeft : SlideFromRight;
              return (
                <Slide key={step.num} distance={120} className="relative flex flex-col">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-5">
                    <div className="relative z-10 w-13 h-13 rounded-full bg-forest border-2 border-gold flex items-center justify-center text-xl shrink-0">
                      {step.icon}
                    </div>
                    <span className="font-display text-gold/30 text-5xl font-bold leading-none lg:mt-2">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-cream font-semibold mb-2">{step.title}</h3>
                  <p className="font-body text-cream-dim text-sm leading-relaxed">{step.desc}</p>
                </Slide>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
