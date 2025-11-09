import { motion, Variants } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePhoto from '@/assets/profile-photo-bw.jpg';
import { GlassCard } from './GlassCard';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaDownload } from 'react-icons/fa6';

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

// --- Social Links ---
const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/kt-venujan',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://linkedin.com/in/thirugnanam-venujan',
    label: 'LinkedIn',
  },
  {
    icon: <FaXTwitter />,
    href: 'https://twitter.com/thirugnanam-venujan',
    label: 'Twitter',
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:venuthiru185@gmail.com',
    label: 'Email',
  },
];

export const Hero: React.FC = () => {
  return (
    // ✨ UPDATED: Removed 'items-center' and adjusted padding for more top space
    <section id="home" className="scroll-mt-24 min-h-screen flex pt-28 pb-20 md:pt-32">
      <div className="max-w-5xl mx-auto text-center z-10 w-full px-4">
        
        {/* 1️⃣ Animated Profile Avatar */}
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.9 }} 
          animate={{ y: 0, opacity: 1, scale: 1 }}     
          transition={{
            type: 'spring',
            stiffness: 200, 
            damping: 25,    
            delay: 0.3,     
            duration: 0.8,  
            ease: "easeOut", 
          }}
          // ✨ UPDATED: Removed all 'mt-' (margin-top) to move it higher
          className="mb-12 flex justify-center" 
        >
          <div className="relative">
            <motion.img
              src={profilePhoto}
              alt="Venujan Profile Avatar"
              // ✨ UPDATED: Reduced avatar size for better mobile fit
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-border/20 
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
              {/* ✨ UPDATED: Made h1 font size responsive for mobile */}
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-foreground">
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
              {/* ✨ UPDATED: Made subtitle font size responsive for mobile */}
              <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-muted-foreground mt-2">
                Never stop learning, because life never stops teaching.
              </motion.p>
            </motion.div>
          </GlassCard>

          {/* 3️⃣ Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-accent text-foreground font-medium hover:shadow-[0_0_25px_hsl(var(--neon-blue)/0.6)] transition-all duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-card/60 backdrop-blur-xl border border-border/30 text-foreground font-medium 
                         hover:bg-card/80 hover:border-border/50 transition-all duration-300"
              style={{ boxShadow: 'inset 0 0 15px hsl(var(--neon-blue) / 0.2)' }}
            >
              Get in Touch
            </motion.a>
            {/* Download CV */}
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-foreground text-background font-medium 
                         hover:bg-accent hover:text-foreground transition-all duration-300
                         flex items-center gap-2"
            >
              <FaDownload className="text-xl" />
              Download CV
            </motion.a>
          </motion.div>

          {/* 4️⃣ ANIMATED SOCIAL LINKS */}
          <motion.div
            variants={itemVariants} 
            className="flex gap-6 justify-center mt-10" 
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.15, y: -5 }} 
                whileTap={{ scale: 0.9 }}
                className="
                  p-3 w-12 h-12 flex items-center justify-center rounded-full 
                  bg-card/60 backdrop-blur-xl 
                  border border-border/30 
                  text-foreground text-xl 
                  hover:bg-card/80 
                  hover:border-border/50
                  hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.5)]
                  transition-all duration-300
                "
                style={{
                  boxShadow: 'inset 0 0 10px hsl(var(--neon-blue) / 0.1)',
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};