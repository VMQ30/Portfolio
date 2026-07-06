import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="px-[13%] py-15 ">
      <div className="flex items-center text-[12px] uppercase tracking-[0.35em] text-muted-foreground mb-10">
        <p>
          <span className="text-primary mr-3">✦</span>Portfolio · Edition 2026 ·
          Metro Manila
        </p>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-display font-bold text-foreground text-left w-[100%] text-6xl md:text-8xl lg:text-[9rem] leading-[0.88] tracking-[-0.02em]">
          Vida Marie
          <br></br>
          <span className="font-display-italic font-normal text-primary">
            Quinia
          </span>
        </h1>
      </div>
      <div className="flex items-center text-2xl tracking-[0.35em] text-foreground mt-10">
        <h2 className="text-serif">
          — innovator{" "}
          <span className="text-primary text-[14px] align-middle">✦</span>{" "}
          developer{" "}
          <span className="text-primary text-[14px] align-middle">✦</span>{" "}
          builder
        </h2>
      </div>

      <p className="max-w-[80%] text-lg text-muted-foreground leading-relaxed text-left mt-8">
        Data Engineer and IT student skilled in Python and SQL, experienced in
        transforming complex metrics into automated pipelines and engineering
        real-time data preprocessing workflows.
      </p>

      <div className="flex flex-col md:flex-row gap-10 md:items-end">
        <div className="flex items-center gap-5 mt-5">
          <button className="group gap-1 inline-flex items-center px-5 py-3 rounded-full bg-foreground text-background uppercase text-serif text-xs tracking-[0.2em] hover:bg-muted-foreground transition">
            View Projects
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </button>
          <button className="flex px-5 py-3 rounded-full uppercase text-serif text-xs tracking-[0.2em] bg-transparent text-ring border-2 border-primary hover:bg-pink-soft transition">
            View Resume
          </button>
        </div>
        <div className="h-px flex-1 bg-border mb-3 hidden md:block"></div>
        <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground pb-1">
          Available for Opportunities
        </div>
      </div>
    </div>
  );
}
