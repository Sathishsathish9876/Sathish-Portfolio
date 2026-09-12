import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#222] bg-[#000000] py-12 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-black tracking-tighter text-foreground">
              Sathish<span className="text-primary text-glow">.</span>
            </span>
            <p className="text-muted-foreground mt-2 text-sm font-medium">
              Engineering scalable solutions since 2021
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/sathishsanthosh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Sathishsathish9876"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:sathishsanthosh7155@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-[#111] text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Sathish M. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Built with <span className="text-primary mx-1">♥</span> using Next.js & Tailwind
          </p>
        </div>
      </Container>
    </footer>
  );
}
