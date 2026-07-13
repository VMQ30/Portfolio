import { Award, Sparkles, Trophy } from "lucide-react";

export default function Competition() {
  const COMPETITIONS = [
    {
      title: "InterCICSkwela 2026 Hackathon",
      award: [
        "Champion",
        "Best in Sustainability",
        "Best Problem Solver",
        "Best Impactful Innovation",
      ],
      url: '#"',
    },
    {
      title: "Hulma 2026 Datathon",
      award: ["2nd Place"],
      url: '#"',
    },
    {
      title: "Sparkfest 2026",
      award: ["Top 10 Finalists", "Best in Technology"],
      url: '#"',
    },
    {
      title: "18th CEU University Research Forum 2026",
      award: ["Best in Pitch Competitor"],
      url: '#"',
    },
    {
      title: "BPI Data Wave Hackathon 2025",
      award: ["Top 6 Finalists"],
      url: '#"',
    },
    {
      title: "CreateNConquer 2025 Hackathon",
      award: ["Felta Multo-Media Award"],
      url: '#"',
    },
    {
      title: "Sparkfest 2025",
      award: ["Top 10 Finalists"],
      url: '#"',
    },
    {
      title: "ITOlympics 2024 .NET Programming",
      award: ["Top 15 Finalists"],
      url: '#"',
    },
  ];

  const numberToWords = (num: number): string => {
    const WORDS = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
    ];
    return WORDS[num] || num.toString();
  };

  return (
    <div className="px-[13%] py-20 w-[100%] grid md:grid-cols-2 gap-16 text-left border-t border-primary mt-10">
      <div>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6">
          <span className="text-primary">✦</span>Ch. III · Honors
        </div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6">
          Philosophy
        </p>
        <blockquote className="font-display-italic text-4xl leading-tight text-foreground">
          "The competition is not with others. It is with{" "}
          <span className="text-ring">yourself</span>, to see how far you can
          go."
        </blockquote>
        <p className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          <Trophy size="20" className="text-primary" />
          {numberToWords(COMPETITIONS.length)} recognitions ·{" "}
          {numberToWords(new Date().getFullYear() - 2024)} years
        </p>

        <div className="mt-12 relative flex items-center justify-center">
          <div className="absolute inset-x-0 flex items-center">
            <span className="h-px flex-1 bg-primary"></span>
            <div className="mx-4 h-3 w-3 rotate-45 border border-primary"></div>
            <span className="h-px w-12 bg-primary"></span>
            <div className="mx-4 h-2 w-2 rounded-full bg-primary"></div>
            <span className="h-px flex-1 bg-primary"></span>
          </div>
          <div className="competition-quote-badge relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 backdrop-blur-sm shadow-lg">
            <Sparkles className="text-primary" size="30" />
          </div>
          <span className="absolute top-[-10%] right-[25%] text-lg leading-none text-primary opacity-35">
            ✦
          </span>
          <div className="absolute top-[0%] left-[12%] h-2 w-2 rotate-45 border border-primary"></div>
          <div className="absolute top-[25%] right-[10%] h-2 w-2 rounded-full bg-primary"></div>
          <div className="absolute bottom-[15%] left-[22%] h-1.5 w-1.5 rotate-45 border border-primary opacity-60"></div>
          <div className="absolute bottom-[20%] right-[18%] h-1.5 w-1.5 rounded-full bg-primary opacity-60"></div>
          <span className="absolute top-[10%] left-[0%] text-lg leading-none text-primary opacity-35">
            ✦
          </span>
          <span className="absolute top-[5%] right-[4%] text-lg leading-none text-primary opacity-35">
            ✦
          </span>
          <span className="absolute bottom-[5%] left-[10%] text-sm leading-none text-primary opacity-70">
            ✦
          </span>
          <div className="absolute top-[30%] left-[30%] h-1 w-1 rounded-full bg-primary opacity-60"></div>
        </div>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6">
          Recognition
        </p>
        <ul className="space-y-6">
          {COMPETITIONS.map((competition) => {
            return (
              <li key={competition.title}>
                <button
                  type="button"
                  className="group grid w-full grid-cols-5 items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-4 text-left backdrop-blur-sm transition-all duration-300 hover:translate-x-3 hover:border-primary/40 hover:bg-card hover:shadow-lg"
                >
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 bg-pink-soft">
                      <Award className="text-primary" />
                    </div>
                    <p className="font-medium leading-tight">
                      {competition.title}
                    </p>
                  </div>
                  <p className="col-span-2 text-sm italic text-muted-foreground text-right group-hover:text-foreground transition">
                    {competition.award.join(" · ")}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
