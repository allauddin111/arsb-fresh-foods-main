import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/arsb-logo.png";

export function Footer() {
  return (
    <footer className="bg-leaf-deep text-primary-foreground mt-32 relative">
      {/* Glowing top border accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-leaf-soft/60 to-transparent" />

      {/* Decorative wave / blobs */}
      <div className="absolute top-0 inset-x-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full opacity-20 animate-orb-drift"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.09 140), transparent 70%)" }}
        />
        <div
          className="absolute -top-16 right-16 h-56 w-56 rounded-full opacity-15 animate-orb-drift"
          style={{
            background: "radial-gradient(circle, oklch(0.82 0.16 80), transparent 70%)",
            animationDelay: "3s",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-cream/10 rounded-xl p-2 hover:bg-cream/20 transition-colors duration-300">
              <img src={logo} alt="ARSB" className="h-10 w-10" width={40} height={40} loading="lazy" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">ARSB Trading LLC</div>
              <div className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70">
                Fruits &amp; Vegetables
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed">
            Trusted importer, distributor and commission agent of fresh produce — connecting growers across India to markets across the UAE.
          </p>
          <p className="mt-4 font-script text-2xl text-accent">
            Professional Partnerships, Green Futures
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-display text-lg mb-5 text-primary-foreground">Explore</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/products", label: "Products" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative inline-flex items-center gap-1.5 hover:text-accent transition-colors duration-200 group"
                >
                  <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3 inline-block" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg mb-5">Contact</h4>
          <ul className="space-y-3.5 text-sm text-primary-foreground/85">
            <li className="flex gap-3 group">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span>UAE +971 56 609 0684<br />IND +91 88928 30557</span>
            </li>
            <li className="flex gap-3 group">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <a href="mailto:arsbtrading@gmail.com" className="hover:text-accent transition-colors duration-200">
                arsbtrading@gmail.com
              </a>
            </li>
            <li className="flex gap-3 group">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span>Central Fruits &amp; Vegetable Market, Al-Aweer, Dubai — UAE</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-lg mb-5">Office Hours</h4>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Saturday – Thursday<br />5:00 AM – 9:00 PM GST<br /><br />
            Wholesale market hours follow Al-Aweer Central Market timings.
          </p>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} ARSB Trading LLC. All rights reserved.</p>
          <p>Abdul Rab Byahatti — Founder</p>
        </div>
      </div>
    </footer>
  );
}