import DEA from "../assets/badges/DEA.png";
import DE from "../assets/badges/DE.png";
import SQL from "../assets/badges/SQL.png";

const BADGES = [
  {
    title: "Data Engineer Associate",
    type: "Associate Certificate",
    img: DEA,
    link: "https://www.datacamp.com/certificate/DEA0019781182240",
  },
  {
    title: "Data Engineer",
    type: "Profeessional Certificate",
    img: DE,
    link: "https://www.datacamp.com/certificate/DE0019366246733",
  },
  {
    title: "SQL Associate",
    type: "Associate Certificate",
    img: SQL,
    link: "https://www.datacamp.com/certificate/SQA0017026461093",
  },
];

export default function Badges() {
  return (
    <div className="px-[13%] py-20 w-[100%] text-left border-t border-primary mt-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground text-left">
            <span className="text-primary">✦</span>
            Ch. V · Badges
          </p>
          <h2 className="mt-6 font-display font-bold text-6xl leading-[0.95] tracking-tight text-left text-foreground">
            Earned{" "}
            <span className="font-medium font-display-italic text-primary">
              emblems.
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
          Click a badge to open its verification page. Each one is issued and
          can be authenticated through its provider.
        </p>
      </div>
      <div className="flex justify-center gap-8 md:gap-16">
        {BADGES.map((badge) => {
          return (
            <a
              href={badge.link}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit flex-col items-center justify-self-center text-center cursor-pointer"
              title={`Verify ${badge.title}`}
            >
              <div
                className="relative inline-flex w-fit items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)]"
                aria-hidden="true"
              >
                <img
                  src={badge.img}
                  alt={`${badge.title} badge`}
                  className="block h-40 w-auto object-contain"
                />
              </div>

              <p className="mt-4 font-display-italic text-base leading-tight text-foreground">
                {badge.title}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                {badge.type}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
