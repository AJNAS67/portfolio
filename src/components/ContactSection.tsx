import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration ready
    console.log('Form submitted:', form);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4 mx-auto" />
          <p className="text-muted-foreground text-center mb-10">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="magnetic-btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
