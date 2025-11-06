import { GlassCard } from './GlassCard';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}

export const ProjectCard = ({ title, description, tags, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 10, rotateY: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 5, rotateY: -2 }}
      viewport={{ once: true }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{
        y: -10,
        rotateX: 8,
        rotateY: 3,
        scale: 1.02,
        transition: { 
          type: 'spring',
          stiffness: 300,
          damping: 15
        },
      }}
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className="h-full"
    >
      <GlassCard className="group h-full">
        <motion.div className="space-y-4">
        <div
          className="w-full h-48 rounded-xl bg-gradient-to-br from-muted to-secondary mb-4 overflow-hidden relative"
          style={{
            boxShadow: 'inset 0 0 20px rgba(0, 191, 255, 0.1)',
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.1 * index }}
              className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/20"
              style={{
                boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.05)',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

          {/* Demo Button */}
          <motion.div className="flex gap-3 pt-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="flex-1 px-4 py-2 rounded-full bg-primary/10 text-accent border border-accent/30 text-center font-medium hover:bg-primary/20 transition-colors"
              style={{
                boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.1)',
              }}
            >
              Demo
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="flex-1 px-4 py-2 rounded-full bg-secondary/50 text-foreground border border-border/30 text-center font-medium hover:bg-secondary/70 transition-colors"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
};
