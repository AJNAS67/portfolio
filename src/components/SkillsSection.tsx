import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'React Native', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 85 },
  { name: 'Express', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'NestJS', level: 75 },
  { name: 'Angular', level: 70 },
  { name: 'Firebase', level: 70 },
  { name: 'PostgreSQL', level: 65 },
  { name: 'SQLite', level: 75 },
  { name: 'Three.js', level: 40 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card-hover p-6 group cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-glow-secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
