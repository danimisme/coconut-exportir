"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const galleryImages = [
  { src: "/images/coconut-pile-1.jpg", caption: "Stok kelapa siap ekspor" },
  { src: "/images/split-coconut-1.jpg", caption: "Kualitas daging kelapa premium" },
  { src: "/images/coconut-grading.jpg", caption: "Penimbangan & grading per butir" },
  { src: "/images/coconut-pile-4.jpg", caption: "Gudang penyimpanan kelapa" },
  { src: "/images/split-coconut-2.jpg", caption: "Kelapa dibelah, grade ekspor" },
  { src: "/images/coconut-pile-5.jpg", caption: "Kelapa siap dikemas" },
];

const IMG_W = 480;
const IMG_H = 340;
const IMG_GAP = 24;

export default function HorizontalGallery() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const xRef = useRef<HTMLDivElement>(null);

  const [travel, setTravel] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (stripRef.current) {
        setTravel(Math.max(0, stripRef.current.scrollWidth - window.innerWidth));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (stripRef.current) ro.observe(stripRef.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const xMotion = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const xSpring = useSpring(xMotion, { stiffness: 60, damping: 22 });

  useEffect(() => {
    return xSpring.on("change", (v) => {
      if (xRef.current) xRef.current.style.transform = `translateX(${v}px)`;
    });
  }, [xSpring]);

  const [pct, setPct] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (v) => setPct(Math.round(v * 100)));
  }, [scrollYProgress]);

  const sectionH = galleryImages.length * 80 + 100;

  return (
    <section
      ref={outerRef}
      className="relative bg-[#060f08]"
      style={{ height: `${sectionH}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(28,66,38,0.3), transparent 70%)",
          }}
        />

        <div className="px-10 mb-10 relative z-10">
          <p className="text-gold font-body text-[10px] font-medium tracking-[0.35em] uppercase mb-2">
            Dari Produk Kami
          </p>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-5xl md:text-6xl text-cream font-semibold leading-none">
              Langsung dari
              <em className="block italic font-light text-gold">Sumbernya</em>
            </h2>
            <span className="font-display text-[80px] font-bold text-cream/6 leading-none select-none hidden md:block">
              {String(Math.min(galleryImages.length, Math.ceil((pct / 100) * galleryImages.length) + 1)).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="relative z-10 overflow-visible">
          <div ref={xRef} style={{ display: "flex", gap: IMG_GAP, paddingLeft: 40, willChange: "transform" }}>
            <div ref={stripRef} style={{ display: "flex", gap: IMG_GAP }}>
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative shrink-0 rounded-2xl overflow-hidden group bg-forest-light"
                  style={{ width: IMG_W, height: IMG_H }}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes={`${IMG_W}px`}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#060f08]/85 via-[#060f08]/10 to-transparent" />
                  <span className="absolute top-5 left-5 font-display text-5xl font-bold text-cream/10 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-body text-cream text-sm font-medium">{img.caption}</p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-10 right-10 z-20 flex items-center gap-4">
          <div className="flex-1 h-px bg-leaf/40 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gold rounded-full"
              style={{ width: `${pct}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <span className="text-cream-dim/50 font-body text-[10px] tracking-[0.2em] uppercase shrink-0">
            {pct}%
          </span>
          <span className="text-cream-dim/30 font-body text-[10px]">↓ scroll</span>
        </div>
      </div>
    </section>
  );
}
