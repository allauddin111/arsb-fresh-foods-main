import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, User } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ARSB Trading LLC" },
      { name: "description", content: "Get in touch with ARSB Trading LLC at our Al-Aweer Dubai office or our India operations." },
      { property: "og:title", content: "Contact ARSB Trading LLC" },
      { property: "og:description", content: "Talk to our team about fresh produce trade, supply and partnerships." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const bodyRef = useScrollReveal<HTMLDivElement>();

  const contacts = [
    { 
      i: User,   
      t: "Abdul Rab Byahatti", 
      d: "Founder & Director" 
    },
    { 
      i: Phone,  
      t: "Phone",              
      d: "UAE +971 56 609 0684\nIND +91 88928 30557", 
      links: ["tel:+971566090684", "tel:+918892830557"] 
    },
    { 
      i: Mail,   
      t: "Email",              
      d: "arsbtrading@gmail.com",                      
      links: ["mailto:arsbtrading@gmail.com"] 
    },
    { 
      i: Instagram, 
      t: "Instagram",            
      d: "@arsbtradingllc", 
      links: ["https://www.instagram.com/arsbtradingllc/"] 
    },
    { 
      i: MapPin, 
      t: "Address",            
      d: "Central Fruits & Vegetable Market\nAl-Aweer, Dubai — UAE" 
    },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div
          className="absolute top-[-6rem] right-[-4rem] h-[28rem] w-[28rem] rounded-full opacity-22 animate-orb-drift pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.09 140 / 0.45), transparent 65%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-leaf-deep shadow-sm">
            <Mail className="h-3.5 w-3.5" /> Get in Touch
          </div>
          <h1 className="animate-fade-in-up delay-100 mt-6 font-display text-5xl md:text-6xl text-leaf-deep text-balance max-w-3xl mx-auto">
            Let's talk produce.
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
            We respond to every enquiry — supplier, buyer or partner — within 24 hours.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────── */}
      <section
        ref={bodyRef}
        className="mx-auto max-w-7xl px-5 lg:px-8 py-20"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contacts.map(({ i: Icon, t, d, links }, idx) => (
            <div
              key={t}
              className={`reveal-left stagger-${idx + 1} group p-6 rounded-2xl bg-card border border-border flex gap-5 hover:border-leaf/40 hover:shadow-lg hover:shadow-leaf/8 transition-all duration-300`}
            >
              <div className="h-12 w-12 rounded-xl bg-leaf text-primary-foreground grid place-items-center shrink-0 group-hover:scale-110 group-hover:bg-leaf-deep group-hover:shadow-lg group-hover:shadow-leaf/25 transition-all duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-display text-xl text-leaf-deep mb-1">{t}</div>
                {links ? (
                  <div className="flex flex-col gap-1.5">
                    {links.map((link, lIdx) => {
                      const displayTexts = d.split("\n");
                      return (
                        <a 
                          key={link} 
                          href={link} 
                          className="text-muted-foreground hover:text-leaf transition-colors font-medium hover:underline block"
                        >
                          {displayTexts[lIdx] || link}
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed">{d}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAP ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-20">
        <div className="reveal rounded-3xl overflow-hidden ring-1 ring-border aspect-[16/8] shadow-xl shadow-leaf-deep/8 hover:shadow-2xl hover:shadow-leaf-deep/12 transition-shadow duration-500">
          <iframe
            title="ARSB Trading location"
            src="https://www.google.com/maps?q=Central+Fruits+%26+Vegetable+Market+Al+Aweer+Dubai&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}