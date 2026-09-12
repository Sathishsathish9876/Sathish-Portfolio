"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Professional Experience" },
  { value: "5+", label: "Production Web Applications" },
  { value: "5+", label: "Android Applications" },
  { value: "3", label: "Admin Portals" },
  { value: "100+", label: "APIs Built & Integrated" },
  { value: "5+", label: "Third-Party Integrations" },
];

export function Stats() {
  return (
    <section className="py-16 bg-[#000000] border-t border-b border-[#222]">
      <Container>
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-primary uppercase tracking-widest text-glow">Worked Across</p>
          <p className="text-xl text-muted-foreground mt-2 font-semibold tracking-tight">Web + Mobile + Backend + AI</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 perspective-[1000px]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateX: 45, y: 30 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, translateZ: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                type: "spring",
                bounce: 0.4
              }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0a0a] border border-[#222] text-center transform-style-3d hover:border-primary/50 transition-colors box-glow-hover"
            >
              <div className="text-3xl font-black text-foreground mb-3" style={{ transform: "translateZ(30px)" }}>{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold" style={{ transform: "translateZ(10px)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
