"use client";

import { useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { projects, Project } from "@/data/projects";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ExternalLink, Code2, Rocket } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="projects" ref={containerRef} className="py-24 border-t border-[#222] bg-[#050505] relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: "radial-gradient(circle at center, #e50914 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          y: bgY 
        }}
      />
      
      <Container className="relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">Selected <span className="text-primary text-glow">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A showcase of production-ready web and mobile applications I have architected and developed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 perspective-[1500px]">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </Container>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10, y: 40 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: 10, y: 40 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-[#333] rounded-3xl shadow-[0_0_50px_rgba(229,9,20,0.2)] flex flex-col"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[#222] bg-[#0a0a0a]/90 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.name}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/50"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 md:p-10 space-y-10">
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Project Overview</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">{selectedProject.description}</p>
                  <p className="mt-4 text-sm inline-flex items-center bg-[#111] border border-[#222] px-4 py-2 rounded-lg">
                    <span className="text-foreground font-semibold mr-2">Role:</span> <span className="text-primary">{selectedProject.role}</span>
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center">
                    <Code2 className="w-5 h-5 mr-2" /> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="inline-flex items-center rounded-lg bg-[#111] border border-[#333] px-4 py-2 text-sm font-medium text-foreground hover:border-primary transition-colors box-glow-hover">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center">
                      <Rocket className="w-5 h-5 mr-2" /> Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start bg-[#111] p-3 rounded-xl border border-[#222]">
                          <span className="flex h-2 w-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0 box-glow"></span>
                          <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.technicalHighlights && (
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center">
                        <Code2 className="w-5 h-5 mr-2" /> Highlights
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.technicalHighlights.map((highlight, i) => (
                          <li key={i} className="flex items-start bg-[#111] p-3 rounded-xl border border-[#222]">
                            <span className="flex h-2 w-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0 box-glow"></span>
                            <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {(selectedProject.demoUrl || selectedProject.githubUrl) && (
                  <div className="flex gap-4 pt-6 border-t border-[#222]">
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary-hover h-12 px-8 box-glow transition-all hover:scale-105">
                        Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl text-sm font-bold border border-[#333] bg-[#111] hover:bg-[#1a1a1a] hover:border-primary/50 h-12 px-8 transition-all hover:scale-105">
                        Source Code <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax subtle movement for the inner content
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, rotateX: 20, y: 50 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.2, type: "spring", bounce: 0.4 }}
      onClick={onClick}
      className="group cursor-pointer rounded-3xl bg-[#0a0a0a] border border-[#222] overflow-hidden hover:border-primary/50 transition-all flex flex-col h-full transform-style-3d box-glow-hover relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      
      <motion.div style={{ y }} className="p-10 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(30px)" }}>
          <div>
            <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors text-glow">{project.name}</h3>
            <p className="text-sm font-semibold text-muted-foreground mt-2 tracking-wide uppercase">{project.type}</p>
          </div>
          <div className="p-3 bg-[#111] rounded-full group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-[#222] group-hover:border-primary group-hover:scale-110">
            <ArrowUpRightIcon className="w-6 h-6" />
          </div>
        </div>
        
        <p className="text-muted-foreground text-base mb-8 flex-grow leading-relaxed" style={{ transform: "translateZ(20px)" }}>{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mt-auto" style={{ transform: "translateZ(40px)" }}>
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="inline-flex items-center rounded-lg bg-[#111] border border-[#222] px-3 py-1.5 text-xs font-bold text-foreground group-hover:border-primary/30 transition-colors">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center rounded-lg bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 text-xs font-bold">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ArrowUpRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
