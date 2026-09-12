"use client";

import { RevealSection, SlideFromLeft, SlideFromRight, fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: "🏆",
    title: "Kualitas Grade Ekspor",
    desc: "Setiap kelapa dipilih secara ketat — ukuran seragam, kondisi segar, sabut dikupas rapi sesuai standar importir internasional. Konsisten di setiap kontainer.",
    dir: "left" as const,
  },
  {
    icon: "🚢",
    title: "Term Fleksibel: CIF & FOB",
    desc: "Kami melayani pengiriman dengan term CIF maupun FOB sesuai kebutuhan buyer. Dokumen ekspor lengkap: Phytosanitary, Certificate of Origin, B/L, dan Packing List.",
    dir: "right" as const,
  },
  {
    icon: "🌏",
    title: "Pengalaman Ekspor Teruji",
    desc: "Track record pengiriman ke China, Thailand, Vietnam, dan negara Asia lainnya. Kami memahami prosedur bea cukai dan persyaratan karantina di setiap negara tujuan.",
    dir: "left" as const,
  },
  {
    icon: "📋",
    title: "Logistik & Dokumentasi Profesional",
    desc: "Tim kami menangani seluruh proses dari pengadaan, fumigasi, stuffing container 40-ft, hingga pengurusan dokumen — Anda cukup terima barang tepat waktu.",
    dir: "right" as const,
  },
];

export default function WhyUs() {
  return (
    <section id="keunggulan" className="bg-forest-mid min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="mb-20 text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            Mengapa Kami
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl lg:text-6xl text-cream font-semibold leading-tight"
          >
            Lebih dari Sekadar
            <em className="block italic font-light text-gold">Pemasok Kelapa</em>
          </motion.h2>
        </RevealSection>

        <div className="space-y-8">
          {advantages.map((adv, i) => {
            const Slide = adv.dir === "left" ? SlideFromLeft : SlideFromRight;
            return (
              <Slide key={adv.title} distance={180}>
                <div className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl border border-leaf/40 bg-forest/40 hover:border-gold/30 transition-colors duration-500 group">
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
