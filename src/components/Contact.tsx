"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealSection, fadeUp } from "@/lib/motion";
import { siteConfig, whatsappHref, whatsappDigits } from "@/lib/site-config";
import { destinations } from "./Destinations";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", country: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Halo ${siteConfig.name},\n\nNama: ${form.name}\nEmail: ${form.email}\nPerusahaan: ${form.company}\nNegara: ${form.country}\n\nPesan:\n${form.message}`
    );
    window.open(`https://wa.me/${whatsappDigits}?text=${waText}`, "_blank");
    setSent(true);
  };

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section
      id="kontak"
      className="relative bg-forest-mid min-h-screen flex flex-col justify-center py-20 overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <RevealSection>
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            Hubungi Kami
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl lg:text-6xl text-cream font-semibold leading-tight mb-4"
          >
            Siap Mengimpor
            <em className="block italic font-light text-gold">Semi Husked Coconut?</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-cream-dim font-body mb-4">
            Isi form di bawah dan kami akan menghubungi Anda via WhatsApp dalam waktu singkat.
          </motion.p>
          <motion.a
            variants={fadeUp}
            custom={2.5}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold font-body text-sm font-medium mb-10 hover:underline"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp langsung: {siteConfig.whatsappDisplay}
          </motion.a>

          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                variants={fadeUp}
                custom={3}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nama Lengkap *"
                    required
                    value={form.name}
                    onChange={set("name")}
                    className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream font-body text-sm placeholder-cream-dim/40 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={form.email}
                    onChange={set("email")}
                    className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream font-body text-sm placeholder-cream-dim/40 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nama Perusahaan"
                    value={form.company}
                    onChange={set("company")}
                    className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream font-body text-sm placeholder-cream-dim/40 focus:outline-none focus:border-gold transition-colors"
                  />
                  <select
                    value={form.country}
                    onChange={set("country")}
                    className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream-dim/70 font-body text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="">Negara Asal</option>
                    {destinations.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Kebutuhan Anda (jumlah container, term, jadwal, dll)..."
                  value={form.message}
                  onChange={set("message")}
                  className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream font-body text-sm placeholder-cream-dim/40 focus:outline-none focus:border-gold transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-xl bg-gold text-forest font-body font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Kirim via WhatsApp
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 flex flex-col items-center gap-4"
              >
                <div className="text-5xl">🥥</div>
                <h3 className="font-display text-2xl text-cream">Terima Kasih!</h3>
                <p className="text-cream-dim font-body">
                  WhatsApp kami sudah terbuka dengan pesan Anda. Kami akan segera merespons.
                </p>
                <button onClick={() => setSent(false)} className="mt-4 text-gold text-sm font-body underline">
                  Kirim pesan lain
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </RevealSection>
      </div>
    </section>
  );
}
