import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'AI-Powered Dashboard',
    description: 'A modern analytics platform with real-time data visualization and predictive insights.',
    tags: ['React', 'TypeScript', 'AI', 'D3.js'],
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with seamless payment integration and inventory management.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracker with personalized workout plans and progress tracking.',
    tags: ['React Native', 'Firebase', 'ML Kit'],
  },
];

export const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
