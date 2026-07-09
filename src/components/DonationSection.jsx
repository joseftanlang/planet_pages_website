import React, { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

const IMPACTS = [
  { min: 0, max: 24, label: "School Supplies Pack", desc: "Notebooks, pens, and a backpack for one Laotian student for a full school year.", bg: "from-[#3D6B8C]/20 to-[#3D6B8C]/5" },
  { min: 25, max: 49, label: "Clean Water Filter", desc: "One bio-sand water filter providing safe drinking water for a family of five.", bg: "from-[#0E8A57]/20 to-[#0E8A57]/5" },
  { min: 50, max: 149, label: "A Student Desk", desc: "A handcrafted wooden desk built by local carpenters, serving a child for years.", bg: "from-[#3D6B8C]/20 to-[#3D6B8C]/5" },
  { min: 150, max: 299, label: "Teacher Training Stipend", desc: "A full month's stipend for a Laotian teacher participating in our training programme.", bg: "from-[#0E8A57]/20 to-[#0E8A57]/5" },
  { min: 300, max: 499, label: "Classroom Renovation", desc: "Windows, flooring, and a chalkboard — transforming a bare room into a learning space.", bg: "from-[#3D6B8C]/20 to-[#3D6B8C]/5" },
  { min: 500, max: 1000, label: "A Library Wing", desc: "An entire reading corner stocked with books in Lao and English, built and furnished.", bg: "from-[#0E8A57]/20 to-[#0E8A57]/5" },
];

function getImpact(amount) {
  return IMPACTS.find((imp) => amount >= imp.min && amount <= imp.max) || IMPACTS[IMPACTS.length - 1];
}

export default function DonationSection() {
  const [amount, setAmount] = useState(50);
  const impact = getImpact(amount);

  return (
    <section id="donate" className="py-24 md:py-32 bg-[#FDFCF8]" aria-labelledby="donate-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3D6B8C]/40 to-transparent mb-16" aria-hidden="true" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0E8A57] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Circle of Impact</p>
            <h2 id="donate-heading" className="text-3xl md:text-5xl font-heading font-bold text-[#1B3A5B] mb-6">
              See what your gift builds
            </h2>
            <p className="text-[#3D6B8C] text-lg leading-relaxed mb-8">
              Every dollar is a brick in someone's future. Use the slider to explore
              how your contribution translates into real, tangible change in rural Laos.
              All donations are tax-deductible under Singapore's IPC scheme.
            </p>

            <div className="space-y-4 text-sm text-[#3D6B8C]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0E8A57]" aria-hidden="true" />
                <span>100% of donations fund project materials and local labour</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0E8A57]" aria-hidden="true" />
                <span>Operational costs are covered separately by institutional sponsors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0E8A57]" aria-hidden="true" />
                <span>Quarterly impact reports sent to all donors</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={`bg-gradient-to-br ${impact.bg} rounded-2xl p-8 md:p-10 border border-[#3D6B8C]/10`}>
              {/* Amount display */}
              <div className="text-center mb-8">
                <p className="text-[#3D6B8C] text-sm mb-2">Your contribution</p>
                <p className="text-5xl md:text-6xl font-heading font-bold text-[#1B3A5B]">
                  S${amount}
                </p>
              </div>

              {/* Slider */}
              <div className="mb-10 px-2">
                <Slider
                  value={[amount]}
                  onValueChange={(val) => setAmount(val[0])}
                  min={10}
                  max={1000}
                  step={5}
                  className="[&_[role=slider]]:bg-[#0E8A57] [&_[role=slider]]:border-[#0E8A57] [&_[role=slider]]:w-6 [&_[role=slider]]:h-6 [&_.bg-primary]:bg-[#0E8A57]"
                />
                <div className="flex justify-between text-xs text-[#3D6B8C]/60 mt-2">
                  <span>S$10</span>
                  <span>S$1,000</span>
                </div>
              </div>

              {/* Impact reveal */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-[#0E8A57] text-xs font-bold tracking-wider uppercase mb-2">This provides</p>
                <h3 className="font-heading text-2xl font-bold text-[#1B3A5B] mb-2">{impact.label}</h3>
                <p className="text-[#3D6B8C] text-sm leading-relaxed">{impact.desc}</p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 px-6 py-3.5 bg-[#0E8A57] text-white font-semibold rounded-full hover:bg-[#0A7045] transition-colors min-h-[44px]">
                  Donate S${amount}
                </button>
                <button className="flex-1 px-6 py-3.5 bg-[#1B3A5B] text-white font-semibold rounded-full hover:bg-[#244C75] transition-colors min-h-[44px]">
                  Give Monthly
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}