import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf } from "lucide-react";
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
  { name: "Onion", img: pOnion, origin: "Maharashtra, Karnataka", note: "Year-round availability, multiple grades." },
  { name: "Green Chilli", img: pChilli, origin: "Karnataka, Andhra Pradesh", note: "Hand-picked, calibrated lengths." },
  { name: "Banana", img: pBanana, origin: "Tamil Nadu", note: "Cavendish and regional varieties." },
  { name: "Grapes", img: pGrapes, origin: "Maharashtra", note: "Premium export-grade table grapes." },
  { name: "Pomegranate", img: pPom, origin: "Maharashtra, Gujarat", note: "Bhagwa variety, deep ruby seeds." },
  { name: "Semi Husk Coconut", img: pCoco, origin: "Kerala, Karnataka", note: "Cleaned semi-husk, long shelf life." },
  { name: "Mango", img: pMango, origin: "Seasonal — India-wide", note: "Alphonso, Kesar, Banganapalli." },
  { name: "Tomato", img: pTomato, origin: "Karnataka, Maharashtra", note: "Vine-ripened, consistent firmness." },
];

function ProductsPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-leaf-deep">
            <Leaf className="h-3.5 w-3.5" /> What We Trade
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl text-leaf-deep max-w-3xl mx-auto text-balance">Premium produce, sourced with care.</h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">A curated selection of fresh fruits and vegetables — each consignment graded, inspected and ready for the UAE wholesale market.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <article key={p.name} className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:shadow-2xl hover:shadow-leaf-deep/10 transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={800} />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-leaf-deep">{p.name}</h3>
                <div className="mt-1 text-xs uppercase tracking-wider text-leaf font-semibold">{p.origin}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-leaf-deep text-primary-foreground p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Looking for a specific consignment?</h2>
            <p className="mt-3 text-primary-foreground/80">We source on request — share your specs, quantities and timelines and we'll respond with availability and pricing.</p>
          </div>
          <div className="md:justify-self-end">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold hover:scale-105 transition">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}