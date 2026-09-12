"use client";

import { Container } from "@/components/ui/Container";
import { experiences } from "@/data/experience";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Users } from "lucide-react";
import { useRef } from "react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-24 border-t border-[#222] bg-[#000000] relative">
      <Container>
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Professional <span className="text-primary text-glow">Experience</span></h2>
        </div>

        <div className="relative">
          {/* Dynamic Red Progress Line */}
          <div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-1 bg-[#111] rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-primary"
              style={{ height: lineHeight, originY: 0 }}
            />
          </div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                
                {/* Glowing Node on the line */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="hidden md:block absolute left-[30%] top-8 w-4 h-4 bg-primary rounded-full border-4 border-[#000] shadow-[0_0_15px_rgba(229,9,20,0.8)] z-10 -translate-x-[6px]"
                />

                <div className="md:grid md:grid-cols-[30%_1fr] md:gap-12 lg:gap-16">
                  
                  {/* Left: Company Details */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className="mb-8 md:mb-0 md:pr-12 text-center md:text-right perspective-[1000px]"
                  >
                    <div className="sticky top-32 transform-style-3d hover:translate-z-[20px] transition-transform">
                      <h3 className="text-2xl font-black text-foreground">{exp.company}</h3>
                      <p className="text-primary font-bold mt-2 text-glow">{exp.designation}</p>
                      <div className="inline-block mt-4 px-4 py-1.5 rounded-full bg-[#111] border border-[#222] text-sm text-muted-foreground font-semibold">
                        {exp.duration}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground mt-3 uppercase tracking-widest">{exp.experience}</p>
                    </div>
                  </motion.div>

                  {/* Right: Responsibilities */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
                    className="space-y-6 perspective-[1000px]"
                  >
                    <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] transform-style-3d hover:border-primary/30 box-glow-hover transition-all">
                      <div className="flex items-center mb-6" style={{ transform: "translateZ(20px)" }}>
                        <div className="p-3 rounded-xl bg-primary/10 mr-4">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-black text-xl">Key Responsibilities</h4>
                      </div>
                      <ul className="space-y-4" style={{ transform: "translateZ(10px)" }}>
                        {exp.responsibilities.slice(0, 8).map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex h-2 w-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0 box-glow"></span>
                            <span className="text-muted-foreground text-base leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div id="leadership" className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] border-l-4 border-l-primary transform-style-3d hover:border-primary/50 box-glow-hover transition-all relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl pointer-events-none"></div>
                      
                      <div className="flex items-center mb-6" style={{ transform: "translateZ(20px)" }}>
                        <div className="p-3 rounded-xl bg-primary/10 mr-4">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-black text-xl">Team Lead Experience</h4>
                      </div>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                        Led a 5-member development team, bridging the gap between technical execution and business requirements.
                      </p>
                      <div className="flex flex-wrap gap-3" style={{ transform: "translateZ(30px)" }}>
                        {[
                          "Task Allocation", "Sprint Planning", "Requirement Analysis", 
                          "Technical Guidance", "Code Review", "Bug Prioritization", 
                          "Client Communication", "Deployment Coordination", "Mentoring", "Delivery Tracking"
                        ].map((skill, i) => (
                          <span key={i} className="inline-flex items-center rounded-lg bg-[#111] border border-[#333] px-3 py-1.5 text-xs font-bold text-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
