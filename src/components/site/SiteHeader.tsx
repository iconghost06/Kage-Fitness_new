import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-white/5" : "bg-transparent",
      )}
      style={{ backgroundColor: scrolled || open ? undefined : "transparent" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="Kage Fitness" className="h-8 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-sm font-medium uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-gold-gradient px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-gold transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Join Now
        </Link>

        <button
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.18em] text-white/80"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold-gradient px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink"
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
