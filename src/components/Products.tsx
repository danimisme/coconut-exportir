"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealSection, SlideFromLeft, SlideFromRight, fadeUp } from "@/lib/motion";
import { whatsappHrefWithMessage } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";

const SPECS = [
  { label: "Jenis Produk", value: "Semi Husked Coconut" },
  { label: "Grade", value: "Ekspor (Grade A)" },
  { label: "Ukuran", value: "Medium – Large" },
  { label: "Kondisi", value: "Segar, kulit luar dikupas sebagian" },
  { label: "Kemasan", value: "Jaring / Karung / Sesuai permintaan" },
  { label: "Term Pengiriman", value: "CIF & FOB" },
  { label: "Min. Order", value: "1 × Container 40-ft" },
  { label: "Tujuan Ekspor", value: "China, Thailand, Vietnam & lainnya" },
];

export default function Products() {
  return (
    <section id="produk" className="bg-forest min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="mb-16 text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            Produk Kami
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl lg:text-6xl text-cream font-semibold leading-tight"
          >
            Semi Husked
            <em className="block italic font-light text-gold">Coconut</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-cream-dim font-body max-w-2xl mx-auto">
            Kami fokus pada satu produk unggulan — semi husked coconut berkualitas tinggi yang
            siap memenuhi kebutuhan importir di seluruh Asia dan dunia.
          </motion.p>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SlideFromLeft distance={150} className="space-y-4">
            <div className="relative h-80 rounded-2xl overflow-hidden bg-forest-light">
              <Image
                src="https://images.unsplash.com/photo-1597636319015-1fce74db8798?w=800&h=600&fit=crop&auto=format"
                alt="Semi husked coconut close-up"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-xl overflow-hidden bg-forest-light">
                <Image
                  src="https://images.unsplash.com/photo-1553787434-dd9eb4ea4d0b?w=400&h=300&fit=crop&auto=format"
                  alt="Tumpukan kelapa semi husked"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden bg-forest-light">
                <Image
                  src="https://images.unsplash.com/photo-1560769680-ba2f3767c785?w=400&h=300&fit=crop&auto=format"
                  alt="Kelapa siap ekspor"
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
                  <h3 className="font-display text-2xl text-cream font-semibold">Spesifikasi Produk</h3>
                </div>
                <div className="divide-y divide-leaf/30">
                  {SPECS.map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      variants={fadeUp}
                      custom={i * 0.5}
                      className="flex items-start gap-4 px-6 py-4"
                    >
                      <span className="font-body text-cream-dim/60 text-sm w-40 shrink-0">
                        {spec.label}
                      </span>
                      <span className="font-body text-cream text-sm font-medium">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href={whatsappHrefWithMessage("Halo, saya ingin tanya harga Semi Husked Coconut")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-xl bg-gold text-forest font-body font-bold text-sm hover:bg-gold-light transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Minta Penawaran
                </a>
                <a
                  href="#kontak"
                  className="flex items-center justify-center py-4 rounded-xl border border-leaf text-cream-dim font-body font-medium text-sm hover:border-gold hover:text-gold transition-colors"
                >
                  Form Inquiry
                </a>
              </div>
            </div>
          </SlideFromRight>
        </div>
      </div>
    </section>
  );
}
