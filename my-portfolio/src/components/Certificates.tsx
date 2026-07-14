import { Sparkles, X } from "lucide-react";
import { useState } from "react";

import CS50P from "../assets/certificates/CS50P.png";
import CS50x from "../assets/certificates/CS50x.png";
import DataEngineer from "../assets/certificates/DataEngineer.png";
import DataEngineerAssociate from "../assets/certificates/DataEngineerAssociate.png";
import SQLAssociate from "../assets/certificates/SQLAssociate.png";
import TESDA from "../assets/certificates/TESDA.png";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);
  const CERTIFICATE = [
    {
      title: "Data Engineer",
      source: "DataCamp",
      date: "June 2026",
      pic: DataEngineer,
    },
    {
      title: "Data Engineer Associate",
      source: "DataCamp",
      date: "February 2025",
      pic: DataEngineerAssociate,
    },
    {
      title: "SQL Associate",
      source: "DataCamp",
      date: "February 2025",
      pic: SQLAssociate,
    },
    { title: "CS50P", source: "Harvard", date: "March 2026", pic: CS50P },
    { title: "CS50x", source: "Harvard", date: "February 2026", pic: CS50x },
    { title: "NC CSS II", source: "TESDA", date: "November 2023", pic: TESDA },
  ];
  return (
    <div className="px-[13%] py-20 w-[100%] text-left border-t border-primary mt-10">
      <div className="grid md:grid-cols-2 gap-16 mb-14">
        <div>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6">
            <span className="text-primary">✦</span>Ch. VI · Certifications
          </div>
          <h2 className="font-display font-bold text-foreground text-5xl md:text-6xl leading-[0.95] tracking-[-0.02em]">
            Paper &amp;{" "}
            <span className="font-display-italic font-normal text-primary">
              proof.
            </span>
          </h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed self-end">
          Click any certification tab to view the certificate.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATE.map((certificate) => {
          return (
            <button
              onClick={() => setSelectedImage(certificate.pic)}
              className="group text-left rounded-2xl border border-primary p-5 bg-card hover:border-primary hover:-translate-y-1 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 bg-pink-soft">
                  <Sparkles className="h-4 w-4 text-ring animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="font-display-italic text-lg leading-tight">
                    {certificate.title}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {certificate.source} · {certificate.date}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-primary group-hover:text-ring transition">
                Preview certificate →
              </p>
            </button>
          );
        })}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal} // Closes modal when clicking on the dark background
        >
          <div
            className="relative max-w-[90vw] max-h-[85vh] m-4"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image itself
          >
            <button
              className="w-8 h-8 bg-background/80 absolute top-2 right-2 sm:top-6 sm:right-6 z-10 flex items-center justify-center text-foreground/40 hover:bg-background hover:text-foreground/60 transition-colors text-sm font-semibold tracking-wider rounded-full border border-border"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="rounded-lg shadow-2xl max-w-full max-h-[80vh] object-contain border border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
