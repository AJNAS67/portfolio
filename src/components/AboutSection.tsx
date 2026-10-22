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

          <div className="glass-card p-8 md:p-10">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I'm a Developer Analyst at <span className="text-foreground font-medium">ULTS Global, Calicut</span>, currently building the 
              <span className="text-primary font-medium"> Kinfra Asset Management</span> platform — a comprehensive system for asset tracking, 
              management dashboards, and scalable enterprise architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              With over 3 years of hands-on experience in full-stack and mobile development, I specialize in building 
              real-time systems, integrated payment solutions, and high-performance applications using 
              React, React Native, Node.js, NestJS, and MongoDB.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Delivered' },
                { value: '8+', label: 'Technologies' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 rounded-lg bg-secondary/30"
                >
                  <div className="text-3xl font-bold text-gradient font-display">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
