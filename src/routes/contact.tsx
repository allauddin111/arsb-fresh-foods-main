import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";

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
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-leaf-deep">
            <Mail className="h-3.5 w-3.5" /> Get in Touch
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl text-leaf-deep text-balance max-w-3xl mx-auto">Let's talk produce.</h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">We respond to every enquiry — supplier, buyer or partner — within 24 hours.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-5">
          {[
            { i: User, t: "Abdul Rab Byahatti", d: "Founder & Director" },
            { i: Phone, t: "Phone", d: "UAE +971 56 609 0684\nIND +91 88928 30557", links: ["tel:+971566090684", "tel:+918892830557"] },
            { i: Mail, t: "Email", d: "arsbtrading@gmail.com", links: ["mailto:arsbtrading@gmail.com"] },
            { i: MapPin, t: "Address", d: "Central Fruits & Vegetable Market\nAl-Aweer, Dubai — UAE" },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="p-6 rounded-2xl bg-card border border-border flex gap-5">
              <div className="h-12 w-12 rounded-xl bg-leaf text-primary-foreground grid place-items-center shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-xl text-leaf-deep">{t}</div>
                <div className="text-muted-foreground whitespace-pre-line mt-1">{d}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-leaf-deep text-primary-foreground"
        >
          <h2 className="font-display text-3xl">Send us a message</h2>
          <p className="text-primary-foreground/70 mt-2 text-sm">Tell us a little about your enquiry and we'll get back to you shortly.</p>

          {sent ? (
            <div className="mt-8 p-6 rounded-2xl bg-accent text-accent-foreground">
              <div className="font-display text-2xl">Thank you!</div>
              <p className="mt-1">Your message is on its way. We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Your Name"><input required className="input" placeholder="Full name" /></Field>
              <Field label="Email"><input required type="email" className="input" placeholder="you@company.com" /></Field>
              <Field label="Phone"><input className="input" placeholder="+971…" /></Field>
              <Field label="Subject"><input className="input" placeholder="Supplier enquiry" /></Field>
              <div className="sm:col-span-2">
                <Field label="Message"><textarea required rows={5} className="input resize-none" placeholder="Tell us about the produce, quantities and timeline…" /></Field>
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold hover:scale-[1.02] transition mt-2">
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-20">
        <div className="rounded-3xl overflow-hidden ring-1 ring-border aspect-[16/8]">
          <iframe
            title="ARSB Trading location"
            src="https://www.google.com/maps?q=Central+Fruits+%26+Vegetable+Market+Al+Aweer+Dubai&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: oklch(1 0 0 / 0.08);
          border: 1px solid oklch(1 0 0 / 0.15);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s;
        }
        .input::placeholder { color: oklch(1 0 0 / 0.45); }
        .input:focus { border-color: var(--accent); background: oklch(1 0 0 / 0.12); }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-primary-foreground/70 font-semibold">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}