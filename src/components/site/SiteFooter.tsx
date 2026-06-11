import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, Clock } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <img src={logoImg} alt="Kage Fitness" className="h-8 w-auto object-contain" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Building a stronger and healthier community since 2021.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold" />
              <a href="tel:+917200388808" className="hover:text-white">
                7200388808
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold" />
              <a href="mailto:kagefitnessstudio10@gmail.com" className="hover:text-white">
                kagefitnessstudio10@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 text-gold" />
              <span>Mon–Sun · 5:00 AM – 10:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Follow</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <Instagram className="size-4 text-gold" /> Instagram
          </a>
          <p className="mt-6 text-xs text-white/40">
            Featured by IBB Chennai — 2nd best gym in Anna Nagar.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <p className="mx-auto max-w-7xl px-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Kage Fitness Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
