import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6">
      {/* Gradient line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-10" />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammed Ajnas KP. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:ajnaskp67@gmail.com"
            className="w-10 h-10 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            title="Email Muhammed Ajnas"
          >
            <span className="text-xs font-semibold">@</span>
          </a>
          <a
            href="https://github.com/ajnas67"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            title="GitHub: ajnas67"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ajnas-muhammed"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            title="LinkedIn: ajnas-muhammed"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
