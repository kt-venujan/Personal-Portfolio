import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = ['About', 'Projects', 'Skills', 'Contact'];

export const Navigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-card/60 backdrop-blur-xl border border-border/30">
        {navItems.map((item, index) => (
          <motion.button
            key={item}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {hoveredIndex === index && (
              <motion.div
                layoutId="navHighlight"
                className="absolute inset-0 bg-accent/10 rounded-full"
                style={{ boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.3)' }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};
