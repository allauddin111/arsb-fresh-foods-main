import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/arsb-logo.png";

export function Footer() {
  return (
    <footer className="bg-leaf-deep text-primary-foreground mt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-cream/10 rounded-xl p-2">
              <img src={logo} alt="ARSB" className="h-10 w-10" width={40} height={40} loading="lazy" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">ARSB Trading LLC</div>
              <div className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70">Fruits & Vegetables</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed">
            Trusted importer, distributor and commission agent of fresh produce — connecting growers across India to markets across the UAE.
          </p>
          <p className="mt-4 font-script text-2xl text-accent">Professional Partnerships, Green Futures</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-primary-foreground">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>UAE +971 56 609 0684<br/>IND +91 88928 30557</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" /><a href="mailto:arsbtrading@gmail.com" className="hover:text-accent">arsbtrading@gmail.com</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>Central Fruits & Vegetable Market, Al-Aweer, Dubai — UAE</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Office Hours</h4>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Saturday – Thursday<br/>5:00 AM – 9:00 PM GST<br/><br/>
            Wholesale market hours follow Al-Aweer Central Market timings.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} ARSB Trading LLC. All rights reserved.</p>
          <p>Abdul Rab Byahatti — Founder</p>
        </div>
      </div>
    </footer>
  );
}