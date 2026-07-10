import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import hero from "@/assets/hero.jpg";
import market from "@/assets/market.jpg";
import about from "@/assets/about.jpg";
import pOnion from "@/assets/p-onion.jpg";
import pChilli from "@/assets/p-chilli.jpg";
import pBanana from "@/assets/p-banana.jpg";
import pGrapes from "@/assets/p-grapes.jpg";
import pPom from "@/assets/p-pomegranate.jpg";
import pCoco from "@/assets/p-coconut.jpg";
import pMango from "@/assets/p-mango.jpg";
import pTomato from "@/assets/p-tomato.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ARSB Trading LLC" },
      { name: "description", content: "A visual look at our produce, operations and the Al-Aweer Central Fruits & Vegetables market." },
      { property: "og:title", content: "Gallery — ARSB Trading LLC" },
      { property: "og:description", content: "Inside the world of fresh produce trading in Dubai." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const shots = [
  { src: hero,    alt: "Crate of fresh produce",       span: "md:col-span-2 md:row-span-2" },
  { src: pPom,    alt: "Pomegranates" },
  { src: pChilli, alt: "Green chillies" },
  { src: market,  alt: "Wholesale market",              span: "md:col-span-2" },
  { src: pBanana, alt: "Bananas" },
  { src: pGrapes, alt: "Grapes" },
  { src: about,   alt: "Hands holding pomegranates",   span: "md:row-span-2" },
  { src: pOnion,  alt: "Onions" },
  { src: pCoco,   alt: "Coconuts" },
  { src: pMango,  alt: "Mangoes" },
  { src: pTomato, alt: "Tomatoes" },
];

function GalleryPage() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div
          className="absolute top-[-5rem] left-[-5rem] h-[26rem] w-[26rem] rounded-full opacity-20 animate-orb-drift pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.09 140 / 0.5), transparent 65%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-leaf-deep shadow-sm">
            <Camera className="h-3.5 w-3.5" /> Gallery
          </div>
          <h1 className="animate-fade-in-up delay-100 mt-6 font-display text-5xl md:text-6xl text-leaf-deep text-balance max-w-3xl mx-auto">
            Inside the world of fresh produce.
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
            From the farm to the Al-Aweer market — a glimpse of what we do, every single day.
          </p>
        </div>
      </section>

      {/* ── MASONRY GRID ─────────────────────────────────────────── */}
      <section ref={gridRef} className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`reveal-scale stagger-${(i % 6) + 1} relative overflow-hidden rounded-2xl group ring-1 ring-border hover:ring-leaf/30 hover:shadow-xl hover:shadow-leaf-deep/15 transition-all duration-500 ${s.span ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={800}
              />

              {/* Dark overlay + label */}
              <figcaption className="absolute inset-0 bg-gradient-to-t from-leaf-deep/80 via-leaf-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end">
                <div className="w-full p-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                  <span className="inline-block text-primary-foreground text-sm font-medium tracking-wide">
                    {s.alt}
                  </span>
                </div>
              </figcaption>

              {/* Shimmer sweep */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, oklch(1 0 0 / 0.12) 50%, transparent 60%)",
                }}
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}