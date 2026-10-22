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
  category: 'enterprise' | 'ai-gis' | 'mobile';
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
    title: 'AI / MCP Gateway Server for Microservices Integration',
    category: 'ai-gis',
    tag: 'Model Context Protocol · AI Agents',
    description:
      'Unified Model Context Protocol (MCP) gateway connecting autonomous AI agents with distributed candidate and job-vacancy microservices through structured tool calls with stdio and SSE transports.',
    features: ['Unified MCP Gateway', 'stdio & Express/SSE Transports', 'Zod Schema Validation', 'Cloudflare Tunnel'],
    tech: ['Node.js', 'Express.js', 'MCP', 'Zod', 'JSON-RPC 2.0', 'SSE', 'Cloudflare Tunnel'],
    story: {
      overview:
        'Architected a production-grade MCP Gateway enabling AI agents to interact directly with distributed backend microservices. By implementing the Model Context Protocol, the gateway exposes structured candidate discovery and job-vacancy tool contracts with runtime validation.',
      highlights: [
        'Architected a unified MCP Gateway connecting AI agents with distributed candidate and job-vacancy microservices through structured tool calls.',
        'Implemented dual stdio/JSON-RPC and Express/Server-Sent Events (SSE) transports with robust error handling, request timeouts, and integration tests.',
        'Enforced strict runtime schema validation using Zod for deterministic agent tool parameter binding.',
        'Integrated Cloudflare Tunnel for secure remote exposure and seamless external agent pair-programming connectivity.',
      ],
      techDetails: [
        { name: 'Model Context Protocol (MCP)', role: 'Standardized open protocol for AI agent tool calls and dynamic resource context injection.' },
        { name: 'Node.js & Express.js', role: 'High-throughput async event loop powering persistent Server-Sent Events (SSE) connections.' },
        { name: 'Zod & JSON-RPC 2.0', role: 'Strict runtime contract validation and standardized RPC request/response handling.' },
        { name: 'Cloudflare Tunnel', role: 'Zero-trust ingress allowing secure external agent access without opening firewall ports.' },
      ],
    },
  },
  {
    title: 'IPMS Drishti — GIS Quality Control & Spatial Validation',
    category: 'ai-gis',
    tag: 'GIS Data Pipeline · ~28× Speedup',
    description:
      'High-performance geospatial data validation pipeline with 13-rule automated inspection. Reduced spatial data ingestion from 7+ minutes to 16 seconds (~28× faster) for 18,000+ spatial cadastral records.',
    features: ['13-Rule GIS Pipeline', '~28× Ingestion Speedup', 'Pyogrio & Apache Arrow', 'Redis/Arq Workers'],
    tech: ['Python', 'FastAPI', 'GeoPandas', 'Pyogrio', 'PyArrow', 'PostgreSQL', 'Redis', 'Arq', 'React', 'Docker'],
    story: {
      overview:
        'Designed an automated geospatial data validation pipeline for government cadastral surveys. The system cross-references spatial topology with administrative master data, detects geometry overlaps, and enables human-in-the-loop exception resolution.',
      highlights: [
        'Designed a 13-rule GIS validation pipeline with master-data cross-referencing and human-in-the-loop exception handling.',
        'Reduced spatial data ingestion from 7+ minutes to 16 seconds (~28× faster) for 18,000+ records using Pyogrio, Apache Arrow, Parquet caching, and Redis/Arq workers.',
        'Built interactive React/FastAPI user interface with PostgreSQL, JWT RBAC, and granular audit logging.',
        'Dockerized multi-worker microservice deployment with Nginx load balancing and containerized task queues.',
      ],
      techDetails: [
        { name: 'FastAPI & Python', role: 'High-concurrency async REST API handling GIS file uploads and pipeline orchestration.' },
        { name: 'Pyogrio & GeoPandas', role: 'C-based vectorized spatial reading and geometric rule validation.' },
        { name: 'Apache Arrow & Parquet', role: 'Columnar in-memory buffers accelerating 18,000+ record transformations.' },
        { name: 'Redis & Arq Workers', role: 'Distributed background queue processing heavy topological calculations.' },
      ],
    },
  },
  {
    title: 'KINFRA AMS — Enterprise Industrial Asset Management',
    category: 'enterprise',
    tag: 'E-Governance · Current Project',
    description:
      'Full-stack enterprise e-governance platform digitizing end-to-end industrial land allotment, lease deed execution, and asset lifecycle management across industrial parks in Kerala.',
    features: ['Leaflet GIS Plot Mapping', 'K-SWIFT SSO & SuperTokens', '5-Tier Multi-Role RBAC', 'VAPT Hardened'],
    tech: ['React', 'TypeScript', 'Vite', 'NestJS', 'SuperTokens', 'Tailwind CSS', 'Leaflet (GIS)', 'Docker', 'Kubernetes'],
    story: {
      overview:
        'Built and deployed a statewide enterprise e-governance platform for KINFRA (Kerala Industrial Infrastructure Development Corporation). Automates investor applications, plot allotments, approval chains, financial ledgers, and formal lease deed generation.',
      highlights: [
        'Built and deployed a full-stack enterprise e-governance platform digitizing end-to-end industrial land allotment, lease deed execution, and asset lifecycle management across industrial parks in Kerala.',
        'Engineered a NestJS API Gateway supporting government K-SWIFT SSO, SuperTokens-based session security, multi-role RBAC across 5 administrative tiers, and reverse-proxy routing for 6 microservices.',
        'Developed a modern UI using React, TypeScript, and Vite with Leaflet GIS plot mapping, automated financial ledger and installment calculators, and DOCX/PDF deed generation.',
        'Enterprise VAPT security hardening including Anti-CSRF, Content Security Policy (CSP), and clickjacking frame guards.',
      ],
      techDetails: [
        { name: 'React, TypeScript & Vite', role: 'Modular, ultra-responsive UI with TanStack Query and Leaflet GIS cadastral plot mapping.' },
        { name: 'NestJS API Gateway', role: 'Microservice reverse-proxy router with SuperTokens auth, rate limiting, and 5-tier RBAC.' },
        { name: 'SuperTokens & K-SWIFT SSO', role: 'State government single sign-on integration and secure session token rotation.' },
        { name: 'Docker & Kubernetes', role: 'Container orchestration ensuring zero-downtime rolling deployments and high availability.' },
      ],
    },
  },
  {
    title: 'MoneyFlow — Smart Offline-First Personal Finance Tracker',
    category: 'mobile',
    tag: 'React Native · Offline First',
    description:
      'A privacy-focused mobile finance application engineered with React Native and Expo. Delivers real-time net worth tracking, interactive hardware-accelerated trend charts, dynamic budget limits, and savings vaults with a 100% offline-first SQLite architecture.',
    features: ['100% Offline SQLite', 'Interactive SVG Charts', 'Biometric Security', 'Smart Budgets & Vaults'],
    tech: ['React Native', 'Expo', 'SQLite', 'TypeScript', 'Zustand', 'NativeWind'],
    githubUrl: 'https://github.com/AJNAS67/smart-money-tracker',
    videoUrl: 'https://drive.google.com/file/d/1c8zEL5uCepPRRxwRXAf1tRuOnB1Bg-Q7/view?usp=sharing',
    story: {
      overview:
        'Managing personal finances across multiple bank accounts, cash, and credit cards often means compromising either on user experience or data privacy. MoneyFlow was built to combine the polish of modern fintech apps with an uncompromising 100% offline-first architecture—ensuring all financial data stays strictly on-device with zero external tracking.',
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
    title: 'Consultant Management System (CMS)',
    category: 'enterprise',
    tag: 'Multi-Tenant SaaS · Enterprise',
    description:
      'Multi-tenant SaaS platform for Consultant Pool, Engagement Requests, automated approval chains, and document workflows with strict tenant data isolation.',
    features: ['Tenant-Aware Workflows', 'MinIO Document Storage', 'Automated Approval Chains', 'FastAPI Services'],
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'MinIO'],
    story: {
      overview:
        'A comprehensive multi-tenant SaaS application created to manage enterprise consultant onboarding, client engagement requests, automated approvals, and contractual agreements while guaranteeing complete data isolation across organizations.',
      highlights: [
        'Developed multi-tenant SaaS modules for Consultant Pool, Engagement Requests, approvals, RBAC, and executive dashboards.',
        'Implemented tenant-aware frontend workflows and integrated FastAPI services to ensure consultant data and master-data operations remain isolated across tenants.',
        'Built workflow-driven dashboards and approval modules using PostgreSQL, Redis, Docker, and MinIO for scalable document handling.',
      ],
      techDetails: [
        { name: 'FastAPI (Python)', role: 'High-speed async API handling tenant-scoped queries and authentication.' },
        { name: 'React & TypeScript', role: 'Dynamic dashboard interface with role-based component rendering.' },
        { name: 'MinIO & PostgreSQL', role: 'S3-compatible private object storage for consultant agreements and encrypted master data.' },
        { name: 'Redis', role: 'Low-latency session caching and fast authorization lookup.' },
      ],
    },
  },
  {
    title: 'SmartSchool — School Management System',
    category: 'enterprise',
    tag: 'EdTech Platform · Real-time',
    description:
      'Comprehensive school management system featuring live student and bus tracking, integrated digital payment gateways (EaseBuzz, Paytm), attendance, and academic examination portals.',
    features: ['Real-time Bus Tracking', 'Integrated Payments (EaseBuzz, Paytm)', 'Academic Exam Modules', 'Firebase Live Data'],
    tech: ['Angular', 'Angular Material', 'Firebase', 'Google Maps API', 'EaseBuzz', 'Paytm', 'NestJS'],
    story: {
      overview:
        'An integrated educational platform streamlining workflows across administration, faculty, parents, and students. Enables cashless tuition fee payments, real-time school bus tracking on interactive maps, and automated parent notifications.',
      highlights: [
        'Developed Smart School Management System modules for assignments, attendance, examinations, communication, and dashboards.',
        'Integrated Firebase, Google Maps API, EaseBuzz, and Paytm, including real-time bus/student tracking and payment workflows.',
        'Mentored Angular and React developers and collaborated on REST API integration and database normalization.',
      ],
      techDetails: [
        { name: 'Angular & Angular Material', role: 'Structured enterprise single-page application with reactive forms and RxJS state.' },
        { name: 'Google Maps API & Firebase', role: 'Real-time GPS tracking and live socket telemetry for student school transit.' },
        { name: 'EaseBuzz & Paytm SDKs', role: 'Secure financial payment gateway processing tuition fees and generating receipts.' },
        { name: 'NestJS Backend', role: 'Robust enterprise backend providing modular REST endpoints and reporting services.' },
      ],
    },
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-gis', label: 'AI & GIS Pipelines' },
  { id: 'enterprise', label: 'Enterprise & Gov' },
  { id: 'mobile', label: 'Mobile & SaaS' },
] as const;

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
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-card-hover p-6 sm:p-7 flex flex-col h-full cursor-pointer group"
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
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
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
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
                <span className="text-gradient">Featured Projects</span>
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

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>
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
                    <Sparkles size={14} /> Overview & Architectural Vision
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
                    Key Engineering Contributions & Capabilities
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
