import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "I went to Laos thinking I'd teach them something. I came back realising they taught me everything — patience, gratitude, and what community really means.",
    name: "Rachel Tan",
    role: "2024 Volunteer, NUS Architecture",
  },
  {
    quote: "Watching the kids drink clean water from the filter we installed — that moment erased every blister and sore muscle from the trip. Worth every second.",
    name: "Darren Koh",
    role: "2023 Volunteer, NTU Engineering",
  },
  {
    quote: "The pre-trip training was incredibly thorough. By the time we arrived in Luang Namtha, we felt prepared, respectful, and genuinely useful — not like tourists playing hero.",
    name: "Aisha Binte Hassan",
    role: "2024 Volunteer, SMU Social Sciences",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FDFCF8]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3D6B8C]/40 to-transparent mb-16" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#0E8A57] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Voices</p>
          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-heading font-bold text-[#1B3A5B]">
            Stories from the field
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#3D6B8C]/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote size={28} className="text-[#0E8A57]/30 mb-4" aria-hidden="true" />
              <blockquote className="text-[#1B3A5B] text-base leading-relaxed mb-6 font-light italic">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-[#3D6B8C]/10 pt-4">
                <p className="font-heading font-semibold text-[#1B3A5B]">{t.name}</p>
                <p className="text-[#3D6B8C] text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}