import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Kinfra Asset Management',
    tag: 'Current Project',
    description: 'Comprehensive asset tracking and management platform with scalable architecture and real-time dashboards for enterprise-level asset oversight.',
    features: ['Asset Tracking', 'Management Dashboards', 'Scalable Architecture'],
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Smart School Management',
    tag: 'Full Stack',
    description: 'Intelligent school management system with real-time tracking, integrated payment processing, and comprehensive admin dashboard capabilities.',
    features: ['Real-time Tracking', 'Integrated Payments', 'Admin Dashboards'],
    tech: ['Angular', 'NestJS', 'PostgreSQL'],
  },
  {
    title: 'E-learning Platform',
    tag: 'Full Stack',
    description: 'Robust e-learning platform featuring JWT authentication, role-based access control, and real-time communication channels for seamless learning.',
    features: ['JWT Authentication', 'Role-based System', 'Real-time Communication'],
    tech: ['React', 'Express', 'MongoDB'],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-card-hover p-7 flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
          {project.tag}
        </span>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.features.map((f) => (
          <span key={f} className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground">
            {f}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
        <div className="flex gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs text-muted-foreground">{t}</span>
          ))}
        </div>
        <button className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group/btn">
          View Details
          <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
