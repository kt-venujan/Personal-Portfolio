import { motion, Variants } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePhoto from '@/assets/profile-photo-bw.jpg';
import { GlassCard } from './GlassCard';

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-24 min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto text-center z-10 w-full px-4">

        {/* 1️⃣ Animated Profile Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-12 flex justify-center mt-16"
        >
          <div className="relative">
            <motion.img
              src={profilePhoto}
              alt="Venujan Profile Avatar"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-border/20 
                         transition-all duration-300 ease-in-out"
            />
            {/* Pulsing Neon Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                border: '4px solid hsl(var(--neon-blue))',
                boxShadow: '0 0 40px hsl(var(--neon-blue) / 0.7)',
              }}
            />
          </div>
        </motion.div>

        {/* 2️⃣ Hero Text with Typing Animation */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <GlassCard className="max-w-3xl mx-auto mb-8">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.0, type: 'spring', stiffness: 150, damping: 10 }}
            >
              {/* ✨ Typing Text Animation */}
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                <TypeAnimation
                  sequence={[
                    "Hi, I'm ",
                    500,
                    "Hi, I'm Venujan 👋",
                    2000,
                    "A React & AI Engineer",
                    2000,
                    "A Cybersecurity Enthusiast",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                  className="neon-text-gradient"
                />
              </motion.h1>

              {/* Value Proposition */}
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mt-2">
                Never stop learning, because life never stops teaching.
              </motion.p>
            </motion.div>
          </GlassCard>

          {/* 3️⃣ Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-accent text-foreground font-medium hover:shadow-[0_0_25px_hsl(var(--neon-blue)/0.6)] transition-all duration-300"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-card/60 backdrop-blur-xl border border-border/30 text-foreground font-medium 
                         hover:bg-card/80 hover:border-border/50 transition-all duration-300"
              style={{
                boxShadow: 'inset 0 0 15px hsl(var(--neon-blue) / 0.2)',
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
