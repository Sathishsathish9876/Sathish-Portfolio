"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Engineering", href: "#engineering" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#222]" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black tracking-tighter">
              Sathish<span className="text-primary text-glow">.</span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-muted-foreground hover:text-foreground hover:text-shadow-sm transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/assets/Sathish_M_Resume.pdf"
                className="inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all bg-primary text-white hover:bg-primary-hover hover:scale-105 box-glow-hover h-10 px-6"
                download
              >
                Resume
              </a>
            </div>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-[#222] overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-muted-foreground hover:text-foreground hover:bg-[#111] hover:border hover:border-[#333] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/assets/Sathish_M_Resume.pdf"
                className="block w-full px-4 py-4 mt-6 text-center rounded-xl text-base font-bold bg-primary text-white hover:bg-primary-hover transition-colors box-glow"
                download
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
