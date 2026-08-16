import React, { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { GitCommit, Terminal, Shield, Cpu, Activity, ChevronRight, HelpCircle } from "lucide-react";

export const TechnicalEvolution: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [activeStageId, setActiveStageId] = useState<string>("evo-builder");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (!containerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Desktop SVG Path Drawing & ScrollTrigger Node Activation
      if (!isMobile && pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();

        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(pathRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
          strokeDashoffset: 0,
          ease: "none",
        });
      }

      // Staggered node cards reveal & active chapter tracking
      const nodes = gsap.utils.toArray<HTMLElement>(".evolution-node-card-wrapper");
      nodes.forEach((node, idx) => {
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: isMobile ? "top 90%" : "top 78%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              const stageId = node.getAttribute("data-stage-id");
              if (stageId) setActiveStageId(stageId);
            },
            onEnterBack: () => {
              const stageId = node.getAttribute("data-stage-id");
              if (stageId) setActiveStageId(stageId);
            },
          },
          opacity: 0,
          y: 30,
          duration: 0.5,
          delay: isMobile ? 0 : idx * 0.04,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (category: string, isTurningPoint?: boolean) => {
    if (isTurningPoint) return <HelpCircle size={14} style={{ color: "var(--color-threat)" }} />;
    switch (category) {
      case "BUILD": return <Terminal size={14} style={{ color: "var(--color-accent)" }} />;
      case "SECURITY": return <Shield size={14} style={{ color: "var(--color-threat)" }} />;
      case "OPERATIONS": return <Activity size={14} style={{ color: "var(--color-intelligence)" }} />;
      case "AI": return <Cpu size={14} style={{ color: "var(--color-intelligence)" }} />;
      default: return <GitCommit size={14} />;
    }
  };

  return (
    <div ref={containerRef} className="evolution-journey-container">

      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--color-surface-border)",
          paddingBottom: "var(--space-3)",
          marginBottom: "var(--space-6)",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
        }}
      >
        <div style={{ color: "var(--color-accent)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <GitCommit size={14} />
          <span>TECHNICAL EVOLUTION // STORY OF A SYSTEM BUILDER</span>
        </div>
        <div style={{ color: "var(--color-text-dim)", fontSize: "10px" }}>
          NARRATIVE JOURNEY // 07 CHAPTERS
        </div>
      </div>

      {/* Core Philosophy Banner */}
      <div
        style={{
          border: "1px solid var(--color-surface-border)",
          borderLeft: "3px solid var(--color-accent)",
          backgroundColor: "rgba(18, 22, 31, 0.7)",
          padding: "var(--space-4)",
          marginBottom: "var(--space-8)",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-text-muted)",
          lineHeight: "1.6",
        }}
      >
        <span style={{ color: "var(--color-accent)", fontWeight: "bold" }}>CORE PHILOSOPHY: </span>
        "I build systems. I study how they fail. I learn how attackers exploit those failures. I learn how defenders detect them. Then I build systems that help automate the response."
      </div>

      {/* SVG Connecting Path Line (Desktop & Responsive) */}
      <svg
        className="evolution-svg-line"
        viewBox="0 0 4 1000"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "4px" }}
      >
        <line x1="2" y1="0" x2="2" y2="1000" stroke="var(--color-surface-border)" strokeWidth="2" />
        <path
          ref={pathRef}
          d="M 2 0 L 2 1000"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
      </svg>

      {/* Evolution Nodes Timeline List */}
      <div className="evolution-nodes-grid">
        {DOSSIER_DATA.evolution.map((stage, idx) => {
          const isActive = activeStageId === stage.id;
          const isEven = idx % 2 === 0;
          const isTurningPoint = !!stage.turningPoint;

          return (
            <div
              key={stage.id}
              data-stage-id={stage.id}
              className={`evolution-node-card-wrapper ${isEven ? "even" : "odd"}`}
            >
              {/* Timeline Track Node Indicator Dot */}
              <div
                className={`evolution-timeline-node-dot ${isActive ? "active" : ""} ${isTurningPoint ? "turning-point" : ""}`}
                aria-hidden="true"
              />

              <div
                className={`evolution-node-card category-${stage.category} ${isActive ? "active" : "subdued"} ${isTurningPoint ? "turning-point" : ""}`}
              >

                {/* Node Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)", flexWrap: "wrap", gap: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold" }}>
                    <span style={{ color: "var(--color-text-dim)" }}>[{stage.step}]</span>
                    {getCategoryIcon(stage.category, isTurningPoint)}
                    <span style={{ color: isTurningPoint ? "var(--color-threat)" : "var(--color-text-primary)", letterSpacing: "0.02em" }}>{stage.title}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-family-mono)",
                        fontSize: "10px",
                        color: isTurningPoint ? "var(--color-threat)" : "var(--color-accent)",
                        border: isTurningPoint ? "1px solid var(--color-threat)" : "1px solid var(--color-surface-border)",
                        backgroundColor: isTurningPoint ? "rgba(255, 61, 0, 0.1)" : "transparent",
                        padding: "2px 6px",
                        fontWeight: isTurningPoint ? "bold" : "normal",
                      }}
                    >
                      {stage.period}
                    </span>
                  </div>
                </div>

                {/* Narrative Story Block */}
                {stage.narrative && stage.narrative.length > 0 && (
                  <div
                    style={{
                      marginBottom: "var(--space-4)",
                      padding: "var(--space-3)",
                      borderLeft: isTurningPoint ? "3px solid var(--color-threat)" : "2px solid var(--color-accent)",
                      backgroundColor: isTurningPoint ? "rgba(255, 61, 0, 0.07)" : "rgba(18, 22, 31, 0.5)",
                    }}
                  >
                    {stage.narrative.map((line, i) => (
                      <p
                        key={i}
                        style={{
                          fontFamily: isTurningPoint ? "var(--font-family-display)" : "var(--font-family-mono)",
                          fontSize: isTurningPoint ? "clamp(0.875rem, 1.2vw, 1.05rem)" : "var(--font-size-xs)",
                          fontWeight: isTurningPoint ? 700 : 400,
                          color: isTurningPoint ? (i >= 1 ? "var(--color-threat)" : "var(--color-text-primary)") : "var(--color-text-primary)",
                          lineHeight: "1.5",
                          marginBottom: i === stage.narrative!.length - 1 ? 0 : "4px",
                          letterSpacing: isTurningPoint ? "-0.01em" : "normal",
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {/* Technical Description */}
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", lineHeight: "1.5", marginBottom: "var(--space-3)" }}>
                  {stage.description}
                </p>

                {/* Highlights Bullet List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "var(--space-3)" }}>
                  {stage.highlights.map((h, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "var(--color-text-primary)", fontFamily: "var(--font-family-mono)" }}>
                      <ChevronRight size={10} style={{ color: isTurningPoint ? "var(--color-threat)" : "var(--color-accent)" }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Tag Array */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  {stage.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "10px",
                        padding: "2px 6px",
                        border: "1px solid var(--color-surface-border)",
                        backgroundColor: "var(--color-surface)",
                        fontFamily: "var(--font-family-mono)",
                        color: "var(--color-text-dim)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
