import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ease-out ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl border-border/70 shadow-sm shadow-leaf/5"
          : "bg-background/70 backdrop-blur-xl border-border/40"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={logo}
              alt="ARSB Trading"
              className={`object-contain transition-all duration-500 group-hover:scale-110 ${
                scrolled ? "h-10 w-10" : "h-12 w-12"
              }`}
              width={48}
              height={48}
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[1.05rem] font-bold tracking-tight text-leaf-deep group-hover:text-leaf transition-colors duration-300">
              ARSB Trading <span className="text-leaf">LLC</span>
            </div>
            <div className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
              Fruits &amp; Vegetables
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-leaf transition-colors duration-200 group"
              activeProps={{
                className:
                  "relative px-4 py-2 text-sm font-medium text-leaf",
              }}
            >
              {n.label}
              {/* Animated underline */}
              <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-leaf rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+971566090684"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-leaf-deep transition-all duration-300 hover:shadow-lg hover:shadow-leaf/25 hover:-translate-y-0.5 shadow-sm"
          >
            <Phone className="h-4 w-4" />
            +971 56 609 0684
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
            aria-label="Menu"
          >
            <span className="block transition-transform duration-300" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — animated slide-down */}
      <div
        className="lg:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
        style={{
          maxHeight: open ? "500px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
        }}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-foreground/80 font-medium border-b border-border/40 last:border-0 hover:text-leaf hover:pl-4 transition-all duration-200"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+971566090684"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-leaf text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-leaf-deep transition-colors"
          >
            <Phone className="h-4 w-4" /> Call UAE
          </a>
        </div>
      </div>
    </header>
  );
}