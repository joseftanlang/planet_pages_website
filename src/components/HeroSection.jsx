import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SG_IMG = "https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/6fa84fa77_generated_0fd02299.png";
const LAOS_IMG = "https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/c8cd5a98b_generated_4bd3e2e1.png";
const HANDS_IMG = "https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/81f017505_generated_43623c54.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background split images */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2" aria-hidden="true">
        <div className="relative overflow-hidden">
          <img
            src={SG_IMG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5B]/60 to-[#1B3A5B]/30" />
        </div>
        <div className="relative overflow-hidden hidden md:block">
          <img
            src={LAOS_IMG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1B3A5B]/60 to-[#1B3A5B]/30" />
        </div>
      </div>

      {/* Center merge overlay */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <img src={HANDS_IMG} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 text-center w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-green-100 text-[#0E8A57] px-3 py-1 rounded-full font-body text-sm font-semibold tracking-[0.2em] uppercase mb-6"
        >
          Singapore → Laos Youth Expedition 2026
        </motion.p>
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] mb-6"
        >
          ASEAN NATION <br className="hidden sm:block" />
          One Purpose
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-white text-lg md:text-xl font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-10"
        >
          Bridge the distance between Singapore's innovation and Laos' enduring spirit. <br className="hidden sm:block" /> <br className="hidden sm:block" />
          Build schools, empower communities, and discover the leader within.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0E8A57] text-white font-semibold rounded-full hover:bg-[#0A7045] transition-colors text-base min-h-[44px] shadow-lg shadow-[#0E8A57]/30"
          >
            Join the Expedition
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 transition-colors text-base min-h-[44px] backdrop-blur-sm border border-white/20"
          >
            Explore Our Impact
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div> 

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </div>
    </section>
  );
}