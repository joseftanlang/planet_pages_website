import React from "react";
import { Mail, Phone, MapPin, Instagram} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5B] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-heading text-xl font-bold mb-4">Planet Pages Laos</p>
            <p className="text-white/50 text-sm leading-relaxed">
              A Singapore-based Youth Expedition Project building lasting change in rural Laos through education, infrastructure, and cross-cultural partnership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">Navigate</h3>
            <ul className="space-y-3">
              {[
                { label: "Mission", href: "#mission" },
                { label: "Projects", href: "#projects" },
                { label: "Expedition", href: "#expedition" },
                { label: "Donate", href: "#donate" },
                { label: "Apply", href: "#apply" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm min-h-[44px] inline-flex items-center">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { label: "FAQs", href: "#apply" },
                { label: "Safety & Insurance", href: "#expedition" },
                { label: "Past Impact Reports", href: "#projects" },
                { label: "Partner With Us", href: "mailto:planetpagesorg@gmail.com" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm min-h-[44px] inline-flex items-center">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:planetpagesorg@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm min-h-[44px]">
                  <Mail size={16} className="shrink-0" /> planetpagesorg@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:tanjosef33@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm min-h-[44px]">
                  <Mail size={16} className="shrink-0" /> tanjosef33@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6588454281" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm min-h-[44px]">
                  <Phone size={16} className="shrink-0" /> +65 8845 4281
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/planetpages.laos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-[#0E8A57] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@planet.pages.laos?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/40 hover:text-[#0E8A57] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© 2026 Planet Pages Laos YEP. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="mailto:planetpagesorg@gmail.com" className="text-white/30 hover:text-white/60 transition-colors min-h-[44px] inline-flex items-center">Privacy Policy</a>
            <a href="mailto:planetpagesorg@gmail.com" className="text-white/30 hover:text-white/60 transition-colors min-h-[44px] inline-flex items-center">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}