import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/arsb-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="ARSB Trading" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="leading-tight">
            <div className="font-display text-[1.05rem] font-bold tracking-tight text-leaf-deep">ARSB Trading <span className="text-leaf">LLC</span></div>
            <div className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Fruits & Vegetables</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-leaf transition-colors relative"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-leaf" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a href="tel:+971566090684" className="hidden md:inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-leaf-deep transition-colors shadow-sm">
          <Phone className="h-4 w-4" /> +971 56 609 0684
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-foreground/80 font-medium border-b border-border/40 last:border-0">
                {n.label}
              </Link>
            ))}
            <a href="tel:+971566090684" className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-leaf text-primary-foreground px-5 py-3 text-sm font-semibold">
              <Phone className="h-4 w-4" /> Call UAE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}