import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin, Github, Linkedin, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('submitting');

    // Simulate sending dispatch
    setTimeout(() => {
      setStatus('success');
      setSubmittedData({ name: form.name, email: form.email });
      toast.success('Message sent successfully!', {
        description: `Thank you ${form.name}, I will respond to ${form.email} within 24 hours.`,
      });
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  const handleReset = () => {
    setStatus('idle');
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4 mx-auto" />
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto text-base">
            Have a project, job opportunity, or enterprise system to discuss? Let's connect and build something impactful.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 glass-card p-6 sm:p-8 space-y-6"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Direct Contact</h3>
              <p className="text-sm text-muted-foreground">
                Feel free to email or call directly. I typically respond within a few hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:ajnaskp67@gmail.com"
                className="flex items-center gap-3.5 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 text-foreground transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] text-muted-foreground uppercase font-medium">Email</p>
                  <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    ajnaskp67@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919633752203"
                className="flex items-center gap-3.5 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 text-foreground transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase font-medium">Phone</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    +91-963-375-2203
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-lg bg-secondary/30 text-foreground">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase font-medium">Location</p>
                  <p className="text-sm font-medium text-foreground">
                    Malappuram / Kochi, Kerala
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40">
              <p className="text-xs text-muted-foreground mb-3">Connect on Professional Profiles</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ajnas67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-border/60 hover:border-primary/50 text-xs font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ajnas-muhammed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-border/60 hover:border-primary/50 text-xs font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form / Confirmation Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="glass-card p-8 sm:p-10 text-center space-y-6 border-emerald-500/30">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 size={36} className="animate-pulse" />
                </div>

                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-block mb-3">
                    Message Delivered
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Thank You, {submittedData?.name}!
                  </h3>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-md mx-auto">
                    Your message has been received successfully. I have noted your contact email (
                    <strong className="text-foreground">{submittedData?.email}</strong>) and will get back to you within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-secondary/30 border border-border/40 text-xs text-muted-foreground max-w-md mx-auto text-left">
                  <p className="font-medium text-foreground mb-1">Need an immediate response?</p>
                  <p>You can also reach me directly at <a href="mailto:ajnaskp67@gmail.com" className="text-primary hover:underline">ajnaskp67@gmail.com</a> or call <a href="tel:+919633752203" className="text-primary hover:underline">+91-963-375-2203</a>.</p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium transition-colors"
                  >
                    Send Another Message
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label className="text-sm text-foreground/90 font-medium mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all text-sm"
                    placeholder="e.g. John Doe"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div>
                  <label className="text-sm text-foreground/90 font-medium mb-1.5 block">Your Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all text-sm"
                    placeholder="john@example.com"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div>
                  <label className="text-sm text-foreground/90 font-medium mb-1.5 block">Your Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all resize-none text-sm"
                    placeholder="Tell me about your project, team, or opportunity..."
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="magnetic-btn w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
