import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import heroImage from '@/assets/hero-profile.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      <div className="bg-gradient-mesh absolute inset-0 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6"
            >
              Software Engineer · Available for opportunities
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Architecting </span>
              <span className="text-gradient">Enterprise & AI</span>
              <br />
              <span className="text-foreground">Digital Platforms</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Software Engineer at <span className="text-foreground font-medium">ULTS Global</span> with 4 years of experience delivering full-stack enterprise web applications, government e-governance platforms (KINFRA), high-performance GIS data pipelines (~28× speedup), and autonomous AI/MCP gateways.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground font-medium transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/ajnas67"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border/60 hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                title="GitHub: ajnas67"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/ajnas-muhammed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border/60 hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                title="LinkedIn: ajnas-muhammed"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden neon-border">
                <img
                  src={heroImage}
                  alt="Muhammed Ajnas KP"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
