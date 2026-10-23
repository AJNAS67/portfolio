import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Github, Play, ExternalLink, CheckCircle2, Sparkles, Globe, Workflow } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Project {
  title: string;
  category: 'enterprise' | 'ai-gis' | 'mobile' | 'creative';
  tag: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  secondaryGithubUrl?: string;
  secondaryGithubLabel?: string;
  videoUrl?: string;
  story?: {
    overview: string;
    highlights: string[];
    techDetails?: { name: string; role: string }[];
    architecture?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Ferrari F8 Tributo — Cinematic 3D Automotive Experience',
    category: 'creative',
    tag: 'Creative Frontend · 60 FPS Canvas',
    description:
      'A high-performance, scroll-driven automotive digital showroom showcasing the Ferrari F8 Tributo. Built with React 19, TypeScript, and GSAP ScrollTrigger, it replaces heavy 3D WebGL runtimes with a custom HTML5 Canvas 300-frame image sequence engine delivering 60 FPS performance, procedural Web Audio API engine sound synthesis, and interactive HUD telemetry.',
    features: ['Custom 300-Frame Canvas Engine', 'GSAP ScrollTrigger Timeline', 'Procedural Web Audio V8 Synthesizer', 'Interactive HUD Telemetry'],
    tech: ['React 19', 'TypeScript', 'GSAP ScrollTrigger', 'HTML5 Canvas 2D', 'Web Audio API', 'Vite'],
    liveUrl: 'https://porche-animated.onrender.com',
    githubUrl: 'https://github.com/AJNAS67/porche-animated',
    story: {
      overview:
        'The Ferrari F8 Tributo Cinematic Experience is an interactive automotive showcase engineered to push the boundaries of browser performance and creative web design. Instead of relying on bandwidth-heavy 3D GLTF models, the application implements an optimized HTML5 Canvas 2D frame sequence renderer that synchronizes 300 high-resolution render frames directly to scroll position and touch/drag interactions.',
      highlights: [
        'Scroll-Bound 360° Sequence Engine: Pinned GSAP ScrollTrigger timeline orchestrating 300 photorealistic frames across 5 driving dynamics states (Launch, Drift, Aero Deceleration, Stance Halt, Dihedral Cockpit Reveal).',
        'Direct Canvas Touch & Drag Scrubbing: Interactive drag-to-rotate functionality allowing users to manually scrub frames with inertia, complementing the scroll sequence.',
        'Interactive Engineering Hotspots: Real-time spatial markers revealing deep-dive technical specs on the Brembo Carbon-Ceramic Brakes, F1 S-Duct, Cockpit HMI, and Active Rear Diffuser.',
        'Procedural Web Audio Engine: Zero-asset audio synthesis using browser native AudioContext, BiquadFilter, and oscillators (48Hz V8 idle rumble + 1.4kHz turbo whistle) with zero download overhead.',
        'Progressive 3-Tier Preloader & Retina DPR Clamping: Priority frame batching and dynamic DPR scaling (capped at 2.0 desktop, 1.5 mobile) ensuring a silky 60 FPS without GPU thermal throttling.',
      ],
      techDetails: [
        { name: 'React 19 & Vite 8', role: 'Modern component lifecycle and ultra-fast build tooling with strict TypeScript.' },
        { name: 'GSAP 3 & ScrollTrigger', role: 'Sub-pixel scrubbed timeline pinning and frame interpolation math.' },
        { name: 'HTML5 Canvas 2D API', role: 'Lightweight high-speed 60 FPS frame sequence engine with nearest-neighbor fallback cache.' },
        { name: 'Web Audio API', role: 'Real-time procedural dual-oscillator sound synthesis generating twin-turbo spool and V8 exhaust rumble.' },
        { name: 'Dynamic DPR & Preloader', role: 'Clamps device pixel ratio and streams frames progressively to prevent buffer bottlenecking.' },
      ],
    },
  },
  {
    title: 'Unified AI-Powered Job Portal & MCP Gateway',
    category: 'ai-gis',
    tag: 'Model Context Protocol · Microservices Gateway',
    description:
      'An enterprise-grade recruitment ecosystem and AI gateway built on Node.js and the Model Context Protocol (MCP). It bridges distributed microservices—Candidate Management and Job Vacancy Services—enabling autonomous LLM agents (Claude, Cursor, Antigravity) to query talent profiles, filter job openings, and analyze market trends in real-time.',
    features: [
      'Unified MCP Gateway',
      'Candidate & Job Microservices',
      'Zod Schema Validation',
      'stdio & SSE Transports',
      'Zero-Trust Cloudflare Ingress',
    ],
    tech: [
      'Node.js',
      'Express.js',
      'Model Context Protocol (MCP)',
      '@modelcontextprotocol/sdk',
      'Zod',
      'JSON-RPC 2.0',
      'RESTful APIs',
      'Concurrently',
      'Cloudflare Tunnel',
    ],
    githubUrl: 'https://github.com/AJNAS67/mcp-gatwway-server',
    secondaryGithubUrl: 'https://github.com/AJNAS67/job-portal-services',
    secondaryGithubLabel: 'Job Services Repo',
    story: {
      overview:
        'Modern recruitment systems often suffer from fragmented data silos, where candidate databases and job listings live in disconnected microservices, and traditional REST APIs require custom integrations for every AI assistant. To solve this, designed and built a distributed recruitment platform composed of independent microservices (Candidate Service on port 5001, Job Service on port 5002) unified by an autonomous Model Context Protocol (MCP) Gateway Server. The MCP Gateway exposes typed, validated tool endpoints using Zod and JSON-RPC over Stdio and SSE, giving LLMs native, schema-enforced access to live applicant pools, hiring analytics, and job listings without manual dashboard lookups.',
      highlights: [
        'Architected Distributed Microservices: Engineered decoupled Express.js microservices for Candidate Management (:5001) and Job Vacancies (:5002) with RESTful endpoints, multi-param filtering, and statistical aggregations.',
        'Model Context Protocol (MCP) Integration: Developed an MCP Gateway using @modelcontextprotocol/sdk and Zod, standardizing LLM interactions via low-latency JSON-RPC over Stdio and Server-Sent Events (SSE).',
        'Strict Schema & Type Enforcement: Implemented runtime input validation and sanitization with Zod schemas to guarantee type safety and guard against malformed AI tool invocations.',
        'Automated Testing & Multi-Server Orchestration: Configured unified multi-service startup with Concurrently and automated integration verification suites validating live microservice connectivity, error handling, and JSON-RPC message exchange.',
        'Zero-Trust Remote Ingress: Integrated Cloudflare Tunnel to expose the gateway securely for remote LLM pair-programming and cloud agents without opening insecure firewall ports.',
        'Intelligent Cross-Bridge Matching Roadmap: Designed composite orchestration patterns (such as match_candidate_to_jobs) to correlate candidate skill profiles directly against active job vacancies with match scoring.',
      ],
      techDetails: [
        {
          name: 'Model Context Protocol (MCP)',
          role: '@modelcontextprotocol/sdk providing standardized agent tool contracts and dynamic context injection.',
        },
        {
          name: 'Node.js & Express.js',
          role: 'High-throughput async event loop powering microservices and persistent SSE/stdio communication channels.',
        },
        {
          name: 'Zod & JSON-RPC 2.0',
          role: 'Strict runtime contract validation ensuring deterministic agent tool parameter binding and safe execution.',
        },
        {
          name: 'Distributed Microservices',
          role: 'Decoupled candidate management (:5001) and job vacancy (:5002) services with independent REST APIs.',
        },
        {
          name: 'Cloudflare Tunnel',
          role: 'Zero-trust ingress allowing secure remote AI agent access without exposing local ports.',
        },
        {
          name: 'Concurrently & Dev Tooling',
          role: 'Multi-service orchestration script coordinating candidate, job, and gateway services simultaneously.',
        },
      ],
      architecture: `                    ┌──────────────────────────────────────────────┐
                    │          AI Host / LLM Client                │
                    │   (Claude Desktop / Cursor / Antigravity)    │
                    └──────────────────────┬───────────────────────┘
                                           │ Stdio (JSON-RPC 2.0)
                                           ▼
                    ┌──────────────────────────────────────────────┐
                    │              MCP Gateway Server              │
                    │      (Schema Validation via Zod, Routing)    │
                    ├──────────────────────┬───────────────────────┤
                    │                      │                       │
                    │  Tool:               │  Tool:                │
                    │  get_student_data    │  get_job_list         │
                    └──────────┬───────────┴───────────┬───────────┘
                               │ HTTP                  │ HTTP
                               ▼                       ▼
                    ┌──────────────────────┐┌──────────────────────┐
                    │  Candidate Service   ││     Job Service      │
                    │      (Port 5001)     ││     (Port 5002)      │
                    └──────────────────────┘└──────────────────────┘`,
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
  { id: 'creative', label: 'Creative & 3D Web' },
  { id: 'ai-gis', label: 'AI & GIS Pipelines' },
  { id: 'enterprise', label: 'Enterprise & Gov' },
  { id: 'mobile', label: 'Mobile Apps' },
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
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Live Project"
              className="h-8 px-2.5 rounded-lg border border-primary/40 bg-primary/10 flex items-center gap-1.5 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              title="Visit Live Website"
            >
              <ExternalLink size={13} />
              <span>Live</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.secondaryGithubUrl ? 'MCP Gateway GitHub' : 'GitHub Repository'}
              className="h-8 px-2.5 rounded-lg border border-border/50 bg-secondary/30 flex items-center gap-1.5 text-muted-foreground hover:text-primary hover:border-primary/50 text-xs font-medium transition-all"
              title={project.secondaryGithubUrl ? 'MCP Gateway GitHub' : 'GitHub Repository'}
            >
              <Github size={14} />
              {project.secondaryGithubUrl && <span>Gateway</span>}
            </a>
          )}
          {project.secondaryGithubUrl && (
            <a
              href={project.secondaryGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.secondaryGithubLabel || 'Microservices Repository'}
              className="h-8 px-2.5 rounded-lg border border-border/50 bg-secondary/30 flex items-center gap-1.5 text-muted-foreground hover:text-primary hover:border-primary/50 text-xs font-medium transition-all"
              title={project.secondaryGithubLabel || 'Microservices Repository'}
            >
              <Github size={14} />
              <span>Services</span>
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

                <div className="flex flex-wrap items-center gap-2.5">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <Globe size={13} />
                      Live Website
                      <ExternalLink size={12} className="opacity-80" />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 bg-secondary/40 hover:bg-secondary text-foreground text-xs font-medium transition-colors"
                    >
                      <Github size={14} />
                      {selectedProject.secondaryGithubUrl ? 'MCP Gateway Repo' : 'GitHub Repo'}
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  )}
                  {selectedProject.secondaryGithubUrl && (
                    <a
                      href={selectedProject.secondaryGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 bg-secondary/40 hover:bg-secondary text-foreground text-xs font-medium transition-colors"
                    >
                      <Github size={14} />
                      {selectedProject.secondaryGithubLabel || 'Microservices Repo'}
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  )}
                  {selectedProject.videoUrl && (
                    <a
                      href={selectedProject.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
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

              {/* Architecture Diagram */}
              {selectedProject.story?.architecture && (
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-2.5 flex items-center gap-1.5">
                    <Workflow size={14} /> System & Data Flow Architecture
                  </h4>
                  <div className="p-4 sm:p-5 rounded-xl bg-secondary/30 border border-primary/20 font-mono text-[11px] sm:text-xs text-primary/90 overflow-x-auto leading-relaxed shadow-inner backdrop-blur-sm">
                    <pre className="whitespace-pre font-mono leading-tight">{selectedProject.story.architecture}</pre>
                  </div>
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

                <div className="flex flex-wrap items-center gap-2.5">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <Globe size={15} />
                      Live Site
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 hover:border-primary/50 text-foreground text-sm font-medium transition-colors"
                    >
                      <Github size={16} />
                      {selectedProject.secondaryGithubUrl ? 'MCP Gateway Repo' : 'View on GitHub'}
                    </a>
                  )}
                  {selectedProject.secondaryGithubUrl && (
                    <a
                      href={selectedProject.secondaryGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 hover:border-primary/50 text-foreground text-sm font-medium transition-colors"
                    >
                      <Github size={16} />
                      {selectedProject.secondaryGithubLabel || 'Microservices Repo'}
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
                      Watch Demo
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
