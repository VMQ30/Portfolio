import {
  Code,
  Database,
  Layers,
  Globe,
  Cpu,
  Wrench,
  Sparkle,
} from "lucide-react";

export default function Skills() {
  const LANGUAGES = ["Python", "Javascript", "Typescript", "SQL", "HTML/CSS"];
  const DATA = ["PostgreSQL", "MongoDB", "dbt", "Apache Airflow"];
  const FRAMEWORKS = ["React", "Node.js", "DJango", "Tailwind"];
  const AI = ["Scikit-learn", "Tensorflow"];
  const CLOUD = ["Netlify", "Supabase", "Git", "Github", "CI/CD Testing"];
  const TOOLS = ["Postman", "Figma"];

  return (
    <div className="px-[13%] py-20 w-[100%] text-left border-t border-primary mt-10">
      <div className="grid md:grid-cols-2 gap-16 mb-14">
        <div className="md:col-span-1">
          <p className=" flex gap-3  text-[10px] uppercase tracking-[0.35em] text-muted-foreground text-left">
            <span className="text-primary">✦</span>
            Ch. III · Skills
          </p>
          <h2 className="mt-6 font-display font-bold text-6xl leading-[0.95] tracking-tight text-left text-foreground">
            Technical{" "}
            <span className="font-medium font-display-italic text-primary">
              Instruments.
            </span>
          </h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed self-end">
          A toolkit of languages, frameworks, data tools, and platforms I use to
          turn ideas into product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(160px,auto)]">
        <div className="group relative overflow-hidden rounded-3xl border border-pink-soft bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-xl hover:border-primary md:col-span-2 md:row-span-2 flex flex-col justify-between">
          <div className="relative z-10">
            <div className="rounded-full mb-4 h-10 w-10 flex items-center justify-center bg-pink-soft">
              <Code className="text-foreground" />
            </div>
            <p className="uppercase text-muted-foreground text-[10px] tracking-[0.3em] mb-2">
              {LANGUAGES.length} Tools
            </p>
            <h3 className="flex items-center font-display text-foreground text-3xl font-medium tracking-tight">
              <Sparkle className="text-primary mr-2" /> Languages & Core
            </h3>
          </div>

          <div className="relative z-10 flex flex-wrap gap-2 mt-6">
            {LANGUAGES.map((language) => {
              return (
                <div className="rounded-full border border-border/80 bg-background px-3.5 py-1.5 text-sm hover:border-primary/40 transition">
                  {language}
                </div>
              );
            })}
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-pink-soft bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-xl hover:border-primary md:col-span-2 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 bg-pink-soft">
              <Database className="text-foreground" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {DATA.length} tools
            </span>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium mt-5 mb-3 text-foreground">
              <span className="text-primary">✦</span> Data &amp; Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {DATA.map((data) => {
                return (
                  <span className="rounded-full border border-border/80 bg-background px-3 py-1 text-xs hover:border-primary/40 transition">
                    {data}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-pink-soft bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-xl hover:border-prima flex flex-col justify-between">
          <div className="h-10 w-10 rounded-full flex items-center justify-center bg-pink-soft">
            <Cpu className="text-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-medium mt-6">
              <span className="text-primary">✦</span> AI &amp; Data Science
            </h3>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {AI.map((ai) => {
                return (
                  <span className="rounded-full border border-border/80 bg-background px-2 py-0.5 text-[10px] hover:border-primary/40 transition">
                    {ai}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-pink-soft bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-xl hover:border-primary flex flex-col justify-between">
          <div className="h-10 w-10 rounded-full flex items-center justify-center bg-pink-soft">
            <Wrench className="text-foreground" />
          </div>
          <div>
            <h3 className="flex items-center font-display text-lg font-medium mt-6">
              <Sparkle className="text-primary mr-1" /> Tools &amp; Methods
            </h3>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {TOOLS.map((tool) => {
                return (
                  <span className="rounded-full border border-border/80 bg-background px-2 py-0.5 text-[10px] hover:border-primary/40 transition">
                    {tool}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-pink-soft bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-xl hover:border-primary md:col-span-2 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 bg-pink-soft">
              <Layers className="text-foreground" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {FRAMEWORKS.length} tools
            </span>
          </div>

          <div>
            <h3 className="font-display text-xl font-medium mt-5 mb-3">
              <span className="text-primary">✦</span> Frameworks &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {FRAMEWORKS.map((framework) => {
                return (
                  <span className="rounded-full border border-border/80 bg-background px-3 py-1 text-xs hover:border-primary/40 transition">
                    {framework}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-pink-soft bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-xl hover:border-primary md:col-span-2 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 bg-pink-soft">
              <Globe className="text-foreground" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {CLOUD.length} tools
            </span>
          </div>

          <div>
            <h3 className="flex items-center font-display text-xl font-medium mt-5 mb-3">
              <Sparkle className="text-primary mr-1" /> Cloud &amp; DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {CLOUD.map((cloud) => {
                return (
                  <span className="rounded-full border border-border/80 bg-background px-3 py-1 text-xs hover:border-primary/40 transition">
                    {cloud}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        <Sparkle className="text-primary animate-pulse" />
        Always learning — expect this list to grow.
      </p>
    </div>
  );
}
