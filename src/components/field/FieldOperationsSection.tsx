import React, { useState, useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { CaseFileIndex } from "./CaseFileIndex";
import { CaseFileFilter, type FilterCategory } from "./CaseFileFilter";
import { CaseFileCard } from "./CaseFileCard";
import { Server } from "lucide-react";

export const FieldOperationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".field-anim-hdr", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(".field-anim-card", {
        scrollTrigger: {
          trigger: ".field-case-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 25,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePendingCtaClick = () => {
    const clearanceEl = document.getElementById("clearance");
    if (clearanceEl) {
      clearanceEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const caseFiles = DOSSIER_DATA.caseFiles;

  const counts: Record<FilterCategory, number> = {
    ALL: caseFiles.length,
    "RED TEAM": caseFiles.filter((c) => c.category === "RED TEAM").length,
    "BLUE TEAM": caseFiles.filter((c) => c.category === "BLUE TEAM").length,
  };

  const filteredCases = activeFilter === "ALL" 
    ? caseFiles 
    : caseFiles.filter((c) => c.category === activeFilter);

  return (
    <section ref={sectionRef} id="field-operations" style={{ scrollMarginTop: "100px", position: "relative", overflow: "hidden" }}>
      {/* Oversized Chapter Watermark */}
      <div className="chapter-watermark" aria-hidden="true">04</div>

      {/* Chapter Tag Header */}
      <div

        className="field-anim-hdr"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-accent)",
          fontWeight: "bold",
          letterSpacing: "0.08em",
          marginBottom: "var(--space-2)",
        }}
      >
        <Server size={14} />
        <span>CH. 04 // FIELD OPERATIONS</span>
        <span style={{ color: "var(--color-surface-border)" }}>|</span>
        <span style={{ color: "var(--color-text-muted)" }}>PROJECT CASE ARCHIVE</span>
      </div>

      {/* Main Chapter Title & Subheading */}
      <h2
        className="field-anim-hdr"
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 900,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-2)",
        }}
      >
        FIELD OPERATIONS & UTILITY DEPLOYMENTS.
      </h2>

      <p
        className="field-anim-hdr"
        style={{
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-text-muted)",
          lineHeight: "1.6",
          maxWidth: "760px",
          marginBottom: "var(--space-6)",
        }}
      >
        "Secondary deployments, web experiments, and utility scripts staged for upcoming cybersecurity case file dossiers."
      </p>

      {/* Dynamic Case File Index Bar */}
      <div className="field-anim-hdr">
        <CaseFileIndex caseFiles={caseFiles} />
      </div>

      {/* Category Filter Controls */}
      <div className="field-anim-hdr">
        <CaseFileFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />
      </div>

      {/* Intercepted Case File Cards Grid */}
      <div className="field-case-grid">
        {filteredCases.map((cf) => (
          <div key={cf.id} className="field-anim-card">
            <CaseFileCard
              caseFile={cf}
              onPendingCtaClick={handlePendingCtaClick}
            />
          </div>
        ))}
      </div>

    </section>
  );
};
