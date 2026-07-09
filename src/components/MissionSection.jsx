import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Globe } from "lucide-react";

const COMMUNITY_IMG = "https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/5ba26b458_generated_602da1fe.png";

const VALUES = [
  { icon: Heart, title: "Empathy First", desc: "We lead with understanding, not assumption. Every project starts by listening to the community's own vision." },
  { icon: BookOpen, title: "Sustainable Learning", desc: "We build capacity, not dependency. Our education programmes train local teachers to carry forward." },
  { icon: Users, title: "Youth Leadership", desc: "Volunteers don't just serve — they grow. Our programme shapes future civic leaders through immersive fieldwork." },
  { icon: Globe, title: "Cultural Exchange", desc: "The bridge goes both ways. Singaporean volunteers gain as much wisdom from Laos as they bring." },
];

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-[#FDFCF8]" aria-labelledby="mission-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Horizon line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#3D6B8C]/40 to-transparent mb-16" aria-hidden="true" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0E8A57] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Our Mission</p>
            <h2 id="mission-heading" className="text-3xl md:text-5xl font-heading font-bold text-[#1B3A5B] mb-6">
              Building bridges that outlast the trip
            </h2>
            <p className="text-[#3D6B8C] text-lg leading-relaxed mb-6">
              The Bridge of Light Youth Expedition Project is a Singaporean volunteer initiative
              that partners with rural communities in Laos to co-create lasting change. Since 2018,
              we've sent interdisciplinary teams of university students to work alongside Laotian
              villagers on education, infrastructure, and clean-water projects.
            </p>
            <p className="text-[#3D6B8C] text-lg leading-relaxed">
              This isn't voluntourism. It's a structured, community-led programme where every
              project is identified, designed, and sustained by the people it serves. We provide
              the hands, the funding, and the technical skill — they provide the knowledge,
              the vision, and the cultural grounding.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={COMMUNITY_IMG}
                alt="Singaporean volunteers and Laotian community members sharing a meal together under a tree"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1B3A5B] text-white px-6 py-4 rounded-xl shadow-lg max-w-[240px]">
              <p className="font-heading text-2xl font-bold">100%</p>
              <p className="text-white/70 text-sm mt-1">of funds go directly to community projects</p>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-[#3D6B8C]/10 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#0E8A57]/10 flex items-center justify-center mb-4">
                <val.icon size={22} className="text-[#0E8A57]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#1B3A5B] mb-2">{val.title}</h3>
              <p className="text-[#3D6B8C] text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}