"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const spiralCards = [
  {
    num: "01",
    title: "Farm Sourcing",
    desc: "Selected from trusted partner farms in Deli Serdang, North Sumatra, with optimal ripeness standards.",
    img: "/images/coconut-pile.jpg",

    tag: "Origin",
  },
  {
    num: "02",
    title: "Husking Process",
    desc: "Husk removed to match the product type (de husked / semi husked) with precision — resulting in a clean, consistent look for every nut.",
    img: "/images/coconut-pile-1.jpg",

    tag: "Process",
  },
  {
    num: "03",
    title: "Quality Control",
    desc: "Every coconut is weighed and sorted into Grade A, B, or C based on weight, color, and freshness before passing.",
    img: "/images/coconut-grading.jpg",
    tag: "Quality",
  },
  {
    num: "04",
    title: "Container Stuffing",
    desc: "Packed 20–30 nuts per sack, loaded into 40-ft/20-ft containers with optimal layout to preserve quality during transit.",
    img: "/images/whole-sale-coconuts.png",
    tag: "Export",
  },
  {
    num: "05",
    title: "Global Shipping",
    desc: "From our port, containers sail to regional buyers — accompanied by complete export documentation from start to finish.",
    img: "/images/split-coconut-3.jpg",
    tag: "Global",
  },
];

// MATH: card i faces camera at v = i/N (rotateY cycle = 360°/N per card).
// translatorY = v * -(N * STEP) so card i lands at viewport-center Y when v = i/N.
const HELIX_RADIUS = 460;
const HELIX_STEP = 360;

