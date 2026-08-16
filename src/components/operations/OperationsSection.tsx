import React, { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { JarvisOperationCard } from "./JarvisOperationCard";
import { SentinelOperationCard } from "./SentinelOperationCard";
import { Radio } from "lucide-react";

export const OperationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".ops-hdr-el", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.6,
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

  const jarvisData = DOSSIER_DATA.flagshipOperations.find((op) => op.id === "op-jarvis");
  const sentinelData = DOSSIER_DATA.flagshipOperations.find((op) => op.id === "op-sentinel");

  return (
    <section ref={sectionRef} id="operations" style={{ scrollMarginTop: "100px", position: "relative", overflow: "hidden" }}>
      {/* Oversized Chapter Watermark */}
      <div className="chapter-watermark" aria-hidden="true">03</div>

      {/* Chapter Tag Header */}
      <div
        className="ops-hdr-el"
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
        <Radio size={14} className="animate-corner-pulse" />
        <span>CH. 03 // OPERATIONS</span>
        <span style={{ color: "var(--color-surface-border)" }}>|</span>
        <span style={{ color: "var(--color-text-muted)" }}>FLAGSHIP INTELLIGENCE PLATFORMS</span>
      </div>

      {/* Main Chapter Title & Subtext */}
      <h2
        className="ops-hdr-el"
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          fontWeight: 900,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: "var(--space-2)",
          textTransform: "uppercase",
        }}
      >
        ACTIVE SYSTEM DEPLOYMENTS
      </h2>

      <p
        className="ops-hdr-el"
        style={{
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-intelligence)",
          lineHeight: "1.6",
          maxWidth: "760px",
          marginBottom: "var(--space-8)",
        }}
      >
        "These are not static portfolio mockups. They are active, architected systems spanning multi-LLM automation and AI SOC triage."
      </p>

      {/* Flagship Operation 01: JARVIS */}
      {jarvisData && (
        <JarvisOperationCard
          operation={jarvisData}
          onPendingCtaClick={handlePendingCtaClick}
        />
      )}

      {/* System Transition Divider */}
      <div className="tactical-rule" style={{ margin: "var(--space-12) 0" }}>
        <span className="tactical-rule-label" style={{ color: "var(--color-intelligence)" }}>
          OPERATION TRANSITION // AUTOMATION (ORANGE) → DEFENSE (CYAN)
        </span>
      </div>

      {/* Flagship Operation 02: SENTINEL */}
      {sentinelData && (
        <SentinelOperationCard
          operation={sentinelData}
          onPendingCtaClick={handlePendingCtaClick}
        />
      )}

    </section>
  );
};
