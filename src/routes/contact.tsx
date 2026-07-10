import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
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
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bodyRef = useScrollReveal<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    // We add the web3forms access key
    // You can get a free key from https://web3forms.com/
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);
    formData.append("from_name", "ARSB Trading Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the email server. Please check your internet connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .contact-input {
          width: 100%;
          background: oklch(1 0 0 / 0.08);
          border: 1px solid oklch(1 0 0 / 0.15);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .contact-input::placeholder {
          color: oklch(1 0 0 / 0.4);
        }
        .contact-input:focus {
          border-color: oklch(0.78 0.09 140 / 0.9);
          background: oklch(1 0 0 / 0.13);
          box-shadow:
            0 0 0 3px oklch(0.42 0.13 152 / 0.22),
            0 0 16px oklch(0.42 0.13 152 / 0.14);
        }
        .contact-input:hover:not(:focus) {
          border-color: oklch(1 0 0 / 0.28);
          background: oklch(1 0 0 / 0.11);
        }

        @keyframes success-pop {
          0%   { opacity: 0; transform: scale(0.85) translateY(12px); }
          60%  { transform: scale(1.03) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .success-pop {
          animation: success-pop 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

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
        className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-12 gap-10"
      >
        {/* Contact info cards */}
        <div className="lg:col-span-5 space-y-5">
          {[
            { i: User,   t: "Abdul Rab Byahatti", d: "Founder & Director" },
            { i: Phone,  t: "Phone",              d: "UAE +971 56 609 0684\nIND +91 88928 30557", links: ["tel:+971566090684", "tel:+918892830557"] },
            { i: Mail,   t: "Email",              d: "arsbtrading@gmail.com",                      links: ["mailto:arsbtrading@gmail.com"] },
            { i: MapPin, t: "Address",            d: "Central Fruits & Vegetable Market\nAl-Aweer, Dubai — UAE" },
          ].map(({ i: Icon, t, d }, idx) => (
            <div
              key={t}
              className={`reveal-left stagger-${idx + 1} group p-6 rounded-2xl bg-card border border-border flex gap-5 hover:border-leaf/40 hover:shadow-lg hover:shadow-leaf/8 transition-all duration-300`}
            >
              <div className="h-12 w-12 rounded-xl bg-leaf text-primary-foreground grid place-items-center shrink-0 group-hover:scale-110 group-hover:bg-leaf-deep group-hover:shadow-lg group-hover:shadow-leaf/25 transition-all duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-xl text-leaf-deep">{t}</div>
                <div className="text-muted-foreground whitespace-pre-line mt-1">{d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="reveal-right lg:col-span-7 p-8 md:p-10 rounded-3xl bg-leaf-deep text-primary-foreground relative overflow-hidden"
        >
          {/* Orb decorations */}
          <div
            className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-leaf/30 blur-3xl pointer-events-none animate-orb-drift"
            aria-hidden
          />
          <div
            className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-accent/25 blur-3xl pointer-events-none animate-orb-drift"
            style={{ animationDelay: "3s" }}
            aria-hidden
          />

          <div className="relative">
            <h2 className="font-display text-3xl">Send us a message</h2>
            <p className="text-primary-foreground/70 mt-2 text-sm">
              Tell us a little about your enquiry and we'll get back to you shortly.
            </p>

            {sent ? (
              <div className="success-pop mt-8 p-6 rounded-2xl bg-accent text-accent-foreground">
                <div className="font-display text-2xl">Thank you! 🎉</div>
                <p className="mt-1">Your message is on its way. We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {error && (
                  <div className="sm:col-span-2 p-4 rounded-xl bg-red-500/20 text-red-100 border border-red-500/30 text-sm">
                    {error}
                  </div>
                )}
                <Field label="Your Name">
                  <input required name="name" className="contact-input" placeholder="Full name" />
                </Field>
                <Field label="Email">
                  <input required type="email" name="email" className="contact-input" placeholder="you@company.com" />
                </Field>
                <Field label="Phone">
                  <input name="phone" className="contact-input" placeholder="+971…" />
                </Field>
                <Field label="Subject">
                  <input name="subject" className="contact-input" placeholder="Supplier enquiry" />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Message">
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="contact-input resize-none"
                      placeholder="Tell us about the produce, quantities and timeline…"
                    />
                  </Field>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="sm:col-span-2 group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 mt-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </div>
            )}
          </div>
        </form>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-primary-foreground/65 font-semibold">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}