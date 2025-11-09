import { motion } from 'framer-motion';
// ✨ FIXED: Importing the named export
import { GlassCard } from './GlassCard';
import { useState } from 'react';
// ✨ UPDATED: Removed 'Award' icon as it's no longer needed
import { Mail, Github, Linkedin } from 'lucide-react';

// ✨ REMOVED: The 'certifications' array is now gone.

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/thirugnanam-venujan' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/kt-venujan' },
  { name: 'Email', icon: Mail, url: 'mailto:venuthiru185@gmail.com' },
];

// ✨ REMOVED: The 'listParentVariants' and 'listItemVariants' are also gone.

export const AchievementsContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="min-h-screen py-20 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          {/* ✨ UPDATED: Title changed */}
          Get In Touch
        </motion.h2>

        {/* ✨ UPDATED: Grid layout removed, centered the form directly */}
        <div className="flex justify-center">
          
          {/* ✨ REMOVED: Column 1 (Achievements) is gone. */}

          {/* ✨ UPDATED: Contact Form is now centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            // ✨ This centers the card perfectly
            className="w-full max-w-lg" 
          >
            <GlassCard>
              <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Contact Me 💬</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Send Message 🚀
                </motion.button>
              </form>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px hsl(var(--accent) / 0.5)',
                    }}
                    className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/30 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};