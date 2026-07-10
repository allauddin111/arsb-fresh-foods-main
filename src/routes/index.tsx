import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Globe2, Handshake, ShieldCheck, Truck, Sprout } from "lucide-react";
import hero from "@/assets/hero.jpg";
import market from "@/assets/market.jpg";
import about from "@/assets/about.jpg";
import pOnion from "@/assets/p-onion.jpg";
import pChilli from "@/assets/p-chilli.jpg";
import pBanana from "@/assets/p-banana.jpg";
import pGrapes from "@/assets/p-grapes.jpg";
import pPom from "@/assets/p-pomegranate.jpg";
import pCoco from "@/assets/p-coconut.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARSB Trading LLC — Fruits & Vegetables Importer in Dubai" },
      { name: "description", content: "ARSB Trading LLC is a leading importer, distributor and commission agent of fresh fruits and vegetables based in Al-Aweer, Dubai UAE." },
      { property: "og:title", content: "ARSB Trading LLC — Fresh Produce Importer in Dubai" },
      { property: "og:description", content: "Connecting growers across India with markets across the UAE. Honest, transparent and supplier-centric trading." },
    ],
  }),
  component: Index,
});

function Index() {
  const products = [
    { name: "Onion", img: pOnion },
    { name: "Green Chilli", img: pChilli },
    { name: "Banana", img: pBanana },
    { name: "Grapes", img: pGrapes },
    { name: "Pomegranate", img: pPom },
    { name: "Semi Husk Coconut", img: pCoco },
  ];
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grain opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-leaf-deep">
              <Sprout className="h-3.5 w-3.5" /> Al-Aweer · Dubai, UAE
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] text-leaf-deep text-balance">
              Fresh Produce. <span className="text-leaf italic">Honest</span> Trade.
            </h1>
            <p className="mt-3 font-script text-3xl text-leaf">Professional Partnerships, Green Futures.</p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              ARSB Trading LLC is a leading importer, distributor and commission agent of fresh fruits and vegetables across the UAE — built on transparency, timely payments and supplier-first relationships.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-7 py-3.5 font-semibold hover:bg-leaf-deep transition shadow-lg shadow-leaf/20">
                Discover Our Produce <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-leaf-deep text-leaf-deep px-7 py-3.5 font-semibold hover:bg-leaf-deep hover:text-primary-foreground transition">
                Become a Supplier
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
              {[
                { k: "10+", v: "Years of Trade" },
                { k: "20+", v: "Produce Lines" },
                { k: "100%", v: "Transparent" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-bold text-leaf-deep">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-leaf-deep/20 ring-1 ring-leaf/10">
              <img src={hero} alt="Crate of fresh fruits and vegetables" className="h-full w-full object-cover" width={1600} height={1100} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-deep/80 to-transparent p-6 text-primary-foreground">
                <div className="text-xs uppercase tracking-[0.2em] opacity-80">Sourced From</div>
                <div className="font-display text-2xl">India · Premium Farms</div>
              </div>
            </div>
            <div className="absolute -left-6 -bottom-8 hidden md:flex flex-col bg-background rounded-2xl shadow-xl border border-border p-5 max-w-[220px]">
              <Leaf className="h-6 w-6 text-leaf" />
              <p className="mt-2 text-sm font-medium text-foreground">Quality controlled, farm-to-market chain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
            <img src={about} alt="Fresh pomegranates at the market" className="h-full w-full object-cover" loading="lazy" width={1200} height={1400} />
          </div>
          <div className="absolute -right-4 -bottom-4 bg-accent text-accent-foreground rounded-2xl px-6 py-5 shadow-xl">
            <div className="font-display text-4xl font-bold">90%+</div>
            <div className="text-xs uppercase tracking-wider">UAE produce imported</div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.25em] text-leaf font-semibold">About ARSB</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-leaf-deep leading-tight">A trusted name in the Dubai fresh produce market.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            ARSB Trading LLC is one of the leading importers, distributors and commission agents of fresh fruits and vegetables in the UAE — a place where suppliers can be assured of the best service, timely payments, and complete transparency.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our supplier-centric approach ensures we don't just meet market demand — we help our partners grow alongside us. Quality is enforced at every link in the supply chain.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { i: Handshake, t: "Commission-Based", d: "Flexible terms tailored to each supplier." },
              { i: ShieldCheck, t: "Timely Payments", d: "Honest settlements, no hidden cuts." },
              { i: Globe2, t: "Global Reach", d: "Dubai HQ, India operations." },
              { i: Truck, t: "Cold Chain Logistics", d: "Freshness from farm to crate." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="flex gap-4 p-4 rounded-xl bg-cream border border-border">
                <div className="h-11 w-11 rounded-lg bg-leaf text-primary-foreground grid place-items-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-cream/60 py-24 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-leaf font-semibold">Products We Deal In</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-leaf-deep">Premium fruits & vegetables.</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-leaf-deep font-semibold hover:gap-3 transition-all">
              View all produce <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((p) => (
              <Link to="/products" key={p.name} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-background ring-1 ring-border">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={800} />
                </div>
                <div className="mt-3 text-center font-display text-lg text-leaf-deep">{p.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-leaf font-semibold">Our Global Reach</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-leaf-deep">From Indian farms<br/>to Dubai tables.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Dubai imports over 90% of its food. With our headquarters in Al-Aweer and our operational base in India, we are strategically positioned to source the best produce from renowned agricultural regions and deliver it fresh — every single day.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-leaf pl-4">
              <div className="font-display text-2xl text-leaf-deep">Dubai, UAE</div>
              <div className="text-sm text-muted-foreground">Headquarters · Al-Aweer Central Market</div>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <div className="font-display text-2xl text-leaf-deep">India</div>
              <div className="text-sm text-muted-foreground">Sourcing & Field Operations</div>
            </div>
          </div>
        </div>
        <div className="aspect-[5/4] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-border">
          <img src={market} alt="Wholesale produce market" className="h-full w-full object-cover" loading="lazy" width={1400} height={900} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-leaf-deep text-primary-foreground p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-leaf/40 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">Let's grow together.</h2>
              <p className="mt-4 text-primary-foreground/80 max-w-md">Whether you're a grower looking for a reliable agent, or a buyer seeking consistent quality — talk to our team today.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold hover:scale-105 transition">Contact Us <ArrowRight className="h-4 w-4" /></Link>
              <a href="mailto:arsbtrading@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 font-semibold hover:bg-primary-foreground/10 transition">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
