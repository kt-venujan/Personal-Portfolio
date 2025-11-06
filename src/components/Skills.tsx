import { motion } from 'framer-motion';
import { useState } from 'react';

const technicalSkills = [
  { name: 'Java', level: 90 },
  { name: 'PHP', level: 85 },
  { name: 'Laravel', level: 88 },
  { name: 'React', level: 92 },
  { name: 'TypeScript', level: 87 },
  { name: 'SQL', level: 85 },
];

const softSkills = [
  'Teamwork',
  'Communication',
  'Problem Solving',
  'Adaptability',
  'Time Management',
  'Leadership',
];

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Skills & Expertise
        </motion.h2>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Technical Skills</h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            layout
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, z: 0 }}
                whileInView={{ opacity: 1, scale: 1, z: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.1, 
                  z: 50,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative aspect-square rounded-3xl bg-card/60 backdrop-blur-xl border border-border/30 p-6 cursor-pointer"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                  boxShadow: hoveredSkill === skill.name 
                    ? 'inset 0 0 30px rgba(0, 191, 255, 0.3), 0 10px 40px rgba(0, 0, 0, 0.5)'
                    : 'inset 0 0 10px rgba(0, 191, 255, 0.1)',
                }}
              >
                <div className="h-full flex flex-col items-center justify-center relative z-10">
                  <h4 className="text-xl font-bold text-foreground mb-3">{skill.name}</h4>
                  <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ 
                        delay: index * 0.1 + 0.3, 
                        duration: 0.8,
                        opacity: {
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }
                      }}
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--neon-blue-glow)))',
                        boxShadow: '0 0 10px hsl(var(--neon-blue) / 0.5)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Soft Skills</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { 
                    rotate: { duration: 0.5, ease: 'easeInOut' }
                  }
                }}
                className="px-6 py-3 rounded-full bg-secondary/40 backdrop-blur-sm border border-border/20 text-muted-foreground font-medium hover:text-foreground transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
