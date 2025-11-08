import { motion, Variants } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Home, FolderGit2, Zap, Mail, LucideIcon } from 'lucide-react';

// --- DATA ---
const navItems = [
  { name: 'Home', id: 'home', icon: Home },
  { name: 'Projects', id: 'projects', icon: FolderGit2 },
  { name: 'Skills', id: 'skills', icon: Zap },
  { name: 'Contact', id: 'contact', icon: Mail },
];

// --- VARIANTS ---
const navBarVariants: Variants = {
  hidden: { opacity: 0, x: 50 }, 
  visible: { 
    opacity: 1, 
    x: 0,
    y: ["-50%", "-52%", "-50%"], // floating animation
    transition: { 
      x: { type: 'spring', stiffness: 100, damping: 15, delay: 0.8 },
      y: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.5 }
    } 
  },
  offscreen: { 
    opacity: 0, 
    x: 50, // slide slightly right while hiding
    transition: { duration: 0.6, ease: "easeInOut" } // smooth transition
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" } // smooth fade-in + slide-in
  }
};

export const Navigation: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll < 0) return;

      setScrollingUp(currentScroll < lastScroll || currentScroll < 50);
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80; 
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    if (id === 'home' && window.pageYOffset < 10) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <motion.nav
      variants={navBarVariants}
      initial="hidden"
      animate={scrollingUp ? "onscreen" : "offscreen"} // smooth fade + slide
      role="navigation"
      aria-label="Section navigation"
      className="fixed top-1/2 -translate-y-1/2 right-8 z-50 transform-gpu"
    >
      <div className="flex flex-col items-center gap-4 px-4 py-8 rounded-[2rem] bg-card/60 backdrop-blur-xl border border-border/30 shadow-xl shadow-black/50">
        {navItems.map((item, index) => {
          const IconComponent: LucideIcon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              aria-label={item.name}
              className="relative w-12 h-12 rounded-full grid place-items-center bg-secondary/50 border border-border/30 text-muted-foreground hover:text-accent transition-colors"
            >
              <IconComponent className="w-5 h-5" />
              {hoveredIndex === index && (
                <span className="absolute right-14 whitespace-nowrap px-2 py-1 rounded-md bg-popover text-popover-foreground text-xs shadow">
                  {item.name}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};
