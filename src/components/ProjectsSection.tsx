import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Github, Play, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Project {
  title: string;
  tag: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl?: string;
  videoUrl?: string;
  story?: {
    overview: string;
    highlights: string[];
    techDetails?: { name: string; role: string }[];
  };
}

const projects: Project[] = [
  {
    title: 'MoneyFlow — Smart Money Tracker',
    tag: 'React Native · Offline First',
    description:
      'A privacy-focused mobile finance application engineered with React Native and Expo. Delivers real-time net worth tracking, interactive hardware-accelerated trend charts, dynamic budget limits, and savings vaults with a 100% offline-first SQLite architecture.',
    features: ['100% Offline SQLite', 'Interactive SVG Charts', 'Biometric Security', 'Smart Budgets & Vaults'],
    tech: ['React Native', 'Expo', 'SQLite', 'TypeScript', 'Zustand', 'NativeWind'],
    githubUrl: 'https://github.com/AJNAS67/smart-money-tracker',
    videoUrl: 'https://drive.google.com/file/d/1c8zEL5uCepPRRxwRXAf1tRuOnB1Bg-Q7/view?usp=sharing',
    story: {
      overview:
        'Managing personal finances across multiple bank accounts, cash, and credit cards often means compromising either on user experience or data privacy. Most commercial apps require cloud syncing and third-party bank logins. MoneyFlow was built to combine the polish of modern fintech apps with an uncompromising 100% offline-first architecture—ensuring all financial data stays strictly on-device with zero external tracking.',
      highlights: [
        'Unified Net Worth & Account Hub: Tracks balances across bank accounts, cash, and credit cards with payment due date alerts and privacy eye masking.',
        'Interactive Data Visualizations: Custom SVG donut and dual-curve Bezier trend charts spotlighting category expenses and 6-month cashflow patterns.',
        'Smart Budgets & Goal Vaults: Visual progress rings and dynamic threshold warnings (80% / 100%) alongside goal-oriented savings vaults.',
        'Hardware-Level Security: Protected by custom PIN authentication, biometric login (Face ID / Fingerprint), and local encrypted storage via SecureStore.',
      ],
      techDetails: [
        { name: 'React Native (0.86) & Expo (SDK 57)', role: 'Cross-platform mobile foundation enabling high native performance and fluid 60fps interactions.' },
        { name: 'SQLite (expo-sqlite)', role: 'Powers the offline-first database using the repository pattern for fast, persistent, and local CRUD operations.' },
        { name: 'react-native-svg & Skia', role: 'Renders hardware-accelerated Bezier spline curves, area fills, and interactive category donut charts.' },
        { name: 'TypeScript & Zustand', role: 'Ensures strict type safety across schemas with lightweight, reactive global state management.' },
        { name: 'Expo Local Authentication & Secure Store', role: 'Provides biometric login (Face ID/Fingerprint) and encrypted local storage for PIN codes.' },
        { name: 'NativeWind (Tailwind CSS)', role: 'Delivers a modern, utility-driven design system with sleek dark-mode glassmorphic aesthetics.' },
      ],
    },
  },
  {
    title: 'Kinfra Asset Management',
    tag: 'Enterprise · Current Project',
    description:
      'Comprehensive asset tracking and management platform with scalable architecture and real-time dashboards for enterprise-level asset oversight.',
    features: ['Asset Tracking', 'Management Dashboards', 'Scalable Architecture'],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    story: {
      overview:
        'Developed for enterprise asset oversight, Kinfra Asset Management provides comprehensive lifecycle tracking of physical and digital assets, reducing operational overhead and improving allocation visibility.',
      highlights: [
        'Enterprise asset cataloging with real-time status telemetry and lifecycle monitoring.',
        'Interactive administrative dashboards with deep analytics, reporting, and maintenance triggers.',
        'Role-based access control (RBAC) ensuring fine-grained data governance across departments.',
      ],
      techDetails: [
        { name: 'React', role: 'Modern, modular frontend delivering responsive dashboard controls.' },
        { name: 'Node.js & Express', role: 'Robust RESTful API services handling complex enterprise queries.' },
        { name: 'MongoDB', role: 'Flexible document storage for varied asset schemas and operational logs.' },
      ],
    },
  },
  {
    title: 'Smart School Management',
    tag: 'Full Stack System',
    description:
      'Intelligent school management system with real-time tracking, integrated payment processing, and comprehensive admin dashboard capabilities.',
    features: ['Real-time Tracking', 'Integrated Payments', 'Admin Dashboards'],
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'TypeScript'],
    story: {
      overview:
        'A unified platform connecting educational institutions, instructors, and parents. Features automated attendance, academic grading portals, and secure fee payments.',
      highlights: [
        'Real-time student attendance and location notifications.',
        'Secure integrated payment gateway processing student fee disbursements.',
        'Modular dashboard architecture catering to teachers, students, and administrators.',
      ],
      techDetails: [
        { name: 'Angular', role: 'Structured enterprise frontend with reactive forms and RxJS state.' },
        { name: 'NestJS', role: 'Scalable, decorator-driven backend architecture with strong modularity.' },
        { name: 'PostgreSQL', role: 'Relational database ensuring transactional integrity for financial and grade records.' },
      ],
    },
  },
  {
    title: 'E-learning Platform',
    tag: 'Full Stack Platform',
    description:
      'Robust e-learning platform featuring JWT authentication, role-based access control, and real-time communication channels for seamless learning.',
    features: ['JWT Authentication', 'Role-based System', 'Real-time Communication'],
    tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
    story: {
      overview:
        'An engaging educational hub designed to deliver digital course content, interactive assessments, and seamless instructor-learner collaboration.',
      highlights: [
        'Secure multi-tier JWT authentication with distinct student, instructor, and admin tiers.',
        'Real-time discussion boards and instant messaging channels.',
        'Modular assignment submission, grading, and automated progress tracking.',
      ],
      techDetails: [
        { name: 'React', role: 'Interactive user interface with fluid lesson navigation and video playback.' },
        { name: 'Socket.io', role: 'Real-time WebSocket protocol for live discussions and notifications.' },
        { name: 'Express & MongoDB', role: 'Scalable backend API with document storage for courses and lessons.' },
      ],
    },
  },
];

