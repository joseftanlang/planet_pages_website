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

        {/* Main Donation Row */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 md:mb-32">
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

        {/* New Merchandise & Other Fundraising Efforts Section */}
        <div className="border-t border-[#3D6B8C]/20 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-[#0E8A57] text-sm font-semibold tracking-[0.15em] uppercase mb-3">More Ways to Give</p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#1B3A5B]">Support Beyond Donations</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Merch Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#3D6B8C]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#3D6B8C]/10 flex items-center justify-center text-[#3D6B8C] mb-6">
                  {/* Custom T-Shirt Icon alternative or SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-[#1B3A5B] mb-2">Impact T-Shirt</h4>
                <p className="text-[#3D6B8C] text-sm leading-relaxed mb-6">
                  Wear your support. 100% of proceeds from our sustainably sourced, locally printed campaign shirts fund educational resources.
                </p>
              </div>
              <button className="w-full px-5 py-2.5 bg-transparent border border-[#3D6B8C] text-[#3D6B8C] font-semibold text-sm rounded-full hover:bg-[#3D6B8C] hover:text-white transition-colors min-h-[40px]">
                Shop Merchandise
              </button>
            </motion.div>

            {/* Corporate/School Matching Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-[#3D6B8C]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0E8A57]/10 flex items-center justify-center text-[#0E8A57] mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-[#1B3A5B] mb-2">Corporate Matching</h4>
                <p className="text-[#3D6B8C] text-sm leading-relaxed mb-6">
                  Double your impact. Check if your company or academic institution participates in dollar-for-dollar donation matching schemes.
                </p>
              </div>
              <button className="w-full px-5 py-2.5 bg-transparent border border-[#0E8A57] text-[#0E8A57] font-semibold text-sm rounded-full hover:bg-[#0E8A57] hover:text-white transition-colors min-h-[40px]">
                Check Eligibility
              </button>
            </motion.div>

            {/* Peer-to-Peer Fundraising Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-[#3D6B8C]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1B3A5B]/10 flex items-center justify-center text-[#1B3A5B] mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-[#1B3A5B] mb-2">Host a Fundraiser</h4>
                <p className="text-[#3D6B8C] text-sm leading-relaxed mb-6">
                  Turn birthdays, marathons, or community milestones into an event. Rally your peers and start a personalized giving campaign.
                </p>
              </div>
              <button className="w-full px-5 py-2.5 bg-transparent border border-[#1B3A5B] text-[#1B3A5B] font-semibold text-sm rounded-full hover:bg-[#1B3A5B] hover:text-white transition-colors min-h-[40px]">
                Start a Campaign
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}