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
    <GlassCard hoverable delay={delay} className="group h-full">
      <motion.div
        className="space-y-4"
        style={{ perspective: '1000px' }}
      >
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
      </motion.div>
    </GlassCard>
  );
};
