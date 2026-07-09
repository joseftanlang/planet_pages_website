import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wrench, Heart, ChevronRight, ChevronLeft, Check } from "lucide-react";

const CHAPTERS = [
  { id: 1, icon: User, title: "Who You Are", subtitle: "Chapter One" },
  { id: 2, icon: Wrench, title: "Your Skills", subtitle: "Chapter Two" },
  { id: 3, icon: Heart, title: "Your Motivation", subtitle: "Chapter Three" },
];

export default function ApplicationSection() {
  const [chapter, setChapter] = useState(1);
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", age: "", nationality: "",
    skills: [], experience: "", firstAid: "",
    motivation: "", availability: "", commitment: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const toggleSkill = (skill) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
    }));
  };

  const canAdvance = () => {
    if (chapter === 1) return form.fullName && form.email && form.age;
    if (chapter === 2) return form.skills.length > 0;
    if (chapter === 3) return form.motivation && form.commitment;
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-[#3D6B8C]/20 bg-white text-[#1B3A5B] placeholder:text-[#3D6B8C]/50 focus:border-[#0E8A57] focus:ring-1 focus:ring-[#0E8A57] transition-colors text-base min-h-[44px]";

  const SKILL_OPTIONS = ["Teaching", "Construction", "Photography", "First Aid", "Project Management", "Cooking", "Translation", "Graphic Design"];

  return (
    <section id="apply" className="py-24 md:py-32 bg-[#1B3A5B]" aria-labelledby="apply-heading">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#0E8A57] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Expedition Portal</p>
          <h2 id="apply-heading" className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Begin your journey
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-lg">
            Three short chapters. No essays, no pressure — just tell us who you are and why this matters to you.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#0E8A57]/20 flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-[#0E8A57]" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-3">Application Received</h3>
            <p className="text-white/60 max-w-md mx-auto">
              Thank you, {form.fullName}. We've received your application and will reach out within 5 working days.
              Check your email at <span className="text-[#0E8A57]">{form.email}</span> for a confirmation.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Chapter indicators */}
            <div className="flex items-center justify-center gap-2 mb-10">
              {CHAPTERS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => ch.id < chapter && setChapter(ch.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                    ch.id === chapter
                      ? "bg-[#0E8A57] text-white"
                      : ch.id < chapter
                        ? "bg-white/10 text-white cursor-pointer"
                        : "bg-white/5 text-white/30 cursor-default"
                  }`}
                  disabled={ch.id > chapter}
                  aria-current={ch.id === chapter ? "step" : undefined}
                >
                  <ch.icon size={16} />
                  <span className="hidden sm:inline">{ch.title}</span>
                  <span className="sm:hidden">{ch.id}</span>
                </button>
              ))}
            </div>

            {/* Form card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
              <AnimatePresence mode="wait">
                {chapter === 1 && (
                  <motion.div
                    key="ch1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-heading text-xl font-bold text-white mb-1">Who You Are</h3>
                    <p className="text-white/40 text-sm mb-6">Basic details so we know who's joining the team.</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/70 text-sm mb-1.5">Full Name *</label>
                        <input type="text" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Your full name" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-white/70 text-sm mb-1.5">Email Address *</label>
                        <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className={inputClass} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/70 text-sm mb-1.5">Age *</label>
                          <input type="number" value={form.age} onChange={(e) => update("age", e.target.value)} placeholder="21" className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-white/70 text-sm mb-1.5">Phone</label>
                          <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+65 9XXX XXXX" className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white/70 text-sm mb-1.5">Nationality</label>
                        <input type="text" value={form.nationality} onChange={(e) => update("nationality", e.target.value)} placeholder="Singaporean" className={inputClass} />
                      </div>
                    </div>
                  </motion.div>
                )}

                {chapter === 2 && (
                  <motion.div
                    key="ch2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-heading text-xl font-bold text-white mb-1">Your Skills</h3>
                    <p className="text-white/40 text-sm mb-6">Select the skills you can contribute. Pick as many as apply.</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {SKILL_OPTIONS.map((skill) => (
                        <button
                          key={skill}
                          onClick={() => toggleSkill(skill)}
                          className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors min-h-[44px] text-left ${
                            form.skills.includes(skill)
                              ? "bg-[#0E8A57] text-white"
                              : "bg-white/10 text-white/70 hover:bg-white/15"
                          }`}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-1.5">Prior volunteer experience</label>
                      <textarea
                        value={form.experience}
                        onChange={(e) => update("experience", e.target.value)}
                        placeholder="Tell us briefly about any past volunteer or community work..."
                        rows={3}
                        className={inputClass + " resize-none"}
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-white/70 text-sm mb-1.5">Do you have a valid first aid certification?</label>
                      <div className="flex gap-3">
                        {["Yes", "No", "Willing to get certified"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => update("firstAid", opt)}
                            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                              form.firstAid === opt ? "bg-[#0E8A57] text-white" : "bg-white/10 text-white/70 hover:bg-white/15"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {chapter === 3 && (
                  <motion.div
                    key="ch3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-heading text-xl font-bold text-white mb-1">Your Motivation</h3>
                    <p className="text-white/40 text-sm mb-6">Why does this expedition call to you?</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/70 text-sm mb-1.5">Why do you want to join Planet Pages Laos? *</label>
                        <textarea
                          value={form.motivation}
                          onChange={(e) => update("motivation", e.target.value)}
                          placeholder="Share what drives you to volunteer. There are no wrong answers — just be honest."
                          rows={4}
                          className={inputClass + " resize-none"}
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-sm mb-1.5">Availability for pre-trip training (weekends in Nov 2026)</label>
                        <div className="flex gap-3">
                          {["All weekends", "Most weekends", "Limited"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => update("availability", opt)}
                              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                                form.availability === opt ? "bg-[#0E8A57] text-white" : "bg-white/10 text-white/70 hover:bg-white/15"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer mt-4">
                        <input
                          type="checkbox"
                          checked={form.commitment}
                          onChange={(e) => update("commitment", e.target.checked)}
                          className="mt-1 w-5 h-5 rounded border-[#3D6B8C]/30 text-[#0E8A57] focus:ring-[#0E8A57] min-w-[20px]"
                        />
                        <span className="text-white/70 text-sm leading-relaxed">
                          I understand that this is a 14-day commitment requiring physical readiness, cultural
                          sensitivity, and full participation in pre-trip training sessions. *
                        </span>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                {chapter > 1 ? (
                  <button
                    onClick={() => setChapter(chapter - 1)}
                    className="flex items-center gap-2 px-5 py-3 text-white/60 hover:text-white transition-colors min-h-[44px]"
                  >
                    <ChevronLeft size={18} /> Back
                  </button>
                ) : (
                  <div />
                )}
                {chapter < 3 ? (
                  <button
                    onClick={() => canAdvance() && setChapter(chapter + 1)}
                    disabled={!canAdvance()}
                    className="flex items-center gap-2 px-6 py-3 bg-[#0E8A57] text-white font-semibold rounded-full hover:bg-[#0A7045] transition-colors min-h-[44px] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canAdvance()}
                    className="flex items-center gap-2 px-8 py-3 bg-[#0E8A57] text-white font-semibold rounded-full hover:bg-[#0A7045] transition-colors min-h-[44px] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}