import { useState } from "react";

export default function Works() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const handleCardClick = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const PROJECTS = [
    {
      id: 1,
      title: "PalAI",
      genre: "Software Dev",
      category: "Agriculture",
      description: "description",
      summary: "summary (one liner)",
      quote: "Hindi masasayang ang palay, Protektado ang hanap buhay",
      date: "01/01/2000",
      tech: ["tech1", "tech2", "tech3"],
      link: "#",
      img: "https://spin-my-work.lovable.app/assets/project-palai-DVp6ktmi.jpg",
    },
    {
      id: 2,
      title: "title",
      genre: "genre",
      category: "category",
      description: "description",
      summary: "summary (one liner)",
      quote: "quote",
      date: "01/01/2000",
      tech: ["tech1", "tech2", "tech3"],
      link: "#",
      img: "https://spin-my-work.lovable.app/assets/project-palai-DVp6ktmi.jpg",
    },

    {
      id: 3,
      title: "title",
      genre: "genre",
      category: "category",
      description: "description",
      summary: "summary (one liner)",
      quote: "quote",
      date: "01/01/2000",
      tech: ["tech1", "tech2", "tech3"],
      link: "#",
      img: "https://spin-my-work.lovable.app/assets/project-palai-DVp6ktmi.jpg",
    },
  ];

  return (
    <div className="px-[13%] py-20 w-[100%] text-left border-t border-primary mt-10">
      <div className="md:col-span-1">
        <p className="flex gap-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground text-left">
          <span className="text-primary">✦</span>
          Ch. II · My Projects
        </p>
        <h2 className="mt-6 font-display font-bold text-6xl leading-[0.95] tracking-tight text-left text-foreground">
          Selected{" "}
          <span className="font-medium font-display-italic text-primary">
            Works.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
        {PROJECTS.map((project) => {
          const isFlipped = !!flippedCards[project.id];

          return (
            <div
              key={project.id}
              className="group h-[580px] w-full [perspective:1000px] cursor-pointer selection:bg-transparent transition-transform duration-500 ease-out hover:-translate-y-2"
              onClick={() => handleCardClick(project.id)}
            >
              {/* The Rotator Card Wrapper */}
              <div
                className={`relative w-full h-full duration-500 transition-all [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 w-full h-full rounded-2xl border border-primary bg-pink-soft backdrop-blur-sm flex flex-col justify-between [backface-visibility:hidden] shadow-sm group-hover:shadow-xl transition-shadow">
                  <div className="relative flex-1 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      width="1024"
                      height="768"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-foreground/80">
                      <span>Project · Vol. {project.id}</span>
                      <span>
                        0{project.id} / {PROJECTS.length}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                        Project Feature
                      </p>
                      <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                        Tap ✦
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-3xl md:text-4xl leading-tight text-ring capitalize">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                        {project.genre} · {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-white text-primary-foreground flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] border border-pink-soft bg-card p-8 shadow-sm group-hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    <span>Project · Vol. {project.id}</span>
                    <span>
                      0{project.id} / {PROJECTS.length}
                    </span>
                  </div>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    {project.date}
                  </p>

                  <h3 className="font-display mt-2 text-2xl md:text-3xl text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[13px] text-foreground/80 leading-relaxed text-justify">
                    {project.description}
                  </p>

                  <blockquote className="mt-5 border-l-2 pl-4 text-[12px] italic text-muted-foreground border-primary">
                    "{project.quote}"
                  </blockquote>

                  <div className="mt-auto pt-6">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                      Stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((projTech) => {
                        return (
                          <span className="rounded-full border px-3 py-1 text-xs bg-pink-tint border-primary">
                            {projTech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    {/* e.stopPropagation() prevents the card from flipping right back when clicking the link */}
                    <a
                      href={project.link}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 inline-block bg-background text-foreground text-xs font-medium px-4 py-2 transition-colors duration-500 active:scale-95 hover:bg-pink-tint rounded-full border bg-transparent border-ring text-ring"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
