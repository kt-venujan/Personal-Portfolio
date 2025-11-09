import { motion, Variants } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Award } from 'lucide-react';

// --- 💎 1. Your Updated Certificate Data ---
const certificates = [
  {
    id: 1,
    title: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC²',
  },
  {
    id: 2,
    title: 'Cyber Threat Management',
    issuer: 'Cisco Networking Academy',
  },
  {
    id: 3,
    title: 'Salesforce AI Associate',
    issuer: 'Salesforce',
  },
  {
    id: 4,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
  },
  {
    id: 5,
    title: 'Google IT Support Fundamentals',
    issuer: 'Google Career Certificates',
  },
  {
    id: 6,
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
  },
];

// --- 2. Animation Variants (Same as before) ---
const gridParentVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const certCardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
  hover: {
    scale: 1.03,
    y: -8,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};

// --- 3. The Main Certificates Component ---
export const Certificates = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-foreground"
        >
          Certificates & Badges
        </motion.h2>

        {/* --- Grid --- */}
        <motion.div
          variants={gridParentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={certCardVariant}
              whileHover="hover"
              className="h-full"
            >
              <GlassCard className="h-full p-6 flex flex-col group transition-transform duration-300 relative">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-5 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12 group-hover:bg-accent/30">
                  <Award size={28} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {cert.issuer}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
