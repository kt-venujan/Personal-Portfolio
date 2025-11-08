import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GridItemType } from './GlassHoverGrid';
import { Tag } from 'lucide-react';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const overlayVariants: Variants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const contentVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut', delay: 0.1 } },
};

interface GridCardProps {
  item: GridItemType;
}

export const GridCard: React.FC<GridCardProps> = ({ item }) => (
  <motion.div
    variants={cardVariants}
    className="relative h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
    initial="initial"
    whileHover="hover"
  >
    <img
      src={item.imageUrl}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: 'grayscale(30%) brightness(0.9)', transition: 'filter 0.3s ease-out' }}
    />
    <motion.div className="absolute inset-0 bg-black/30" variants={overlayVariants} />
    <motion.div
      className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm border-t-2 border-white/20"
      variants={overlayVariants}
    >
      <motion.div variants={contentVariants}>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <p className="text-xs text-white/70 mb-2">{item.date}</p>
        <p className="text-sm text-white/90 mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 bg-white/20 text-white text-xs px-2 py-1 rounded-full">
              <Tag size={12} /> {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
