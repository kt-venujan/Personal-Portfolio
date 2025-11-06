import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { useState } from 'react';
import { Award, Mail, Github, Linkedin } from 'lucide-react';

const certifications = [
  { name: 'Cisco Certified', icon: Award },
  { name: 'AWS Certified', icon: Award },
  { name: 'React Expert', icon: Award },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'GitHub', icon: Github, url: '#' },
  { name: 'Email', icon: Mail, url: 'mailto:your@email.com' },
];

export const AchievementsContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Achievements & Contact
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <GlassCard>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Certifications</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                  className="w-32 h-32 rounded-full bg-secondary/50 backdrop-blur-sm border-2 border-accent/30 flex flex-col items-center justify-center cursor-pointer"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(0, 191, 255, 0.2), 0 0 30px rgba(0, 191, 255, 0.1)',
                  }}
                >
                  <cert.icon className="w-12 h-12 text-accent mb-2" />
                  <p className="text-xs text-center text-foreground font-medium px-2">
                    {cert.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Contact Form */}
          <GlassCard>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Get In Touch</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  style={{
                    boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.05)',
                  }}
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  style={{
                    boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.05)',
                  }}
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <motion.textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  style={{
                    boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.05)',
                  }}
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all"
                style={{
                  boxShadow: '0 0 20px hsl(var(--accent) / 0.3)',
                }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
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
        </div>
      </div>
    </section>
  );
};
