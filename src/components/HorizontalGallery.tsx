"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const galleryImages = [
  { src: "/images/coconut-pile-1.jpg", caption: "Coconut stock ready for export" },
  { src: "/images/split-coconut-1.jpg", caption: "Premium coconut flesh quality" },
  { src: "/images/coconut-grading.jpg", caption: "Weighing & grading per nut" },
  { src: "/images/split-coconut-2.jpg", caption: "Every nut inspected before shipping" },
  { src: "/images/whole-sale-coconuts.png", caption: "Neatly packed, 20–30 nuts per sack" },
];

const IMG_W = 480;
const IMG_H = 340;
const IMG_GAP = 24;

export default function HorizontalGallery() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const xRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const scrollMobile = (dir: 1 | -1) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.78;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

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
    <>
      <section
        ref={outerRef}
        className="relative bg-forest hidden lg:block"
        style={{ height: `${sectionH}vh` }}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(138,95,31,0.15), transparent 70%)",
            }}
          />

          <div className="px-10 mb-10 relative z-10">
            <p className="text-gold font-body text-[10px] font-medium tracking-[0.35em] uppercase mb-2">
              From Our Products
            </p>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-5xl md:text-6xl text-cream font-semibold leading-none">
                See For Yourself
                <em className="block italic font-light text-gold">The Proof</em>
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
                    <span className="absolute top-5 left-5 font-display text-5xl font-bold text-[#f5efe3]/10 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-body text-[#f5efe3] text-sm font-medium">{img.caption}</p>
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

      <section className="relative bg-forest lg:hidden py-20">
        <div className="px-6 mb-8">
          <p className="text-gold font-body text-[10px] font-medium tracking-[0.35em] uppercase mb-2">
            From Our Products
          </p>
          <h2 className="font-display text-4xl text-cream font-semibold leading-none">
            See For Yourself
            <em className="block italic font-light text-gold">The Proof</em>
          </h2>
        </div>

        <div
          ref={mobileScrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-none"
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              data-card
              className="relative shrink-0 w-[78vw] max-w-sm h-72 rounded-2xl overflow-hidden bg-forest-light snap-center"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="78vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#060f08]/85 via-[#060f08]/10 to-transparent" />
              <span className="absolute top-4 left-4 font-display text-4xl font-bold text-[#f5efe3]/10 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-body text-[#f5efe3] text-sm font-medium">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <button
            type="button"
            onClick={() => scrollMobile(-1)}
            aria-label="Previous image"
            className="w-10 h-10 rounded-full border border-leaf/50 flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollMobile(1)}
            aria-label="Next image"
            className="w-10 h-10 rounded-full border border-leaf/50 flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors"
          >
            →
          </button>
        </div>
      </section>
    </>
  );
}
