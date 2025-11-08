import { motion, Variants } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Award } from 'lucide-react'; // ✨ ExternalLink import is GONE!

// --- 1. Your Certificate Data (No Change) ---
const certificates = [
  {
    id: 1,
    title: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC²',
    url: 'https://www.isc2.org/Certifications/CC', // (This URL is no longer used)
  },
  {
    id: 2,
    title: 'Cyber Threat Management',
    issuer: 'Cisco Networking Academy',
    url: 'https://www.netacad.com/',
  },
  // ... other certificates
];

// --- 2. Animation Variants (No Change) ---
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

// --- ✨ 3. HELPER COMPONENT REMOVED ---
// We don't need the helper component anymore, 
// so I've put the code back inside the main component.

// --- 4. The Main Component (Now Simplified) ---
export const Certificates = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section Header (No Change) --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-foreground"
        >
          Certificates & Badges
        </motion.h2>

        {/* --- Certificates Grid --- */}
        <motion.div
          variants={gridParentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* ✨ --- SIMPLIFIED LOOP --- ✨
              No more 'a' tags or link checks. 
              Every single card is now a 'motion.div'.
          */}
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={certCardVariant}
              whileHover="hover"
              className="h-full"
            >
              {/* We just render the card content directly! */}
              <GlassCard className="h-full p-6 flex flex-col group transition-transform duration-300 relative">
                
                {/* --- ✨ ExternalLink icon is GONE! --- */}

                {/* --- Icon (with hover animations) --- */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-5 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12 group-hover:bg-accent/30">
                  <Award size={28} />
                </div>

                {/* --- Text Content --- */}
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};