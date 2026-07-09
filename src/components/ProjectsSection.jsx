import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Hammer, Droplets, ChevronRight } from "lucide-react";

const EDU_IMG = "https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/31cb719a4_generated_9806942c.png";
const INFRA_IMG = "https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/6b63ff341_generated_b61f6a47.png";
const WATER_IMG = "https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/bc1bfb747_generated_c83ab003.png";

const PROJECTS = [
  {
    id: "education",
    icon: GraduationCap,
    year: "2020 – Present",
    title: "Village Learning Centres",
    subtitle: "Education",
    description: "We've established four community learning centres across Luang Namtha province, each equipped with locally sourced materials and trained by a partnership between Singaporean educators and Laotian teachers. The curriculum blends traditional Laotian knowledge with STEM fundamentals.",
    stats: [
      { value: "4", label: "Centres Built" },
      { value: "860", label: "Students Enrolled" },
      { value: "24", label: "Local Teachers Trained" },
    ],
    image: EDU_IMG,
    alt: "Singaporean students teaching Laotian children in a rural classroom",
  },
  {
    id: "infrastructure",
    icon: Hammer,
    year: "2019 – Present",
    title: "Community Structures",
    subtitle: "Infrastructure",
    description: "From footbridges spanning monsoon-swollen streams to community halls that serve as storm shelters, our infrastructure programme addresses the structural needs identified by village councils. Every design is co-created with local builders using regional materials.",
    stats: [
      { value: "7", label: "Bridges Built" },
      { value: "3", label: "Community Halls" },
      { value: "2,100", label: "Villagers Served" },
    ],
    image: INFRA_IMG,
    alt: "Volunteers constructing a community building in a rural Laotian village",
  },
  {
    id: "water",
    icon: Droplets,
    year: "2021 – Present",
    title: "Clean Water Initiative",
    subtitle: "Clean Water",
    description: "Access to safe drinking water transforms health outcomes overnight. Our clean-water teams install bio-sand filters and gravity-fed systems designed to be maintained entirely by village water committees, ensuring sustainability long after we leave.",
    stats: [
      { value: "18", label: "Filtration Systems" },
      { value: "1,400+", label: "People With Clean Water" },
      { value: "92%", label: "Systems Still Active" },
    ],
    image: WATER_IMG,
    alt: "Volunteers installing a clean water filtration system in a Laotian village",
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#1B3A5B] weave-bg" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
        <p className="inline-block bg-green-100 text-[#0E8A57] px-3 py-1 rounded-full text-sm font-semibold tracking-[0.2em] uppercase mb-6">
          Impact Ledger
        </p>
          <h2 id="projects-heading" className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Where your effort goes
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Every project is a chapter in our shared story. Scroll through the timeline to see what we've built together.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#3D6B8C]/40" aria-hidden="true" />

          {PROJECTS.map((project, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-start ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0E8A57] border-4 border-[#1B3A5B] z-10 top-2" aria-hidden="true" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#0E8A57]/30 transition-colors">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#1B3A5B]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <project.icon size={18} className="text-[#0E8A57]" />
                        <span className="text-[#0E8A57] text-sm font-semibold">{project.subtitle}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-5">{project.description}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-xl font-heading font-bold text-[#0E8A57]">{stat.value}</div>
                            <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}