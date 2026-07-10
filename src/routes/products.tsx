import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import pOnion from "@/assets/p-onion.jpg";
import pChilli from "@/assets/p-chilli.jpg";
import pBanana from "@/assets/p-banana.jpg";
import pGrapes from "@/assets/p-grapes.jpg";
import pPom from "@/assets/p-pomegranate.jpg";
import pCoco from "@/assets/p-coconut.jpg";
import pMango from "@/assets/p-mango.jpg";
import pTomato from "@/assets/p-tomato.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ARSB Trading LLC" },
      { name: "description", content: "Fresh fruits and vegetables we import and distribute — onions, green chillies, bananas, grapes, pomegranates, coconuts, mangoes and more." },
      { property: "og:title", content: "Our Produce — ARSB Trading LLC" },
      { property: "og:description", content: "Premium fruits and vegetables sourced from India and delivered fresh across the UAE." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const items = [
  { name: "Onion",             img: pOnion,  origin: "Maharashtra, Karnataka",       note: "Year-round availability, multiple grades." },
  { name: "Green Chilli",      img: pChilli, origin: "Karnataka, Andhra Pradesh",    note: "Hand-picked, calibrated lengths." },
  { name: "Banana",            img: pBanana, origin: "Tamil Nadu",                   note: "Cavendish and regional varieties." },
  { name: "Grapes",            img: pGrapes, origin: "Maharashtra",                  note: "Premium export-grade table grapes." },
  { name: "Pomegranate",       img: pPom,    origin: "Maharashtra, Gujarat",         note: "Bhagwa variety, deep ruby seeds." },
  { name: "Semi Husk Coconut", img: pCoco,   origin: "Kerala, Karnataka",            note: "Cleaned semi-husk, long shelf life." },
  { name: "Mango",             img: pMango,  origin: "Seasonal — India-wide",        note: "Alphonso, Kesar, Banganapalli." },
  { name: "Tomato",            img: pTomato, origin: "Karnataka, Maharashtra",       note: "Vine-ripened, consistent firmness." },
];

function ProductsPage() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div
          className="absolute top-[-5rem] right-[-5rem] h-[26rem] w-[26rem] rounded-full opacity-25 animate-orb-drift pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.09 140 / 0.5), transparent 65%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-leaf-deep shadow-sm">
            <Leaf className="h-3.5 w-3.5" /> What We Trade
          </div>
          <h1 className="animate-fade-in-up delay-100 mt-6 font-display text-5xl md:text-6xl text-leaf-deep max-w-3xl mx-auto text-balance">
            Premium produce, sourced with care.
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
            A curated selection of fresh fruits and vegetables — each consignment graded, inspected and ready for the UAE wholesale market.
          </p>
        </div>
      </section>

      {/* ── PRODUCT GRID ─────────────────────────────────────────── */}
      <section ref={gridRef} className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p, i) => (
            <article
              key={p.name}
              className={`reveal-scale stagger-${(i % 4) + 1} group relative rounded-3xl overflow-hidden bg-card border border-border hover:shadow-2xl hover:shadow-leaf-deep/12 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Image */}
              <div className="shimmer-parent aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card body */}
              <div className="p-5 relative">
                <h3 className="font-display text-2xl text-leaf-deep group-hover:text-leaf transition-colors duration-300">
                  {p.name}
                </h3>
                <div className="mt-1 text-xs uppercase tracking-wider text-leaf font-semibold">{p.origin}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-leaf/0 via-leaf to-leaf/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </article>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-20 reveal relative overflow-hidden rounded-[2.5rem] bg-leaf-deep text-primary-foreground p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-leaf/30 blur-3xl animate-orb-drift pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-accent/25 blur-3xl animate-orb-drift pointer-events-none"
            style={{ animationDelay: "3s" }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Looking for a specific consignment?
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              We source on request — share your specs, quantities and timelines and we'll respond with availability and pricing.
            </p>
          </div>
          <div className="relative md:justify-self-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}