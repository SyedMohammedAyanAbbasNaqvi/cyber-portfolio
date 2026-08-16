import React, { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { UserCheck, ShieldCheck, Terminal, Compass } from "lucide-react";

export const IdentityChapter: React.FC = () => {
  const chapterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !chapterRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chapterRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".chapter-watermark", { opacity: 0, scale: 1.1, duration: 0.6, ease: "power2.out" })
        .from(".identity-anim-el", { opacity: 0, x: -15, stagger: 0.12, duration: 0.5, ease: "power3.out" }, "-=0.3")
        .from(".identity-narrative-box", { opacity: 0, x: -20, duration: 0.6, ease: "power3.out" }, "-=0.2");
    }, chapterRef);


    return () => ctx.revert();
  }, []);

  return (
    <section ref={chapterRef} className="identity-section" id="identity" style={{ position: "relative", overflow: "hidden" }}>
      {/* Oversized Chapter Watermark */}
      <div className="chapter-watermark" aria-hidden="true">01</div>

      {/* Chapter Tag Header */}
      <div

        className="identity-anim-el"
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
        <UserCheck size={14} />
        <span>CH. 01 // IDENTITY</span>
        <span style={{ color: "var(--color-surface-border)" }}>|</span>
        <span style={{ color: "var(--color-text-muted)" }}>HUMAN LAYER & CORE PHILOSOPHY</span>
      </div>

      {/* Main Chapter Title */}
      <h2
        className="identity-anim-el identity-title"
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 900,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-4)",
        }}
      >
        THE PERSON BEHIND THE INTERFACE
      </h2>

      {/* Narrative Lead & Copy */}
      <div className="identity-narrative-box">
        <p className="identity-paragraph-lead">
          "{DOSSIER_DATA.identity.narrativeSummary[0]}"
        </p>

        <p className="identity-paragraph">
          {DOSSIER_DATA.identity.narrativeSummary[1]}
        </p>

        <p className="identity-paragraph">
          {DOSSIER_DATA.identity.narrativeSummary[2]}
        </p>
      </div>

      {/* Human -> Engineer -> Security -> AI Pathway Strip */}
      <div
        className="identity-anim-el"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
          fontFamily: "var(--font-family-mono)",
          fontSize: "11px",
          color: "var(--color-text-dim)",
          border: "1px solid var(--color-surface-border)",
          backgroundColor: "rgba(18, 22, 31, 0.6)",
          padding: "var(--space-3) var(--space-4)",
          marginTop: "var(--space-6)",
          marginBottom: "var(--space-4)",
          flexWrap: "wrap",
          boxShadow: "3px 3px 0px var(--color-bg)",
        }}
      >
        <span style={{ color: "var(--color-text-primary)", fontWeight: "bold" }}>EVOLUTION PATHWAY:</span>
        <span style={{ color: "var(--color-text-muted)" }}>SOFTWARE FOUNDATION</span>
        <span style={{ color: "var(--color-accent)" }}>→</span>
        <span style={{ color: "var(--color-threat)", fontWeight: "bold" }}>RED TEAM / OFFENSE</span>
        <span style={{ color: "var(--color-accent)" }}>→</span>
        <span style={{ color: "var(--color-intelligence)", fontWeight: "bold" }}>BLUE TEAM / DEFENSE</span>
        <span style={{ color: "var(--color-accent)" }}>→</span>
        <span style={{ color: "var(--color-accent)", fontWeight: "bold" }}>AI SECURITY & AUTOMATION</span>
      </div>

      {/* Core Focus & Truthful Positioning Callout Grid */}
      <div
        className="identity-anim-el"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "var(--space-4)",
          marginTop: "var(--space-4)",
        }}
      >

        <div
          style={{
            border: "1px solid var(--color-surface-border)",
            backgroundColor: "var(--color-surface)",
            padding: "var(--space-4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-threat)", fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", marginBottom: "8px" }}>
            <ShieldCheck size={14} />
            <span>01 / RED TEAM & APP SEC</span>
          </div>
          <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
            Analyzing web application vulnerabilities, authentication boundaries, and adversary attack vectors to evaluate software resilience.
          </p>
        </div>

        <div
          style={{
            border: "1px solid var(--color-surface-border)",
            backgroundColor: "var(--color-surface)",
            padding: "var(--space-4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-intelligence)", fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", marginBottom: "8px" }}>
            <Terminal size={14} />
            <span>02 / BLUE TEAM & DEFENSE</span>
          </div>
          <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
            Monitoring security telemetry, conducting threat triage, threat hunting, and hardening systems against active risks.
          </p>
        </div>

        <div
          style={{
            border: "1px solid var(--color-surface-border)",
            backgroundColor: "var(--color-surface)",
            padding: "var(--space-4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-accent)", fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", marginBottom: "8px" }}>
            <Compass size={14} />
            <span>03 / AI SECURITY & AUTOMATION</span>
          </div>
          <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
            Building AI-assisted security workflows, automated threat analysis tooling (SENTINEL), and agentic operational systems (JARVIS).
          </p>
        </div>
      </div>
    </section>
  );
};
