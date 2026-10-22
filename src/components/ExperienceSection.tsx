import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    company: 'UL Technology Solutions Pvt Ltd (ULTS)',
    role: 'Software Engineer',
    period: 'Mar 2025 – Present',
    location: 'Kozhikode, Kerala',
    bullets: [
      'Developed enterprise applications using React, Angular, and TypeScript for government and business workflows.',
      'Contributed to the KINFRA Asset Management System, covering industrial land allocation, investor applications, approval workflows, and document management.',
      'Integrated payment gateway workflows for application fees and installments; implemented authentication and session management using NestJS and SuperTokens.',
      'Contributed to a multi-tenant Consultant Management System with RBAC, onboarding, approval workflows, and dashboards.',
      'Integrated REST APIs and collaborated with backend teams to deliver scalable applications using Git, Docker, and Agile practices.',
    ],
  },
  {
    company: 'Akira Software Solution',
    role: 'Angular Developer',
    period: 'Jun 2023 – Jan 2025',
    location: 'Thiruvananthapuram, India',
    bullets: [
      'Developed Smart School Management System modules for assignments, attendance, examinations, communication, and dashboards.',
      'Integrated Firebase, Google Maps API, EaseBuzz, and Paytm, including real-time bus/student tracking and payment workflows.',
      'Mentored Angular and React developers and collaborated on REST API integration.',
    ],
  },
  {
    company: 'Infoline Technologies',
    role: 'Full Stack Web Developer',
    period: 'Jun 2021 – Jul 2022',
    location: 'Manjeri, Kerala',
    bullets: [
      'Developed Rental Management System using Angular, NestJS, and PostgreSQL and built token-based Ionic Capacitor applications.',
      'Developed REST APIs and contributed to backend performance optimization.',
    ],
  },
];

const education = [
  {
    institution: 'APJ Abdul Kalam Technological University',
    degree: 'B.Tech in Electronics and Communication Engineering',
    period: '2016 – 2020',
    location: 'Kerala, India',
    score: 'GPA: 7.0',
  },
  {
    institution: 'GHSS Irumbuzhi',
    degree: 'Higher Secondary Education (Biology Science)',
    period: '2016',
    location: 'Irumbuzhi, India',
    score: 'Percentage: 80%',
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
            <span className="text-gradient">Experience & Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px timeline-line hidden sm:block" />

          {/* Work Experience */}
          <div className="flex flex-col gap-8 mb-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={16} className="text-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card-hover p-6 sm:p-7 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-foreground text-lg sm:text-xl">{exp.company}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <p className="text-primary font-medium text-sm">{exp.role}</p>
                    <span className="text-muted-foreground text-xs">• {exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/80 border border-border/60 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={18} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
          </div>

          {/* Education Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                className="glass-card p-5"
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h4 className="font-display font-semibold text-foreground text-base">{edu.institution}</h4>
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-mono">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-primary mb-1">{edu.degree}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground mt-3 pt-2 border-t border-border/30">
                  <span>{edu.location}</span>
                  <span className="font-semibold text-foreground">{edu.score}</span>
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
