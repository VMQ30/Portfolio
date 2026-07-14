import { ArrowUpRight, FileUser, Phone } from "lucide-react";
import CV from "../assets/pdf/Quinia_CV.pdf";
export default function Contact() {
  return (
    <div className="px-[13%] py-20 w-[100%] text-left border-t border-primary mt-10">
      <div className="mx-auto max-w-6xl relative overflow-hidden rounded-3xl border border-primary bg-card px-8 md:px-16 py-24 md:py-32">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-70 bg-[var(--pink-soft)]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-60 bg-[var(--pink-tint)]"></div>
        <div className="relative z-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.6em] font-medium mb-10 text-ring">
            Available for Projects
          </p>
          <a
            href="mailto:quiniavidamarie30@gmail.com"
            target="_blank"
            className="block text-foreground font-display-italic font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight hover:opacity-70 transition-opacity break-words"
          >
            quiniavidamarie30
            <span className="text-[var(--primary)]">@</span>
            gmail.com
          </a>
          <p className="mt-10 max-w-xl mx-auto text-muted-foreground">
            Open to internships, collaborations, and job oopportunities. The
            fastest way to reach me is email.
          </p>
        </div>
        <div className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <a
            href="https://github.com/VMQ30"
            target="_blank"
            className="group flex items-center gap-3 rounded-full border border-primary bg-background/60 backdrop-blur-sm px-4 py-3 hover:bg-accent transition"
          >
            <span className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-full bg-[var(--pink-tint)] text-[var(--primary-foreground)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-github h-4 w-4 text-ring"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </span>
            <span className="text-xs truncate text-foreground">VMQ30</span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition shrink-0" />
          </a>
          <a
            href="https://www.linkedin.com/in/vida-quinia-a7029b364"
            target="_blank"
            className="group flex items-center gap-3 rounded-full border border-primary bg-background/60 backdrop-blur-sm px-4 py-3 hover:bg-accent transition"
          >
            <span className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-full bg-[var(--pink-tint)] text-[var(--primary-foreground)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin h-4 w-4 text-ring"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </span>
            <span className="text-xs truncate text-foreground">LinkedIn</span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition shrink-0" />
          </a>
          <a
            href="tel:+639619036381"
            target="_blank"
            className="group flex items-center gap-3 rounded-full border border-primary bg-background/60 backdrop-blur-sm px-4 py-3 hover:bg-accent transition"
          >
            <span className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-full bg-[var(--pink-tint)] text-[var(--primary-foreground)]">
              <Phone className="h-4 w-4 text-ring" />
            </span>
            <span className="truncate text-foreground text-[10px]">
              +63 961 903 6381
            </span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition shrink-0" />
          </a>
          <a
            href={CV}
            target="_blank"
            className="group flex items-center gap-3 rounded-full border border-primary bg-background/60 backdrop-blur-sm px-4 py-3 hover:bg-accent transition"
          >
            <span className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-full bg-[var(--pink-tint)] text-[var(--primary-foreground)]">
              <FileUser className="h-4 w-4 text-ring" />
            </span>
            <span className="text-xs truncate text-foreground">CV</span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
