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
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      return;
    }

    emailjs
      .send(
        'service_vajr6a7',
        'template_tp5j40v',
        {
          name,
          email,
          message,
          title: 'Portfolio Contact',
        },
        'Ykt6d70c9cOPi-YC6'
      )
      .then(() => {
        setStatus('success');
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' }); // ✅ clear form
        setTimeout(() => setShowToast(false), 4500);       // auto-hide
      })
      .catch(() => {
        setStatus('error');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4500);
      });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 scroll-mt-24">
      {/* 🔔 Floating Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl backdrop-blur-xl border 
              shadow-lg flex items-center gap-3 w-[clamp(280px,40vw,520px)]
              ${
                status === 'success'
                  ? 'bg-gradient-to-r from-green-500/15 to-green-600/10 border-green-400/40 shadow-green-500/20'
                  : 'bg-gradient-to-r from-red-500/15 to-red-600/10 border-red-400/40 shadow-red-500/20'
              }`}
        >
          {status === 'success' ? (
            <CheckCircle2 className="w-7 h-7 text-green-400" />
          ) : (
            <XCircle className="w-7 h-7 text-red-400" />
          )}
          <div className="flex-1">
            <p className="font-semibold text-sm md:text-base text-white">
              {status === 'success'
                ? 'Message sent successfully! 🚀'
                : 'Please fill all fields or try again.'}
            </p>
            <p className="text-[11px] md:text-xs text-white/60 mt-1">
              {status === 'success'
                ? 'I will get back to you as soon as possible.'
                : 'Validation failed or network issue.'}
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            Close
          </button>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Let’s Connect
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
                  className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all
                             hover:bg-primary/90"
                >
                  Send Message 🚀
                </motion.button>
              </form>

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
