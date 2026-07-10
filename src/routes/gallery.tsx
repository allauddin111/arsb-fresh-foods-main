import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
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
  { src: hero, alt: "Crate of fresh produce", span: "md:col-span-2 md:row-span-2" },
  { src: pPom, alt: "Pomegranates" },
  { src: pChilli, alt: "Green chillies" },
  { src: market, alt: "Wholesale market", span: "md:col-span-2" },
  { src: pBanana, alt: "Bananas" },
  { src: pGrapes, alt: "Grapes" },
  { src: about, alt: "Hands holding pomegranates", span: "md:row-span-2" },
  { src: pOnion, alt: "Onions" },
  { src: pCoco, alt: "Coconuts" },
  { src: pMango, alt: "Mangoes" },
  { src: pTomato, alt: "Tomatoes" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-leaf-deep">
            <Camera className="h-3.5 w-3.5" /> Gallery
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl text-leaf-deep text-balance max-w-3xl mx-auto">Inside the world of fresh produce.</h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">From the farm to the Al-Aweer market — a glimpse of what we do, every single day.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {shots.map((s, i) => (
            <figure key={i} className={`relative overflow-hidden rounded-2xl group ring-1 ring-border ${s.span ?? ""}`}>
              <img src={s.src} alt={s.alt} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={800} />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-leaf-deep/80 to-transparent text-primary-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">{s.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}