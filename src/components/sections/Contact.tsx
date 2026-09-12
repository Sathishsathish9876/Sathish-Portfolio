"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again or email directly.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-[#222] bg-[#000000] relative">
      {/* 3D background grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,_#e50914_0%,_transparent_30%)] opacity-20 pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">Get In <span className="text-primary text-glow">Touch</span></h2>
            <p className="text-muted-foreground text-lg">
              Currently open for new opportunities. Let's build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 perspective-[1500px]">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="flex flex-col justify-center transform-style-3d"
            >
              <h3 className="text-3xl font-black mb-8 text-foreground" style={{ transform: "translateZ(20px)" }}>Contact Information</h3>
              
              <div className="space-y-8" style={{ transform: "translateZ(10px)" }}>
                <a href="mailto:sathishsanthosh7155@gmail.com" className="flex items-center group">
                  <div className="w-14 h-14 bg-[#111] border border-[#222] rounded-2xl flex items-center justify-center mr-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all box-glow-hover">
                    <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">sathishsanthosh7155@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-[#111] border border-[#222] rounded-2xl flex items-center justify-center mr-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all box-glow-hover">
                    <MapPin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg font-medium text-foreground">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-[#222]" style={{ transform: "translateZ(10px)" }}>
                <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
                <div className="space-y-4">
                  <a href="https://www.linkedin.com/in/sathishsanthosh/" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 transform duration-300">
                    <svg className="w-5 h-5 mr-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span className="font-semibold">Sathish Santhosh</span>
                  </a>
                  <a href="https://github.com/Sathishsathish9876" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 transform duration-300">
                    <svg className="w-5 h-5 mr-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span className="font-semibold">Sathishsathish9876</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
              className="p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-[#222] shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full flex h-14 rounded-xl border border-[#333] bg-[#111] px-4 py-2 text-sm text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full flex h-14 rounded-xl border border-[#333] bg-[#111] px-4 py-2 text-sm text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full flex rounded-xl border border-[#333] bg-[#111] px-4 py-3 text-sm text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all bg-primary text-white hover:bg-primary-hover h-14 px-8 mt-2 box-glow disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
                {errorMsg && (
                  <p className="text-red-500 text-sm font-medium mt-2 text-center">{errorMsg}</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
