
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-center w-full mb-8 select-none relative z-10 py-4">
        <span className="text-muted-foreground/10 text-center font-serif italic text-7xl sm:text-8xl md:text-9xl font-bold whitespace-nowrap">
          改善
        </span>
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <div className="flex flex-row items-center justify-start gap-4 sm:gap-8">
          <div className="relative shrink-0 -mt-16 sm:mt-0">
             <div className="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 sm:h-40 sm:w-40 ring-2 ring-border ring-offset-2 ring-offset-background">
                <img 
                  src="https://picsum.photos/seed/vedant/400" 
                  alt="Vedant Lavale" 
                  className="aspect-square h-full w-full object-cover"
                />
             </div>
          </div>
          <div className="flex-1 space-y-2 text-left pt-0 sm:pt-16 -mt-4 sm:mt-0">
            <div className="flex flex-col items-start gap-1.5">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-5xl tracking-tight">Vedant Lavale</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" className="h-6 w-6" alt="Verified" />
              </div>
              <p className="text-muted-foreground font-mono text-sm">20 • Engineer • Developer • Builder</p>
            </div>
            
            <div className="flex items-center gap-x-4 text-muted-foreground pt-1">
              <a href="mailto:vedantlavale@gmail.com" className="hover:text-foreground transition-colors"><Mail className="size-5" /></a>
              <a href="https://github.com/vedantlavale" target="_blank" className="hover:text-foreground transition-colors"><Github className="size-5" /></a>
              <a href="https://linkedin.com/in/vedantlavale" target="_blank" className="hover:text-foreground transition-colors"><Linkedin className="size-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
