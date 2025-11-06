import { motion, useScroll, useTransform } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { useRef } from 'react';

const skills = ['UI Design', 'Java', 'Real-World Solutions'];

export const AboutMe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative">
      <motion.div 
        className="max-w-7xl mx-auto"
        style={{ y, rotateX, perspective: '1000px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Me */}
          <GlassCard className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-foreground">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              </div>

              {/* Strength Bubbles */}
              <div className="flex flex-wrap gap-3 mt-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: index * 2,
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
              </div>
            </motion.div>
          </GlassCard>

          {/* Education */}
          <GlassCard className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-foreground">Education</h2>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-xl bg-secondary/30 border border-border/20"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Computer Science Degree
                  </h3>
                  <p className="text-muted-foreground">University Name</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">2018 - 2022</p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-xl bg-secondary/30 border border-border/20"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Full Stack Development
                  </h3>
                  <p className="text-muted-foreground">Bootcamp / Certification</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">2022</p>
                </motion.div>
              </div>
            </motion.div>
          </GlassCard>
        </div>
      </motion.div>
    </section>
  );
};
