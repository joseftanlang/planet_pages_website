import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Mission", path: "/mission" },
  { label: "Projects", path: "/projects" },
  { label: "Expedition", path: "/expedition" },
  { label: "Donate", path: "/donate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8]/95 backdrop-blur-md shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-heading text-xl font-semibold tracking-tight text-[#1B3A5B]">
          Planet Pages Laos
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-[#1B3A5B] font-semibold" : "text-[#3D6B8C] hover:text-[#1B3A5B]"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0E8A57] text-white text-sm font-semibold rounded-full hover:bg-[#0A7045] transition-colors min-h-[44px] min-w-[44px]"
          >
            Join the Expedition
          </Link>
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
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-base font-medium border-b border-[#3D6B8C]/10 min-h-[44px] flex items-center ${isActive ? "text-[#1B3A5B] font-semibold" : "text-[#1B3A5B]"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center w-full px-5 py-3 bg-[#0E8A57] text-white font-semibold rounded-full hover:bg-[#0A7045] transition-colors min-h-[44px]"
          >
            Join the Expedition
          </Link>
        </div>
      )}
    </nav>
  );
}