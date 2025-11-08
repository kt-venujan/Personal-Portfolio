import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Define the types (No Change)
type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  delay: number;
  imageUrl: string;
  githubUrl: string;
};

// --- The Animation Variant ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  // ✨ --- 1. BUG FIX --- ✨
  // I made 'visible' a function so it can use the 'delay' from the 'custom' prop.
  // Your 'delay' wasn't actually working before!
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
      delay: delay, // Now the delay is applied!
    },
  }),
};

export const ProjectCard = ({
  title,
  description,
  tags,
  delay,
  imageUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      // ✨ --- 2. NEW HOVER EFFECT (Card Shadow) --- ✨
      // Added shadow-xl and a subtle accent shadow on hover
      className="block rounded-lg overflow-hidden shadow-lg h-full bg-secondary/60 group transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/20"
      
      // Animation props (No Change)
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay} // This 'delay' is now passed to the 'visible' variant
      
      // Hover animation (No Change)
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      
      {/* --- Image Section (No Change) --- */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        {/* --- ✨ 3. NEW HOVER EFFECT (Icon Pop) --- ✨
            It now starts at 90% size and "pops" to 100% on hover.
        */}
        <div className="absolute top-4 right-4 p-1.5 bg-black/40 rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
          <ExternalLink size={20} className="text-white/90" />
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-6">
        {/* --- ✨ 4. NEW HOVER EFFECT (Title Color) --- ✨
            The title now changes to your accent color.
        */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        {/* --- Description Box (No Change) --- */}
        <div className="h-20 relative overflow-hidden">
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-secondary/60 to-transparent" />
        </div>
        
        {/* --- Tags Section --- */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              // --- ✨ 5. NEW HOVER EFFECT (Tags Brighten) --- ✨
              // The tags get a little brighter and pop
              className="text-xs font-medium bg-accent/20 text-accent px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-accent/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};