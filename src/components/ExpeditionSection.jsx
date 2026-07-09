import React from "react";
import { motion } from "framer-motion";
import { Plane, MapPin, Calendar, Clock, Users, Camera, Stethoscope, Wrench } from "lucide-react";

const ITINERARY = [
  { day: "Day 1–2", title: "Arrival & Orientation", desc: "Fly into Vientiane. Cultural briefing, team bonding, and gear distribution at our partner NGO's centre.", icon: Plane },
  { day: "Day 3–4", title: "Travel to Luang Namtha", desc: "Journey north through breathtaking karst landscapes. Overnight in a local guesthouse. Meet the village council.", icon: MapPin },
  { day: "Day 5–10", title: "Project Immersion", desc: "Six days of hands-on project work — construction, teaching, or water-system installation — alongside Laotian community members.", icon: Wrench },
  { day: "Day 11–12", title: "Cultural Exchange", desc: "Traditional weaving workshop, shared cooking, village ceremonies, and a community celebration of the completed work.", icon: Users },
  { day: "Day 13–14", title: "Reflection & Departure", desc: "Debrief sessions, journaling, farewell dinner with the village. Return to Vientiane for flights home.", icon: Calendar },
];

const SKILLS_NEEDED = [
  { icon: Wrench, label: "Builders", filled: 6, total: 8 },
  { icon: Camera, label: "Photographers", filled: 1, total: 3 },
  { icon: Stethoscope, label: "First Aiders", filled: 2, total: 3 },
  { icon: Users, label: "Teachers", filled: 4, total: 6 },
];

export default function ExpeditionSection() {
  return (
    <section id="expedition" className="py-24 md:py-32 bg-[#FDFCF8]" aria-labelledby="expedition-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3D6B8C]/40 to-transparent mb-16" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#0E8A57] text-sm font-semibold tracking-[0.15em] uppercase mb-4">The Expedition</p>
          <h2 id="expedition-heading" className="text-3xl md:text-5xl font-heading font-bold text-[#1B3A5B] mb-4">
            14 days that change everything
          </h2>
          <p className="text-[#3D6B8C] max-w-xl mx-auto text-lg">
            December 7–20, 2026. From Singapore to the mountains of northern Laos, here's what the journey looks like.
          </p>
        </motion.div>

        {/* Itinerary */}
        <div className="grid lg:grid-cols-5 gap-4 mb-20">
          {ITINERARY.map((item, i) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 border border-[#3D6B8C]/10 hover:shadow-md transition-shadow relative"
            >
              {i < ITINERARY.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-[#3D6B8C]/30" aria-hidden="true" />
              )}
              <div className="w-10 h-10 rounded-full bg-[#0E8A57]/10 flex items-center justify-center mb-3">
                <item.icon size={18} className="text-[#0E8A57]" />
              </div>
              <p className="text-[#0E8A57] text-xs font-bold tracking-wider uppercase">{item.day}</p>
              <h3 className="font-heading text-base font-semibold text-[#1B3A5B] mt-1 mb-2">{item.title}</h3>
              <p className="text-[#3D6B8C] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Roster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#1B3A5B] rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">Team Roster — 2026 Expedition</h3>
            <p className="text-white/60">We're assembling a diverse team. Here's where we need you most.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS_NEEDED.map((skill) => {
              const remaining = skill.total - skill.filled;
              const pct = (skill.filled / skill.total) * 100;
              return (
                <div key={skill.label} className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon size={20} className="text-[#0E8A57]" />
                    <span className="text-white font-semibold">{skill.label}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 mb-3 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#0E8A57] transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">{skill.filled}/{skill.total} filled</span>
                    {remaining > 0 && (
                      <span className="text-[#0E8A57] font-semibold">{remaining} needed</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0E8A57] text-white font-semibold rounded-full hover:bg-[#0A7045] transition-colors min-h-[44px]"
            >
              Fill a Spot — Apply Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}