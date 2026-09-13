"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RevealSection, SlideFromLeft, SlideFromRight, fadeUp } from "@/lib/motion";

const VIDEOS = [
  {
    src: "/videos/splitting-coconut.mp4",
    poster: "/images/coconut-pile-1.jpg",
    title: "Proses Membelah Kelapa",
    desc: "Kelapa dibelah langsung di lokasi untuk memastikan kematangan dan kualitas setiap butir.",
  },
  {
    src: "/videos/coconut-quality.mp4",
    poster: "/images/split-coconut-1.jpg",
    title: "Kualitas Daging Kelapa",
    desc: "Daging kelapa tebal, segar, dan konsisten — bukti langsung kualitas ekspor kami.",
  },
];

function AutoPlayVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (inView) {
      ref.current?.play().catch(() => {});
    } else {
      ref.current?.pause();
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full aspect-square object-cover bg-black"
    />
  );
}

export default function VideoShowcase() {
  return (
    <section className="bg-forest-mid h-screen flex flex-col justify-center overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <RevealSection className="mb-10 text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-gold font-body text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            Bukti Kualitas
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-4xl lg:text-5xl text-cream font-semibold leading-tight"
          >
            Lihat Langsung
            <em className="block italic font-light text-gold">Kualitas Kelapa Kami</em>
          </motion.h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl sm:max-w-3xl mx-auto">
          {VIDEOS.map((video, i) => {
            const Slide = i === 0 ? SlideFromLeft : SlideFromRight;
            return (
              <Slide key={video.src} distance={130}>
                <div className="rounded-2xl overflow-hidden border border-leaf/40 bg-forest">
                  <AutoPlayVideo src={video.src} poster={video.poster} />
                  <div className="p-5">
                    <h3 className="font-display text-xl text-cream font-semibold mb-1">{video.title}</h3>
                    <p className="font-body text-cream-dim text-sm leading-relaxed">{video.desc}</p>
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
