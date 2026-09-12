"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Database, Network, Cpu, Shield, Globe, Smartphone, Server, RefreshCw, KanbanSquare, CheckCircle2 } from "lucide-react";

export function Engineering() {
  return (
    <section id="engineering" className="py-24 bg-[#050505] border-t border-[#222] relative overflow-hidden">
      {/* Background 3D grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e50914 1px, transparent 1px),
            linear-gradient(to bottom, #e50914 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) scale(2.5) translateY(-100px)',
        }}
      />
      
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">Engineering <span className="text-primary text-glow">Architecture</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visualizing the core systems and complex architectures I have designed and implemented in production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 perspective-[1500px]">
          
          {/* Real-Time Systems */}
          <motion.div
            initial={{ opacity: 0, rotateY: -20, x: -50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] hover:border-primary/50 transform-style-3d box-glow-hover"
          >
            <div className="flex items-center mb-8" style={{ transform: "translateZ(30px)" }}>
              <div className="p-4 rounded-2xl bg-primary/10 mr-4 border border-primary/20">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-black text-2xl text-foreground">Real-Time WebSocket Architecture</h3>
                <p className="text-sm text-primary font-bold tracking-widest uppercase mt-1">Live Tracking & Chat</p>
              </div>
            </div>
            
            <div className="relative h-64 bg-[#111] rounded-2xl border border-[#222] p-4 flex flex-col items-center justify-center overflow-hidden" style={{ transform: "translateZ(20px)" }}>
              {/* Animated Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-32 h-32 border border-primary/20 rounded-full"
                  animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-32 h-32 border border-primary/20 rounded-full"
                  animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </div>
              
              <div className="z-10 flex items-center gap-4 w-full justify-between px-6">
                <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
                  <div className="w-14 h-14 bg-[#0a0a0a] border border-[#333] rounded-xl flex items-center justify-center box-glow shadow-primary">
                    <Smartphone className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 font-bold">Mobile Client</span>
                </motion.div>
                
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <motion.div 
                    className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(229,9,20,0.8)]"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                  />
                  <div className="absolute -top-6 text-[10px] font-bold text-primary uppercase bg-[#111] px-2 py-0.5 border border-[#333] rounded-md">Socket.io</div>
                </div>
                
                <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
                  <div className="w-14 h-14 bg-[#0a0a0a] border border-[#333] rounded-xl flex items-center justify-center shadow-lg">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 font-bold">NestJS Hub</span>
                </motion.div>
              </div>
            </div>
            
            <p className="text-muted-foreground mt-6 text-sm leading-relaxed" style={{ transform: "translateZ(10px)" }}>
              Implemented robust bi-directional communication systems handling live location tracking for field agents, real-time status updates, and instant messaging between clients and technicians.
            </p>
          </motion.div>

          {/* AI Workflows */}
          <motion.div
            initial={{ opacity: 0, rotateY: 20, x: 50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] hover:border-primary/50 transform-style-3d box-glow-hover"
          >
            <div className="flex items-center mb-8" style={{ transform: "translateZ(30px)" }}>
              <div className="p-4 rounded-2xl bg-primary/10 mr-4 border border-primary/20">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-black text-2xl text-foreground">AI Automation Pipelines</h3>
                <p className="text-sm text-primary font-bold tracking-widest uppercase mt-1">OpenAI / LLMs</p>
              </div>
            </div>
            
            <div className="h-64 bg-[#111] rounded-2xl border border-[#222] p-4 relative overflow-hidden" style={{ transform: "translateZ(20px)" }}>
               {/* Animated AI Pipeline */}
               <div className="absolute inset-0 bg-[#0a0a0a] opacity-50 bg-[radial-gradient(#e50914_1px,transparent_1px)] [background-size:16px_16px]"></div>
               
               <div className="relative z-10 h-full flex flex-col justify-between py-2">
                 <div className="flex justify-between items-center px-4">
                    <div className="bg-[#111] border border-[#333] text-xs px-3 py-1.5 rounded-lg text-muted-foreground font-bold">Unstructured Text / Image</div>
                    <motion.div 
                      className="w-8 h-[2px] bg-primary/50"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <div className="w-12 h-12 bg-[#0a0a0a] border border-primary/40 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.3)]">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                 </div>

                 <div className="flex justify-center">
                    <motion.div 
                      className="h-10 w-[2px] bg-gradient-to-b from-primary/50 to-transparent"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                 </div>

                 <div className="bg-[#0a0a0a] border border-[#333] rounded-xl p-3 mx-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-bold text-foreground">Structured JSON Output</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground font-mono bg-[#111] p-2 rounded border border-[#222]">
                      <span className="text-red-400">{"{"}</span><br/>
                      &nbsp;&nbsp;<span className="text-primary">"category"</span>: <span className="text-white">"plumbing"</span>,<br/>
                      &nbsp;&nbsp;<span className="text-primary">"urgency"</span>: <span className="text-white">"high"</span><br/>
                      <span className="text-red-400">{"}"}</span>
                    </div>
                 </div>
               </div>
            </div>
            
            <p className="text-muted-foreground mt-6 text-sm leading-relaxed" style={{ transform: "translateZ(10px)" }}>
              Integrated OpenAI to automate complex business logic. Built systems that analyze customer issue descriptions and images to automatically categorize problems and assign the correct technicians.
            </p>
          </motion.div>

          {/* Agile Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="lg:col-span-2 p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] hover:border-primary/50 transform-style-3d box-glow-hover relative overflow-hidden"
          >
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/10 rounded-tl-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center mb-8" style={{ transform: "translateZ(30px)" }}>
              <div className="p-4 rounded-2xl bg-primary/10 mr-4 border border-primary/20">
                <RefreshCw className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-black text-2xl text-foreground">Agile & Scrum Methodology</h3>
                <p className="text-sm text-primary font-bold tracking-widest uppercase mt-1">Iterative Delivery & Sprint Cycles</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6" style={{ transform: "translateZ(20px)" }}>
              <div className="bg-[#111] border border-[#222] p-6 rounded-2xl hover:border-primary/30 transition-colors">
                <KanbanSquare className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Sprint Planning & Backlog</h4>
                <p className="text-sm text-muted-foreground">Breaking down complex requirements into manageable epics and two-week sprints. Prioritizing the product backlog based on business value and dependencies.</p>
              </div>
              <div className="bg-[#111] border border-[#222] p-6 rounded-2xl hover:border-primary/30 transition-colors">
                <RefreshCw className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Daily Scrum & Execution</h4>
                <p className="text-sm text-muted-foreground">Conducting daily standups to sync progress, identify blockers early, and ensure the development team stays aligned on the sprint goals.</p>
              </div>
              <div className="bg-[#111] border border-[#222] p-6 rounded-2xl hover:border-primary/30 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Review & Retrospective</h4>
                <p className="text-sm text-muted-foreground">Delivering continuous increments of working software. Conducting sprint retrospectives to analyze team velocity and continuously improve processes.</p>
              </div>
            </div>
            
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
