import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com'; // ✨ Add this package
import { GlassCard } from './GlassCard';
import { Mail, Github, Linkedin, CheckCircle2, XCircle } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/thirugnanam-venujan' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/kt-venujan' },
  { name: 'Email', icon: Mail, url: 'mailto:venuthiru185@gmail.com' },
];

export const AchievementsContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // success or error

  const handleSubmit = (e) => {
  e.preventDefault();

  const name = formData.name.trim();
  const email = formData.email.trim();
  const message = formData.message.trim();
  const title = "Portfolio Contact"; // Or get dynamically

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return;
  }

  emailjs.send(
  "service_vajr6a7",    // Your Service ID
  "template_tp5j40v",    // Your Template ID
  {
    name: formData.name.trim(),     // {{name}}
    email: formData.email.trim(),   // {{email}}
    message: formData.message.trim(), // {{message}}
    title: "Portfolio Contact"      // {{title}} for subject
  },
  "Ykt6d70c9cOPi-YC6"          // Your Public Key
)
.then(() => alert("Message sent successfully! 🚀"))
.catch((err) => console.error("EmailJS error:", err));


  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Let’s Connect 🌐
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg"
          >
            <GlassCard>
              <h3 className="text-3xl font-bold mb-8 text-center">Contact Me 💬</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
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

              {/* ✅ Animated Status Feedback */}
              <div className="mt-6 text-center">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-green-500"
                  >
                    <CheckCircle2 className="w-5 h-5" /> Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-red-500"
                  >
                    <XCircle className="w-5 h-5" /> Please fill all fields or try again.
                  </motion.div>
                )}
              </div>

              {/* 🌐 Social Links */}
              <div className="flex justify-center gap-4 mt-10">
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
