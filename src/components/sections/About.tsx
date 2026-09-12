"use client";

import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="about" ref={ref} className="py-24 border-t border-border bg-[#050505] relative overflow-hidden">
      {/* 3D background elements */}
      <motion.div 
        style={{ y: y2, rotateZ: 45 }}
        className="absolute top-20 right-10 w-64 h-64 border border-[#222] opacity-20 pointer-events-none"
      />
      <motion.div 
        style={{ y: y1, rotateZ: 15 }}
        className="absolute bottom-10 left-10 w-48 h-48 border border-primary/20 opacity-20 pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-[#222] box-glow"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-foreground" style={{ transform: "translateZ(30px)" }}>About Me</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground" style={{ transform: "translateZ(20px)" }}>
              <p>
                I am a Full-Stack Developer working across <strong className="text-foreground font-medium">Frontend, Backend, Mobile, Databases, Real-Time Systems, and AI Integrations</strong>. With over 2 years of professional experience, I specialize in building end-to-end production applications that solve real business problems.
              </p>
              
              <p>
                My experience spans a wide variety of domains. I have developed production web applications, cross-platform Android applications, comprehensive admin portals, and multi-role service platforms serving customers and technicians alike. I thrive on creating seamless user experiences powered by robust backend architectures.
              </p>
              
              <p>
                Technically, my core expertise lies in the React ecosystem (React.js, Next.js, React Native) and Node.js backend services (NestJS, Express). I have implemented complex features including:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-base">
                {[
                  "Real-time WebSocket tracking & messaging",
                  "AI-powered workflows (OpenAI)",
                  "Service scheduling & work-order management",
                  "Payment workflows (Stripe, Razorpay)",
                  "Location-based features (Google Maps)",
                  "Automated communications (Twilio SMS/Voice)",
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start bg-[#111] p-3 rounded-lg border border-[#222] hover:border-primary/50 hover:bg-[#1a1a1a] transition-all"
                  >
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0 box-glow"></span>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-8 border-t border-[#222] pt-6">
                Beyond writing code, I bring strong Team Leadership experience, having guided a 5-member development team through sprint planning, technical architecture, and delivery coordination. I bridge the gap between technical execution and business requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
