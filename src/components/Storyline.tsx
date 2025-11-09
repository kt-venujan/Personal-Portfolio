import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GlassCard } from './GlassCard';

// --- FRAMER MOTION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const svgPathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut' },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay, duration: 0.5, ease: 'easeOut' },
  }),
};

const PortfolioStoryline: React.FC = () => {
  return (
    <section className="bg-secondary/30 py-24 px-4 md:px-8 mb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* === LEFT COLUMN === */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={itemVariants}
              className="text-accent font-semibold text-sm uppercase tracking-wider block mb-2"
            >
              BEHIND THE SCENES
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold mb-4 text-foreground"
            >
              The storyteller of my life
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mb-8 text-lg"
            >
              Every line of code I write, every project I undertake, is a chapter in my ongoing story of growth and discovery in the tech world. Dive into my journey and see how I've evolved over time.
            </motion.p>
          </motion.div>

          {/* === RIGHT COLUMN: TIMELINE === */}
          <div className="lg:col-span-3 relative">
            {/* --- DESKTOP TIMELINE --- */}
            <div className="hidden lg:block relative min-h-[450px]">
              {/* Faded Numbers */}
              <span className="absolute text-[14rem] font-bold text-foreground/10 -z-10" style={{ top: '160px', left: '0' }}>1</span>
              <span className="absolute text-[14rem] font-bold text-foreground/10 -z-10 left-1/2 transform -translate-x-1/2" style={{ top: '60px' }}>2</span>
              <span className="absolute text-[14rem] font-bold text-foreground/10 -z-10" style={{ top: '-40px', right: '0' }}>3</span>

              {/* Wavy Line */}
              <motion.svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full z-0 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 450 350"
                preserveAspectRatio="none"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.path
                  d="M 30 300 C 100 300, 150 150, 225 150 S 300 0, 420 50"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  variants={svgPathVariants}
                />
                {/* Dots */}
                <motion.circle cx="30" cy="300" r="10" className="fill-background" stroke="currentColor" strokeWidth="3" custom={1.2} variants={dotVariants} />
                <motion.circle cx="225" cy="150" r="10" className="fill-background" stroke="currentColor" strokeWidth="3" custom={1.5} variants={dotVariants} />
                <motion.circle cx="420" cy="50" r="10" className="fill-background" stroke="currentColor" strokeWidth="3" custom={1.8} variants={dotVariants} />
              </motion.svg>

              {/* Timeline Items */}
              <motion.div
                className="absolute inset-0 z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* 1️⃣ Personal Educations */}
                <motion.div variants={itemVariants} transition={{ delay: 1.3 }} className="absolute max-w-[280px] leading-relaxed" style={{ top: '400px', left: '50px' }}>
                  <h3 className="font-bold text-lg text-foreground mb-1">Personal Educations</h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Advanced Levels (A/L) - 2022</li>
                    <li>Cybersecurity & Ethical Hacking - 2023</li>
                    <li>BSc (Hons) Computer Science - 2024</li>
                  </ul>
                </motion.div>

                {/* 2️⃣ Professional Experiences */}
                <motion.div variants={itemVariants} transition={{ delay: 1.6 }} className="absolute max-w-[280px] text-center leading-relaxed" style={{ top: '210px', left: '50%', transform: 'translateX(-50%)' }}>
                  <h3 className="font-bold text-lg text-foreground mb-1">Professional Experiences</h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Trainee IT Technician - 2023</li>
                    <li>Intern Software Engineer - 2025</li>
                  </ul>
                </motion.div>

                {/* 3️⃣ Relevant Projects */}
                <motion.div variants={itemVariants} transition={{ delay: 1.9 }} className="absolute max-w-[280px] text-right leading-relaxed" style={{ top: '90px', right: '0' }}>
                  <h3 className="font-bold text-lg text-foreground mb-1">Relevant Projects</h3>
                  <ul className="text-sm text-muted-foreground list-none space-y-1">
                    <li>FIXORA – Workers Connecting Platform</li>
                    <li>AncientVerse – Old Civilization Exploration</li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* --- MOBILE TIMELINE --- */}
            <motion.div
              className="block lg:hidden space-y-8 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* 1️⃣ Personal Educations */}
              <motion.div
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                <GlassCard className="p-6 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                  <span className="absolute -top-4 -right-2 text-8xl font-bold text-foreground/10 -z-10">1</span>
                  <h3 className="font-bold text-xl text-foreground mb-1">Personal Educations</h3>
                  <ul className="text-muted-foreground list-disc list-inside space-y-1">
                    <li>Advanced Levels (A/L) - 2022</li>
                    <li>Cybersecurity & Ethical Hacking - 2023</li>
                    <li>BSc (Hons) Computer Science - 2024 (Reading)</li>
                  </ul>
                </GlassCard>
              </motion.div>

              {/* 2️⃣ Professional Experiences */}
              <motion.div
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                <GlassCard className="p-6 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                  <span className="absolute -top-4 -right-2 text-8xl font-bold text-foreground/10 -z-10">2</span>
                  <h3 className="font-bold text-xl text-foreground mb-1">Professional Experiences</h3>
                  <ul className="text-muted-foreground list-disc list-inside space-y-1">
                    <li>Trainee IT Technician - 2023</li>
                    <li>Intern Software Engineer - 2025</li>
                  </ul>
                </GlassCard>
              </motion.div>

              {/* 3️⃣ Relevant Projects */}
              <motion.div
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                <GlassCard className="p-6 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                  <span className="absolute -top-4 -right-2 text-8xl font-bold text-foreground/10 -z-10">3</span>
                  <h3 className="font-bold text-xl text-foreground mb-1">Relevant Projects</h3>
                  <ul className="text-muted-foreground list-none space-y-1">
                    <li>FIXORA – Full Stack Web App</li>
                    <li>Fasttrack – Delivery System</li>
                  </ul>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStoryline;
