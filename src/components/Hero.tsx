import { motion } from 'framer-motion';
import digitalSigil from '@/assets/digital-sigil.png';
import { GlassCard } from './GlassCard';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Digital Sigil */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <motion.img
              src={digitalSigil}
              alt="Digital Sigil"
              className="w-48 h-48 md:w-64 md:h-64 animate-pulse-glow"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                border: '2px solid hsl(var(--neon-blue))',
                boxShadow: '0 0 20px hsl(var(--neon-blue) / 0.5)',
              }}
            />
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.4,
          }}
        >
          <GlassCard className="max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: 1.02 }}
              transition={{ 
                delay: 0.6,
                type: 'spring',
                stiffness: 200,
                damping: 15
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.4,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                }}
                className="text-5xl md:text-7xl font-bold mb-4 text-foreground"
              >
                Hi, I'm{' '}
                <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--accent)))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Venujan
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.6,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                }}
                className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-3"
              >
                Passionate Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                }}
                className="text-lg md:text-xl text-muted-foreground"
              >
                Turning ideas into interactive web apps 🚀
              </motion.p>
            </motion.div>
          </GlassCard>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)] transition-shadow"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-card/60 backdrop-blur-xl border border-border/30 text-foreground font-medium hover:bg-card/80 transition-colors"
              style={{
                boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.1)',
              }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
