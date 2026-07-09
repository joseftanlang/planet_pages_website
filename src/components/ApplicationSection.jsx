import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ApplicationSection() {
  // Shared introductory message template
  const messageTemplate = "Hi%20%5BName%5D%2C%20I%20am%20interested%20in%20applying%20for%20the%20Planet%20Pages%20Laos%20YEP%21%20Could%20you%20share%20more%20details%20on%20the%20application%20process%3F";

  const contacts = [
    {
      name: "Josef",
      phone: "6588454281",
      url: `https://wa.me/6588454281?text=${messageTemplate.replace("%5BName%5D", "Josef")}`
    },
    {
      name: "Lisa",
      phone: "6590281121", // Replace with Lisa's actual WhatsApp number if different
      url: `https://wa.me/6590281121?text=${messageTemplate.replace("%5BName%5D", "Lisa")}`
    }
  ];

  return (
    <section id="apply" className="py-24 md:py-32 bg-[#1B3A5B]" aria-labelledby="apply-heading">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#0E8A57] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Expedition Portal</p>
          <h2 id="apply-heading" className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Begin your journey
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-lg">
            Ready to join the expedition? Reach out to either of our team leads on WhatsApp to start your application process for Planet Pages Laos YEP.
          </p>
        </motion.div>

        {/* Dynamic Dual Contacts Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contacts.map((contact) => (
            <div 
              key={contact.name} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-[#0E8A57]/20 flex items-center justify-center mx-auto mb-5">
                  <MessageSquare size={28} className="text-[#0E8A57]" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  Chat with {contact.name}
                </h3>
                <p className="text-white/60 mb-6 text-sm leading-relaxed">
                  Connect directly with {contact.name} to express your interest and receive the YEP application guidelines.
                </p>
              </div>

              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#0E8A57] hover:bg-[#0A7045] text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] w-full min-h-[44px]"
              >
                Message {contact.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}