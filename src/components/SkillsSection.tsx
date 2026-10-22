import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'data' | 'cloud';
  level: number;
  highlight: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React & Vite', category: 'frontend', level: 92, highlight: 'TanStack Query, Hooks, Leaflet GIS' },
  { name: 'Angular', category: 'frontend', level: 88, highlight: 'NgRx, RxJS, Angular Material' },
  { name: 'TypeScript', category: 'frontend', level: 90, highlight: 'Strict Typing, Generic Schemas' },
  { name: 'React Native', category: 'frontend', level: 82, highlight: 'Expo SDK, Offline SQLite, Zustand' },
  { name: 'Tailwind CSS', category: 'frontend', level: 90, highlight: 'Glassmorphism, Responsive UI' },

  // Backend & AI
  { name: 'Node.js & Express', category: 'backend', level: 90, highlight: 'REST APIs, Middleware, SSE' },
  { name: 'NestJS', category: 'backend', level: 85, highlight: 'API Gateways, Microservices, RBAC' },
  { name: 'FastAPI (Python)', category: 'backend', level: 84, highlight: 'High-speed Async APIs, Workers' },
  { name: 'AI & MCP Gateways', category: 'backend', level: 85, highlight: 'Model Context Protocol, JSON-RPC, Zod' },

  // Databases & GIS
  { name: 'PostgreSQL', category: 'data', level: 85, highlight: 'ACID Transactions, Relational Schemas' },
  { name: 'Redis', category: 'data', level: 80, highlight: 'Arq Background Workers, Fast Caching' },
  { name: 'GIS Spatial Data', category: 'data', level: 84, highlight: 'GeoPandas, Pyogrio, Apache Arrow' },
  { name: 'MongoDB', category: 'data', level: 82, highlight: 'Document Stores, Aggregations' },
  { name: 'SQLite', category: 'data', level: 80, highlight: '100% Offline-First Local Storage' },

  // Security & Cloud
  { name: 'SuperTokens & Auth', category: 'cloud', level: 86, highlight: 'K-SWIFT SSO, Multi-Role RBAC, JWT' },
  { name: 'Docker & Microservices', category: 'cloud', level: 82, highlight: 'Containerization, Nginx, Multi-Worker' },
];

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & AI' },
  { id: 'data', label: 'Databases & GIS' },
  { id: 'cloud', label: 'Security & Cloud' },
] as const;

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
                <span className="text-gradient">Skills & Technologies</span>
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-6" />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(var(--primary)/0.3)]'
                      : 'bg-secondary/30 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, i) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="glass-card-hover p-5 group cursor-default flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{skill.highlight}</p>
              </div>

              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-glow-secondary"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
