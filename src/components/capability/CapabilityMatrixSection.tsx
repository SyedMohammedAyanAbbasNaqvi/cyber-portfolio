import React, { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { RecruiterQuickScan } from "./RecruiterQuickScan";
import { CapabilityFilter, type FilterCategory } from "./CapabilityFilter";
import { CapabilityDomainPanel } from "./CapabilityDomainPanel";
import { Cpu } from "lucide-react";

export const CapabilityMatrixSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".matrix-anim-el", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 25,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (

    <section ref={sectionRef} id="capabilities" style={{ scrollMarginTop: "100px", position: "relative", overflow: "hidden" }}>
      {/* Oversized Chapter Watermark */}
      <div className="chapter-watermark" aria-hidden="true">02</div>

      {/* Chapter Header Tag */}
      <div

        className="matrix-anim-el"
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
        <Cpu size={14} />
        <span>CH. 02 // CAPABILITY MATRIX</span>
        <span style={{ color: "var(--color-surface-border)" }}>|</span>
        <span style={{ color: "var(--color-text-muted)" }}>SYSTEM ARCHITECTURE & SECURITY ARSENAL</span>
      </div>

      {/* Main Chapter Title & Subheading */}
      <h2
        className="matrix-anim-el"
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 900,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-2)",
        }}
      >
        TECHNICAL ARSENAL & CAPABILITIES
      </h2>

      <p
        className="matrix-anim-el"
        style={{
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-accent)",
          fontWeight: "bold",
          letterSpacing: "0.05em",
          marginBottom: "var(--space-6)",
        }}
      >
        "OFFENSIVE MECHANICS. DEFENSIVE OPERATIONS. THREAT DETECTION & AUTOMATION."
      </p>

      {/* 10-Second Recruiter Quick Scan Summary */}
      <div className="matrix-anim-el">
        <RecruiterQuickScan />
      </div>

      {/* Structural Domain Topology System Bar */}
      <div className="tactical-rule matrix-anim-el" style={{ margin: "var(--space-4) 0 var(--space-6) 0" }}>
        <span className="tactical-rule-label" style={{ color: "var(--color-text-muted)", fontSize: "10px" }}>
          TOPOLOGY // RED TEAM <span style={{ color: "var(--color-threat)" }}>───</span> BLUE TEAM <span style={{ color: "var(--color-surface-border)" }}>|</span> APP SEC <span style={{ color: "var(--color-accent)" }}>───</span> AI SECURITY
        </span>
      </div>

      {/* Filter Bar Controls */}
      <div className="matrix-anim-el">
        <CapabilityFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>


      {/* 4 Core Domain Cards Grid */}
      <div
        className="matrix-anim-el capability-matrix-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--space-6)",
        }}
      >
        {DOSSIER_DATA.capabilityDomains.map((domain) => {
          const isMatch = activeFilter === "ALL" || domain.category === activeFilter;
          return (
            <div
              key={domain.id}
              style={{
                opacity: isMatch ? 1 : 0.35,
                transform: isMatch ? "scale(1)" : "scale(0.98)",
                transition: "opacity var(--motion-normal), transform var(--motion-normal)",
              }}
            >
              <CapabilityDomainPanel domain={domain} />
            </div>
          );
        })}
      </div>


    </section>
  );
};
