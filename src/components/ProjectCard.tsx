import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  delay: number;
  imageUrl: string;
  githubUrl?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 12, delay },
  }),
};

export const ProjectCard = ({ title, description, tags, delay, imageUrl, githubUrl }: ProjectCardProps) => {
  const cardClassName =
    'group block h-full overflow-hidden rounded-lg bg-secondary/60 shadow-lg transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

  const content = (
    <>
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/25 via-secondary to-background">
        <img
          src={imageUrl}
          alt={`${title} project preview`}
          width="640"
          height="360"
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {githubUrl && (
          <div className="absolute right-4 top-4 rounded-full bg-black/50 p-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ExternalLink size={20} className="text-white/90" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">{title}</h3>
        <div className="relative h-20 overflow-hidden">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="absolute bottom-0 left-0 h-6 w-full bg-gradient-to-t from-secondary/60 to-transparent" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-accent/20 px-2 py-1 text-xs font-medium text-accent transition-colors duration-300 group-hover:bg-accent/30">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      className="h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
    >
      {githubUrl ? (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={cardClassName}>{content}</a>
      ) : (
        <article className={cardClassName}>{content}</article>
      )}
    </motion.div>
  );
};
