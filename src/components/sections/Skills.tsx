"use client";

import { Container } from "@/components/ui/Container";
import { skillCategories } from "@/data/skills";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="skills" ref={ref} className="py-24 border-t border-[#222] bg-[#000000] overflow-hidden relative">
      <motion.div 
        style={{ y, opacity: 0.1 }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[150px] pointer-events-none mix-blend-screen"
      />
      <Container className="relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Technical <span className="text-primary text-glow">Expertise</span></h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A comprehensive overview of the technologies, languages, and tools I use to build scalable production applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1200px]">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 30, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2, z: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#222] hover:border-primary/50 transition-all box-glow-hover transform-style-3d group"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-[#222] group-hover:border-primary/50 transition-colors" style={{ transform: "translateZ(20px)" }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(30px)" }}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center rounded-lg bg-[#111] border border-[#333] px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
