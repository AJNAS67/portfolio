import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="glass-card p-8 md:p-10 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a <span className="text-foreground font-semibold">Software Engineer</span> at{' '}
              <span className="text-primary font-medium">UL Technology Solutions (ULTS), Kozhikode</span> with{' '}
              <span className="text-foreground font-semibold">4 years of experience</span> designing and delivering enterprise web applications across the full stack.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Currently driving core modules of the <span className="text-foreground font-medium">KINFRA Asset Management System</span> — an enterprise e-governance platform digitizing industrial land allocation, lease deed execution, Leaflet GIS plot mapping, and reverse-proxy microservices with SuperTokens authentication and K-SWIFT SSO.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Beyond enterprise web platforms, I architect autonomous <span className="text-primary font-medium">AI / Model Context Protocol (MCP) gateways</span> connecting AI agents with distributed microservices, and engineered high-performance <span className="text-foreground font-medium">GIS spatial pipelines</span> that reduced data ingestion from 7+ minutes to 16 seconds (~28× speedup).
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '12+', label: 'Delivered Projects' },
                { value: '28×', label: 'GIS Data Speedup' },
                { value: '15+', label: 'Technologies & Tools' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/30 border border-border/30"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient font-display">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 border-t border-border/30 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span><strong className="text-foreground">Education:</strong> B.Tech in Electronics & Communication Engineering — APJ Abdul Kalam Technological University (GPA: 7.0)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span><strong className="text-foreground">Location:</strong> Malappuram / Kozhikode, Kerala, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