export default function SpiralSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const translatorRef = useRef<HTMLDivElement>(null);
  const rotorRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);

  const N = spiralCards.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const groupY = v * -(N * HELIX_STEP);
      const groupRot = v * -360;

      if (translatorRef.current) translatorRef.current.style.transform = `translateY(${groupY}px)`;
      if (rotorRef.current) rotorRef.current.style.transform = `rotateY(${groupRot}deg)`;

      const idx = Math.min(N - 1, Math.floor(v * N + 0.5));
      activeIdxRef.current = idx;
      setActiveIdx(idx);
    });
  }, [scrollYProgress, N]);

  useEffect(() => {
    const lastSnapAt = { t: 0 };
    const wasActive = { v: false };

    const onWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isActive = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isActive) {
        wasActive.v = false;
        return;
      }

      const dir = e.deltaY > 0 ? 1 : -1;

      if (!wasActive.v) {
        wasActive.v = true;
        lastSnapAt.t = Date.now();
        e.preventDefault();
        return;
      }

      const next = Math.max(0, Math.min(N - 1, activeIdxRef.current + dir));
      if (next === activeIdxRef.current) return;

      const now = Date.now();
      if (now - lastSnapAt.t < 1000) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      lastSnapAt.t = now;
      const sectionAbsTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionAbsTop + next * window.innerHeight, behavior: "smooth" });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [N]);

  return (
    <div id="alur-ekspor" className="scroll-mt-24">
    <section
      ref={sectionRef}
      className="relative hidden lg:block"
      style={{
        height: `${N * 100 + 100}vh`,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1597636319015-1fce74db8798?w=1800&h=1200&fit=crop&auto=format)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "36%",
          paddingTop: 80,
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        {spiralCards.map((card, i) => (
          <div
            key={card.num}
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              paddingLeft: 52,
              paddingRight: 32,
            }}
          >
            <div style={{ pointerEvents: "auto" }}>
              <span
                className="font-display font-bold leading-none block select-none"
                style={{ fontSize: 80, color: "rgba(245,239,227,0.05)", lineHeight: 1, marginBottom: 12 }}
              >
                {card.num}
              </span>
              <span className="inline-block px-3 py-1 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] font-body text-[10px] tracking-[0.25em] uppercase mb-5">
                {card.tag}
              </span>
              <h3 className="font-display text-3xl text-[#f5efe3] font-semibold leading-tight mb-4">
                {card.title}
              </h3>
              <div className="w-10 h-px bg-[#c9a84c] mb-4" />
              <p className="font-body text-[#f5efe3]/70 text-sm leading-relaxed">{card.desc}</p>
              <p className="font-body text-[#f5efe3]/25 text-[10px] tracking-[0.3em] uppercase mt-6">
                {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="sticky top-0 overflow-hidden"
        style={{
          height: "100vh",
          background: "rgba(6,15,8,0.65)",
          perspective: "1100px",
          perspectiveOrigin: "50% calc(50% + 40px)",
        }}
      >
        <div className="absolute z-30 text-right" style={{ top: 96, right: 48 }}>
          <span className="text-[#c9a84c] font-body text-[10px] tracking-[0.35em] uppercase block mb-2">
            Export Journey — Scroll ↓
          </span>
          <h2 className="font-display text-4xl text-[#f5efe3] font-semibold">
            From Our Farm
            <em className="italic font-light text-[#c9a84c]"> to Your Port</em>
          </h2>
        </div>

        <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0 }}>
          <div ref={translatorRef} style={{ position: "absolute", width: 0, height: 0, willChange: "transform" }}>
            <div
              ref={rotorRef}
              style={{
                position: "absolute",
                width: 0,
                height: 0,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              {spiralCards.map((card, i) => {
                const armAngle = (i / N) * 360;
                const cardY = i * HELIX_STEP;
                return (
                  <div
                    key={card.num}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 0,
                      height: 0,
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${armAngle}deg) translateZ(${HELIX_RADIUS}px)`,
                    }}
                  >
                    <HelixCard card={card} cardY={cardY} index={i} activeIdx={activeIdx} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {spiralCards.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === activeIdx ? 28 : 8,
                backgroundColor: i === activeIdx ? "#c9a84c" : "#2d6a3f",
                opacity: i === activeIdx ? 1 : 0.4,
              }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>

    {/* Mobile fallback: simple stacked list, no pinning/3D — keeps the same dark "export journey" moment without the desktop-only pinned interaction */}
    <div className="lg:hidden bg-[#0a1f0f] px-6 py-20">
      <p className="text-[#c9a84c] font-body text-xs font-medium tracking-[0.3em] uppercase mb-2">
        Export Journey
      </p>
      <h2 className="font-display text-4xl text-[#f5efe3] font-semibold mb-10">
        From Our Farm <em className="italic font-light text-[#c9a84c]">to Your Port</em>
      </h2>
      <div className="space-y-6">
        {spiralCards.map((card, i) => (
          <div key={card.num} className="rounded-2xl overflow-hidden border border-[#2d6a3f]/40 bg-[#122b19]">
            <div className="relative h-48">
              <Image src={card.img} alt={card.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060f08]/70 to-transparent" />
              <span className="absolute top-3 right-3 font-display text-[#f5efe3]/20 text-3xl font-bold leading-none select-none">
                {card.num}
              </span>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] font-body text-[10px] tracking-[0.25em] uppercase mb-3">
                {card.tag}
              </span>
              <h3 className="font-display text-xl text-[#f5efe3] font-semibold mb-2">{card.title}</h3>
              <p className="font-body text-[#f5efe3]/70 text-sm leading-relaxed">{card.desc}</p>
              <p className="font-body text-[#f5efe3]/25 text-[10px] tracking-[0.3em] uppercase mt-4">
                {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

function HelixCard({
  card,
  cardY,
  index,
  activeIdx,
}: {
  card: (typeof spiralCards)[0];
  cardY: number;
  index: number;
  activeIdx: number;
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = index === activeIdx;

  const targetScale = isActive ? 1.7 : hovered ? 1.08 : 1;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: targetScale }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        position: "absolute",
        translateX: "-50%",
        top: cardY,
        marginTop: -130,
        width: 300,
        cursor: "pointer",
        transformOrigin: "center center",
        zIndex: isActive ? 10 : 1,
      }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background:
            hovered || isActive ? "linear-gradient(145deg,#1c4226,#122b19)" : "linear-gradient(145deg,#122b19,#060f08)",
          border: hovered || isActive ? "1.5px solid #c9a84c" : "1px solid rgba(45,106,63,0.45)",
          boxShadow: isActive
            ? "0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(201,168,76,0.12)"
            : "0 20px 50px rgba(0,0,0,0.5)",
          transition: "background 0.4s, border 0.4s, box-shadow 0.4s",
        }}
      >
        <div className="relative overflow-hidden" style={{ height: 260 }}>
          <Image
            src={card.img}
            alt={card.title}
            fill
            sizes="300px"
            className="object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#060f08]/70 to-transparent" />
          <span className="absolute top-3 right-3 font-display text-[#c9a84c]/20 text-4xl font-bold leading-none select-none">
            {card.num}
          </span>
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-500"
            style={{
              background: isActive ? "linear-gradient(90deg,#c9a84c,rgba(201,168,76,0.3))" : "transparent",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
