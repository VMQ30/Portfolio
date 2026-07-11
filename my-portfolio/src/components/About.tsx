import { useRef, useState, useEffect } from "react";
import { GraduationCap, CodeXml } from "lucide-react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Animates only once
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-[13%] py-20 grid md:grid-cols-3 gap-16 w-[100%] text-left border-t border-primary mt-10">
      <div className="md:col-span-1">
        <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground text-left">
          <span className="text-primary">✦</span>
          Ch. I · About
        </p>
        <h2 className="mt-6 font-display font-bold text-4xl leading-[0.95] tracking-tight text-left text-foreground">
          A student,{" "}
          <span className="italic font-medium font-display-italic text-muted-foreground">
            and <br /> a lifelong learner
          </span>
        </h2>
      </div>

      <div className="md:col-span-2 space-y-8">
        {/* <p className="text-md text-foreground leading-relaxed font-display-italic font-bold">
          "The beautiful thing about learning is that no one can take it away
          from you."
          <br />
          <span className=" text-muted-foreground font-normal">
            — B.B. King
          </span>
        </p> */}
        <section>
          <div>
            <div
              ref={ref}
              className={`relative max-w-3xl group transition-all duration-1000 transform ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="relative z-10">
                <blockquote>
                  <p className="font-display-italic md:text-2xl leading-tight text-foreground">
                    &ldquo;The beautiful thing about{" "}
                    <span className="text-ring font-bold">learning</span> is
                    that no one can take it away from you.&rdquo;
                  </p>

                  <footer className="mt-4 flex items-center gap-4 md:gap-6">
                    <div className="relative flex items-center">
                      {/* Expanding Gradient Line */}
                      <div className="h-px w-20 md:w-32 bg-gradient-to-r from-pink-500 via-pink-300 to-transparent transition-all duration-700 group-hover:w-28 md:group-hover:w-44" />
                      <div className="absolute -left-1 w-2 h-2 rounded-full bg-pink-500" />
                    </div>
                    <cite className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground not-italic">
                      B.B. King
                    </cite>
                  </footer>
                </blockquote>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-10 bg-pink-300/20 opacity-0 group-hover:opacity-30 dark:group-hover:opacity-10 transition-opacity duration-1000 -z-10 blur-3xl rounded-full" />
            </div>
          </div>
        </section>
        <p className="text-lg text-foreground leading-relaxed">
          Information Technology student at Centro Escolar University Makati,
          with a focus on building impactful, data-driven software. Passionate
          about leveraging data engineering, accessibility, and development to
          solve real world problems.
        </p>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-pink-soft">
              <GraduationCap />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium">
                Centro Escolar University · Makati
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                BS Information Technology · Expected June 2027
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <span className="text-primary">✦</span> President's List — SY
                  2023–24 (2nd Sem), 2024–25 (1st Sem)
                </li>
                <li>
                  <span className="text-primary">✦</span> Dean's List — SY
                  2024–25 (2nd Sem), 2025–26 (1st &amp; 2nd Sem)
                </li>
                <li>
                  <span className="text-primary">✦</span> Student Council
                  President — SY 2025–26
                </li>
                <li>
                  <span className="text-primary">✦</span> Class President — SY
                  2026–27
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
