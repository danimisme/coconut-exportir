"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealSection, SlideFromRight, fadeUp } from "@/lib/motion";
import { siteConfig, whatsappHref, whatsappDigits } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Hello ${siteConfig.name},\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/${whatsappDigits}?text=${waText}`, "_blank");
    setSent(true);
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`;

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section
      id="kontak"
      className="relative bg-forest-mid scroll-mt-24 min-h-screen flex flex-col justify-center py-20 overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <RevealSection>
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            Contact Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl sm:text-5xl lg:text-6xl text-cream font-semibold leading-tight mb-4"
          >
            Ready to Import
            <em className="block italic font-light text-gold">Export-Quality Coconut?</em>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-cream-dim font-body mb-4">
            Fill out the form below and we&apos;ll reach out to you on WhatsApp shortly.
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
            Direct WhatsApp: {siteConfig.whatsappDisplay}
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
                    placeholder="Full Name *"
                    required
                    value={form.name}
                    onChange={set("name")}
                    className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream font-body text-sm placeholder-cream-dim focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={form.email}
                    onChange={set("email")}
                    className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream font-body text-sm placeholder-cream-dim focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={set("company")}
                  className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream font-body text-sm placeholder-cream-dim focus:outline-none focus:border-gold transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your requirements (container quantity, terms, schedule, etc.)..."
                  value={form.message}
                  onChange={set("message")}
                  className="px-5 py-4 rounded-xl bg-forest border border-leaf text-cream font-body text-sm placeholder-cream-dim focus:outline-none focus:border-gold transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-xl bg-gold text-white font-body font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Send via WhatsApp
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
                <h3 className="font-display text-2xl text-cream">Thank You!</h3>
                <p className="text-cream-dim font-body">
                  WhatsApp is now open with your message. We&apos;ll get back to you shortly.
                </p>
                <button onClick={() => setSent(false)} className="mt-4 text-gold text-sm font-body underline">
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </RevealSection>

        <SlideFromRight distance={120} className="lg:pt-2">
          <p className="text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4">
            See Our Location
          </p>
          <div className="relative h-90 rounded-2xl overflow-hidden border border-leaf/40">
            <iframe
              src={mapSrc}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Lokasi ${siteConfig.name}`}
            />
          </div>
          <div className="mt-6 rounded-2xl border border-leaf/40 bg-forest p-6">
            <p className="text-cream-dim font-body text-sm leading-relaxed">{siteConfig.address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-gold font-body text-sm font-medium hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </SlideFromRight>
        </div>
      </div>
    </section>
  );
}