const ProjectCard = ({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}) => {
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
      transition={{ delay: index * 0.12, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-card-hover p-7 flex flex-col h-full cursor-pointer group"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
          {project.tag}
        </span>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="w-8 h-8 rounded-lg border border-border/50 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              title="GitHub Repository"
            >
              <Github size={15} />
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Demo Video"
              className="h-8 px-2.5 rounded-lg border border-primary/30 bg-primary/10 flex items-center gap-1.5 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              title="Watch Demo Video"
            >
              <Play size={13} className="fill-current" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-3 sm:line-clamp-none">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.features.map((f) => (
          <span key={f} className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground">
            {f}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
        <div className="flex flex-wrap gap-1.5 max-w-[65%]">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-secondary/40 text-muted-foreground font-mono">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[11px] px-1.5 py-0.5 text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group/btn hover:text-primary/80 transition-colors"
        >
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Case Study / Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border/60 p-6 sm:p-8">
          {selectedProject && (
            <div>
              {/* Header tags and quick action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pr-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {selectedProject.tag}
                </span>

                <div className="flex items-center gap-2.5">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 bg-secondary/40 hover:bg-secondary text-foreground text-xs font-medium transition-colors"
                    >
                      <Github size={14} />
                      GitHub Repo
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  )}
                  {selectedProject.videoUrl && (
                    <a
                      href={selectedProject.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <Play size={13} className="fill-current" />
                      Watch Demo
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  )}
                </div>
              </div>

              <DialogHeader className="text-left mb-6">
                <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* Story / Vision Section */}
              {selectedProject.story?.overview && (
                <div className="mb-6 rounded-xl bg-secondary/30 border border-border/40 p-4 sm:p-5">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-2 flex items-center gap-1.5">
                    <Sparkles size={14} /> The Story & Vision
                  </h4>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {selectedProject.story.overview}
                  </p>
                </div>
              )}

              {/* Key Capabilities */}
              {selectedProject.story?.highlights && (
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                    What It Does & Key Capabilities
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.story.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Used & Why */}
              {selectedProject.story?.techDetails && (
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                    Technologies Used & Architectural Role
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {selectedProject.story.techDetails.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-secondary/20 border border-border/30">
                        <div className="font-medium text-xs text-primary mb-1">{item.name}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed">{item.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.videoUrl && (
                    <a
                      href={selectedProject.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 hover:border-primary text-primary text-sm font-medium transition-colors"
                    >
                      <Play size={15} className="fill-current" />
                      Watch Demo Video
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
