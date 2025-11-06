import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  delay?: number;
}

export const GlassCard = ({ children, className, hoverable = false, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay,
      }}
      whileHover={
        hoverable
          ? {
              scale: 1.02,
              rotateX: 2,
              rotateY: 2,
              transition: { duration: 0.2 },
            }
          : {}
      }
      className={cn(
        'relative rounded-[1.5rem] p-8',
        'bg-card/60 backdrop-blur-xl',
        'border border-border/30',
        'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
        hoverable && 'cursor-pointer transition-all',
        className
      )}
      style={{
        boxShadow: 'inset 0 1px 0 0 rgba(238, 238, 238, 0.05), 0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }}
    >
      {children}
    </motion.div>
  );
};
