import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Mission", href: "#mission" },
  { label: "Projects", href: "#projects" },
  { label: "Expedition", href: "#expedition" },
  { label: "Donate", href: "#donate" },
  { label: "Apply", href: "#apply" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDFCF8]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-xl font-semibold tracking-tight text-[#1B3A5B]">
          Bridge of Light
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3D6B8C] hover:text-[#1B3A5B] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0E8A57] text-white text-sm font-semibold rounded-full hover:bg-[#0A7045] transition-colors min-h-[44px] min-w-[44px]"
          >
            Join the Expedition
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} className="text-[#1B3A5B]" /> : <Menu size={24} className="text-[#1B3A5B]" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FDFCF8] border-t border-[#3D6B8C]/20 px-6 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-[#1B3A5B] border-b border-[#3D6B8C]/10 min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center w-full px-5 py-3 bg-[#0E8A57] text-white font-semibold rounded-full hover:bg-[#0A7045] transition-colors min-h-[44px]"
          >
            Join the Expedition
          </a>
        </div>
      )}
    </nav>
  );
}