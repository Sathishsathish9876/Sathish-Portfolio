"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { useRef, useState, MouseEvent } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // 3D Tilt effect state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Calculate rotation limits (max 15 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-black"
    >
      {/* Background 3D Particles / Glows */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/30 rounded-full blur-[100px] mix-blend-screen" />
      </motion.div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 box-glow"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Software Developer • MTS-I
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
              Engineering <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400 text-glow">
                Scalable Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              I am <strong className="text-foreground">Sathish M</strong>, a Full-Stack Developer with 2+ years of production experience crafting web, mobile, and AI-powered applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all bg-primary text-white hover:bg-primary-hover hover:scale-105 hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] h-12 px-8 w-full sm:w-auto"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="/assets/Sathish_M_Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all border border-border bg-[#0a0a0a] hover:border-primary/50 hover:bg-[#111111] h-12 px-8 w-full sm:w-auto"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href="https://www.linkedin.com/in/sathishsanthosh/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/Sathishsathish9876" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:sathishsanthosh7155@gmail.com" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>

          {/* 3D Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-none flex justify-center perspective-[1000px]"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX,
                rotateY,
                translateZ: 50,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full aspect-[4/5] max-w-[400px] rounded-2xl border border-[#222] bg-[#0a0a0a] overflow-visible shadow-2xl transform-style-3d group"
            >
              {/* Inner Image Container */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden border border-[#333] z-10 transition-transform duration-300"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 mix-blend-overlay"></div>
                {/* Profile Placeholder - User will replace this */}
                <div 
                  className="w-full h-full bg-[#111] bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/Sathish_professional.png')" }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground opacity-0 hover:opacity-100 transition-opacity bg-black/50">
                    <span className="text-sm">Profile Image Loaded</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Badges */}
              <motion.div 
                className="absolute -right-8 top-16 bg-[#0a0a0a] border border-[#222] px-4 py-2 rounded-lg shadow-xl z-30"
                style={{ transform: "translateZ(80px)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="font-semibold text-primary">React Native</span>
              </motion.div>
              
              <motion.div 
                className="absolute -left-6 bottom-32 bg-[#0a0a0a] border border-[#222] px-4 py-2 rounded-lg shadow-xl z-30"
                style={{ transform: "translateZ(60px)" }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="font-semibold text-white">NestJS</span>
              </motion.div>

              <motion.div 
                className="absolute -right-4 bottom-12 bg-[#0a0a0a] border border-[#222] px-4 py-2 rounded-lg shadow-xl z-30"
                style={{ transform: "translateZ(70px)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="font-semibold text-red-400">AI Integration</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
