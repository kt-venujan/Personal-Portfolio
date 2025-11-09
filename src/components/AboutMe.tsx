import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { useRef } from 'react';
import { School, Star } from 'lucide-react'; // ✨ UPDATED: Removed 'Award' icon

const skills = ['Leadership', 'Adaptable', 'Time Managment','Communication'];

// --- (Variants are unchanged) ---
const cardParentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const AboutMe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* --- Column 1: About Me (Unchanged) --- */}
          <motion.div style={{ y: yLeft }}> 
            <GlassCard className="h-full">
              <motion.div
                variants={cardParentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h2 variants={cardItemVariants} className="text-4xl font-bold mb-6 text-foreground">About Me</motion.h2>
                <motion.div variants={cardItemVariants} className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate developer who loves turning{' '}
                    <motion.span
                      className="text-accent font-semibold cursor-pointer"
                      whileHover={{ textShadow: '0 0 8px hsl(var(--neon-blue))' }}
                    >
                      creative ideas
                    </motion.span>{' '}
                    into functional, beautiful web applications.
                  </p>
                  {/* ... other paragraphs ... */}
                  <p>
                    My journey in tech is driven by a love for{' '}
                    <motion.span
                      className="text-accent font-semibold cursor-pointer"
                      whileHover={{ textShadow: '0 0 8px hsl(var(--neon-blue))' }}
                    >
                      problem-solving
                    </motion.span>{' '}
                    and building solutions that make a real impact.
                  </p>
                  <p>
                    I thrive in collaborative environments where I can combine{' '}
                    <motion.span
                      className="text-accent font-semibold cursor-pointer"
                      whileHover={{ textShadow: '0 0 8px hsl(var(--neon-blue))' }}
                    >
                      technical expertise
                    </motion.span>{' '}
                    with user-centered design.
                  </p>
                </motion.div>

                <motion.div variants={cardItemVariants} className="flex flex-wrap gap-3 mt-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        animate={{ 
                          x: [0, 5, -3, 0], 
                          y: [0, -4, 6, 0] 
                        }}
                        transition={{
                          duration: 4 + index * 1.5,
                          repeat: Infinity,
                          repeatType: 'mirror',
                          ease: 'easeInOut',
                        }}
                        className="w-28 h-28 rounded-full bg-secondary/50 border border-border/30 flex items-center justify-center backdrop-blur-sm"
                        style={{
                          boxShadow: 'inset 0 0 20px rgba(0, 191, 255, 0.1)',
                        }}
                      >
                        <span className="text-xs font-medium text-center px-2 text-foreground">
                          {skill}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* --- Column 2: Education + Communities --- */}
          {/* --- CERTIFICATES SECTION IS NOW REMOVED --- */}
          <motion.div style={{ y: yRight }}>
            <GlassCard className="h-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardParentVariants}
              >
                {/* --- Education Section --- */}
                <motion.h2 variants={cardItemVariants} className="text-4xl font-bold mb-8 text-foreground">
                  Education
                </motion.h2>
                <motion.div variants={cardItemVariants} className="relative pl-6 space-y-10 border-l-2 border-border/30">
                  {/* Timeline Item 1 */}
                  <motion.div variants={timelineItemVariants} className="relative">
                    <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-secondary" />
                    <School className="absolute -left-[42px] top-10 w-6 h-6 text-accent/70" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Computer Science Degree (Reading)
                    </h3>
                    <p className="text-muted-foreground">Sri Lanka Institute of Information Technology (SLIIT)</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">2024 - 2027</p>
                  </motion.div>
                  {/* Timeline Item 2 */}
                  <motion.div variants={timelineItemVariants} className="relative">
                    <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-secondary" />
                    <Star className="absolute -left-[42px] top-10 w-6 h-6 text-accent/70" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Certificate in Cybersecurity and Ethical Hacking
                    </h3>
                    <p className="text-muted-foreground">Cicra Campus - Colombo</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">2023</p>
                  </motion.div>
                </motion.div>

                {/* --- Communities Section --- */}
                <motion.div
                  variants={cardItemVariants}
                  className="mt-12"
                >
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Communities</h2>
                  <motion.ul
                    variants={cardParentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Leo Club */}
                    <motion.li
                      variants={timelineItemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="w-3 h-3 mt-2 rounded-full bg-accent"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Leo Club of Manipay Parish</h4>
                        <p className="text-muted-foreground text-sm">
                          Active member contributing to leadership, charity events, and social initiatives.
                        </p>
                      </div>
                    </motion.li>
                    {/* ... other community items ... */}
                    <motion.li
                      variants={timelineItemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="w-3 h-3 mt-2 rounded-full bg-accent"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Rotract Club of SLIIT NorthernUNI</h4>
                        <p className="text-muted-foreground text-sm">
                          Collaborated in social initiatives and build projects.
                        </p>
                      </div>
                    </motion.li>
                     <motion.li
                      variants={timelineItemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="w-3 h-3 mt-2 rounded-full bg-accent"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Yarl Salesforce ohana</h4>
                        <p className="text-muted-foreground text-sm">
                          Collaborated in tech meetups and hackathons to share knowledge and build projects.
                        </p>
                      </div>
                    </motion.li>
                     <motion.li
                      variants={timelineItemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="w-3 h-3 mt-2 rounded-full bg-accent"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Sirakugal Amayam</h4>
                        <p className="text-muted-foreground text-sm">
                          Participated in environmental campaigns and sustainable development programs.
                        </p>
                      </div>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};