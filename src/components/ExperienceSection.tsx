import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'ULTS Global',
    role: 'Developer Analyst',
    period: '2024 – Present',
    location: 'Calicut, Kerala',
    description: 'Leading development of Kinfra Asset Management platform. Building scalable full-stack applications with React, Node.js, and MongoDB.',
  },
  {
    company: 'Akira Software Solutions',
    role: 'Angular Developer',
    period: '2022 – 2024',
    location: 'Kerala, India',
    description: 'Developed enterprise-level Angular applications with complex UI interactions, state management, and REST API integrations.',
  },
  {
    company: 'Infoline Technologies',
    role: 'Full Stack Developer',
    period: '2021 – 2022',
    location: 'Kerala, India',
    description: 'Built end-to-end web applications using React, Express, and MongoDB. Implemented authentication, real-time features, and payment systems.',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px timeline-line hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={16} className="text-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card-hover p-6 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-foreground text-lg">{exp.company}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-1">{exp.role}</p>
                  <p className="text-muted-foreground text-xs mb-3">{exp.location}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
