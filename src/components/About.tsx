"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SlideFromLeft, SlideFromRight } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

const TAGS = ["CIF & FOB Terms", "Dokumentasi Lengkap", "Container 40-ft", "Grade Ekspor"];

export default function About() {
  return (
    <section
      id="tentang-kami"
      className="relative bg-forest min-h-screen flex flex-col justify-center py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-light/25 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideFromLeft distance={160} className="relative">
            <div className="relative h-130 rounded-2xl overflow-hidden bg-forest-light">
              <Image
                src="https://images.unsplash.com/photo-1560769680-ba2f3767c785?w=800&h=1000&fit=crop&auto=format"
                alt="Semi husked coconut produk ekspor"
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
              className="absolute -bottom-8 -right-6 bg-gold text-forest rounded-2xl p-6 shadow-xl"
            >
              <div className="font-display text-4xl font-bold leading-none">40-ft</div>
              <div className="font-body text-xs font-semibold tracking-wide mt-1 uppercase">
                Container Siap Kirim
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute -top-8 -left-6 w-44 h-44 rounded-xl overflow-hidden border-4 border-forest shadow-xl bg-forest-light"
            >
              <Image
                src="https://images.unsplash.com/photo-1603779046675-2eccbab9b982?w=300&h=300&fit=crop&auto=format"
                alt="Kelapa segar langsung dari kebun"
                fill
                sizes="176px"
                className="object-cover"
              />
            </motion.div>
          </SlideFromLeft>

          <SlideFromRight distance={160}>
            <div className="mb-3">
              <span className="text-gold font-body text-xs font-medium tracking-[0.3em] uppercase">
                Tentang Kami
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl text-cream font-semibold leading-[1.05] mb-6">
              Sourcing Terpercaya,
              <em className="block italic font-light text-gold">Standar Ekspor Global</em>
            </h2>
            <p className="font-body text-cream-dim text-lg leading-relaxed mb-5">
              <strong className="text-cream">{siteConfig.name}</strong> adalah eksportir semi
              husked coconut berbasis di {siteConfig.address}, dengan jaringan sourcing langsung
              dari kebun-kebun kelapa terbaik di Sumatera dan sekitarnya.
            </p>
            <p className="font-body text-cream-dim leading-relaxed mb-5">
              Kami memahami bahwa importir membutuhkan lebih dari sekadar produk — mereka
              membutuhkan mitra yang andal. Setiap pengiriman kami didukung oleh dokumentasi
              ekspor lengkap, logistik profesional, dan komunikasi yang transparan dari awal
              hingga barang tiba di tangan Anda.
            </p>
            <p className="font-body text-cream-dim leading-relaxed mb-10">
              Produk kami menjangkau pasar Asia, termasuk China, Thailand, dan Vietnam — dengan
              komitmen pengiriman tepat waktu dan kualitas yang konsisten di setiap kontainer.
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
