import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Leaf, Target, Eye, Heart, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import about from "@/assets/about.jpg";
import market from "@/assets/market.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ARSB Trading LLC" },
      { name: "description", content: "Learn about ARSB Trading LLC — a Dubai-based importer of fresh fruits and vegetables built on transparency, honesty and supplier-first relationships." },
      { property: "og:title", content: "About ARSB Trading LLC" },
      { property: "og:description", content: "A leading importer of fresh fruits and vegetables based in Al-Aweer, Dubai with operations in India." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const bodyRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden">
        {/* Background blob */}
        <div
          className="absolute top-[-6rem] right-[-4rem] h-[28rem] w-[28rem] rounded-full opacity-25 animate-orb-drift pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.09 140 / 0.5), transparent 65%)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-leaf-deep shadow-sm">
            <Leaf className="h-3.5 w-3.5" /> Our Story
          </div>
          <h1 className="animate-fade-in-up delay-100 mt-6 font-display text-5xl md:text-6xl text-leaf-deep text-balance max-w-3xl mx-auto">
            A trusted name in fresh produce trading.
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
            Built on transparency, honesty, and long-lasting partnerships with growers and buyers.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────── */}
      <section
        ref={bodyRef}
        className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-12 gap-12 items-start"
      >
        {/* Sticky images */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 reveal-left">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-xl shadow-leaf-deep/10">
            <img
              src={about}
              alt="Fresh pomegranates"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={1200}
              height={1400}
            />
          </div>
          <div className="aspect-[5/3] rounded-[2rem] overflow-hidden group shadow-xl shadow-leaf-deep/10">
            <img
              src={market}
              alt="Wholesale market"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={1400}
              height={900}
            />
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed reveal-right">
          <h2 className="font-display text-3xl md:text-4xl text-leaf-deep">ARSB Trading LLC</h2>
          <p>
            ARSB Trading LLC is a leading importer of fresh fruits and vegetables based in Dubai, UAE — with an operational office in India. Founded by{" "}
            <strong className="text-foreground">Abdul Rab Byahatti</strong>, the company has grown into a trusted partner for growers across the subcontinent and a dependable supplier for wholesalers across the UAE.
          </p>
          <p>
            We work exclusively on a commission basis, giving us the flexibility to meet the diverse needs of our suppliers and customers. Our supplier-centric approach fosters long-lasting relationships built on trust, transparency and commitment.
          </p>
          <p>
            We believe in transparency in every dealing. The commission market can be unpredictable — suppliers face fluctuations and the occasional loss. We respond with accurate market knowledge, honest reporting, and timely payments, so our suppliers can plan confidently and grow sustainably.
          </p>
          <p>
            Our team brings decades of combined experience in the fruits and vegetables import sector. From sourcing the finest produce to navigating the complexities of UAE customs and distribution, our seasoned professionals provide unparalleled support across the supply chain.
          </p>

          {/* Mission / Vision / Values cards */}
          <div className="grid sm:grid-cols-3 gap-4 pt-6">
            {[
              { i: Target, t: "Mission", d: "Empower suppliers with fair, transparent trade." },
              { i: Eye,    t: "Vision",  d: "Be the most trusted commission agent in the UAE." },
              { i: Heart,  t: "Values",  d: "Honesty, integrity, and supplier-first thinking." },
            ].map(({ i: Icon, t, d }, idx) => (
              <div
                key={t}
                className={`reveal-scale stagger-${idx + 1} group p-5 rounded-2xl bg-cream border border-border hover:border-leaf/40 hover:shadow-md hover:shadow-leaf/10 transition-all duration-300`}
              >
                <div className="h-11 w-11 rounded-lg bg-leaf text-primary-foreground grid place-items-center group-hover:scale-110 group-hover:bg-leaf-deep transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display text-xl text-leaf-deep">{t}</div>
                <div className="text-sm mt-1">{d}</div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-7 py-3.5 font-semibold hover:bg-leaf-deep transition-all duration-300 shadow-lg shadow-leaf/20 hover:shadow-xl hover:shadow-leaf/30 hover:-translate-y-0.5"
            >
              Partner with us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}