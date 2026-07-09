import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Globe } from "lucide-react";

const COMMUNITY_IMG = "https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/5ba26b458_generated_602da1fe.png";

const VALUES = [
  { icon: Heart, title: "Empathy First", desc: "We lead with understanding, not assumption. Every project starts by listening to the community's own vision." },
  { icon: BookOpen, title: "Sustainable Learning", desc: "We build capacity, not dependency. Our education programmes train local teachers to carry forward." },
  { icon: Users, title: "Youth Leadership", desc: "Volunteers don't just serve, they also grow. Our programme shapes future civic leaders through immersive fieldwork." },
  { icon: Globe, title: "Cultural Exchange", desc: "The bridge goes both ways. Singaporean volunteers gain as much wisdom from Laos as they bring." },
];

export default function MissionSection() {
  // Set target date: 13th December 2026
  const TARGET_DATE = new Date("2026-12-13T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isExpired: false
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [TARGET_DATE]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: formatNumber(timeLeft.hours) },
    { label: "Mins", value: formatNumber(timeLeft.minutes) },
    { label: "Secs", value: formatNumber(timeLeft.seconds) },
  ];

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
              The Planet Pages Laos Youth Expedition Project is a Singaporean volunteer initiative
              that partners with rural communities in Laos to co-create lasting change. 2026 marks the first year of the programme that
              we are sending interdisciplinary teams of tertiary-level youths to work alongside Laotian
              villagers on education, infrastructure, and clean-water projects.
            </p>
            <p className="text-[#3D6B8C] text-lg leading-relaxed">
              This isn't voluntourism. It's a structured, community-led programme where every
              project is identified, designed, and sustained by the people it serves. We provide
              the hands, the funding, and the technical skill while they provide the knowledge,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 pb-6">
          {VALUES.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <div 
                key={index}
                className="group relative flex flex-col items-start p-6 rounded-2xl border border-slate-100 bg-white transition-all duration-300 ease-in-out hover:bg-emerald-600 cursor-pointer min-h-[200px]"
              >
                {/* Icon Container */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 opacity-0 max-h-0 translate-y-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-[150px] group-hover:translate-y-0 group-hover:text-emerald-50">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Countdown Area */}
        <div className="mt-12 flex flex-col items-center justify-center border-t border-slate-200/60 pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E8A57] bg-green-100 px-3 py-1 rounded-full mb-6">
            Expedition Countdown
          </p>
          
          {timeLeft.isExpired ? (
            <div className="text-center font-heading font-bold text-[#1B3A5B] text-2xl">
              The Expedition Has Begun!
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {timeBlocks.map((block, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="min-w-[65px] sm:min-w-[80px] bg-white text-[#0E8A57] font-bold text-xl sm:text-3xl p-3 rounded-xl text-center shadow-sm border border-slate-100">
                    {block.value}
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#3D6B8C] uppercase tracking-wider mt-2">
                    {block.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}