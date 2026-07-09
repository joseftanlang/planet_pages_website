import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ApplicationSection() {
  // Simple introductory message asking to apply for Planet Pages Laos YEP
  const whatsappUrl =
    "https://wa.me/6588454281?text=Hi%20Josef%2C%20I%20am%20interested%20in%20applying%20for%20the%20Planet%20Pages%20Laos%20YEP%21%20Could%20you%20share%20more%20details%20on%20the%20application%20process%3F";

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
            Ready to join the expedition? Connect with us on WhatsApp to start your application process for Planet Pages Laos YEP.
          </p>
        </motion.div>

        {/* WhatsApp Redirection Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 text-center max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#0E8A57]/20 flex items-center justify-center mx-auto mb-6">
            <MessageSquare size={32} className="text-[#0E8A57]" />
          </div>
          
          <h3 className="font-heading text-2xl font-bold text-white mb-3">Connect on WhatsApp</h3>
          <p className="text-white/60 mb-8 text-sm md:text-base">
            Clicking below will open a chat with Josef with a pre-filled introduction message expressing your interest in the YEP.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0E8A57] hover:bg-[#0A7045] text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-h-[44px]"
          >
            Chat with Josef
          </a>
        </div>
      </div>
    </section>
  );
}