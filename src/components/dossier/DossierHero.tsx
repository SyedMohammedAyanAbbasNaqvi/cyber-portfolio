import React, { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { SplitText } from "../../lib/textSplitting";
import { Terminal, Shield, ChevronDown } from "lucide-react";

export interface DossierHeroProps {
  onScrollClick?: () => void;
}



export const DossierHero: React.FC<DossierHeroProps> = ({ onScrollClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const [scrolledAway, setScrolledAway] = useState<boolean>(false);

  // GSAP Entrance & Scroll-Driven Video Fade Out Animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-frame-tag", { opacity: 0, y: -10, duration: 0.35 }, 0.1)
        .from(".dossier-title-hero .split-word", { opacity: 0, y: 25, stagger: 0.15, duration: 0.5 }, 0.25)
        .from(".hero-role-el", { opacity: 0, x: -15, duration: 0.4 }, 0.65)
        .from(".pillar-el", { opacity: 0, y: 10, stagger: 0.08, duration: 0.35 }, 0.85)
        .from(".scroll-cue-el", { opacity: 0, y: 10, duration: 0.4 }, 1.1);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle Scroll Cue Hide on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolledAway(true);
      } else {
        setScrolledAway(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="dossier-hero-container" style={{ position: "relative" }}>





      {/* Corner Registration Crosshair Marks */}
      <div className="reg-mark reg-mark-top-left" aria-hidden="true">+</div>
      <div className="reg-mark reg-mark-top-right" aria-hidden="true">+</div>
      <div className="reg-mark reg-mark-bottom-left" aria-hidden="true">+</div>
      <div className="reg-mark reg-mark-bottom-right" aria-hidden="true">+</div>

      <div className="dossier-hero-grid">
        {/* Left Editorial Section: Name, Role & Positioning */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          
          {/* Top Dossier System Tag */}
          <div
            className="hero-frame-tag"
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
            <Terminal size={14} />
            <span>DOSSIER // 001</span>
            <span style={{ color: "var(--color-surface-border)" }}>|</span>
            <span style={{ color: "var(--color-text-muted)" }}>STATUS: ACTIVE</span>
          </div>

          {/* Name Display */}
          <h1 className="dossier-title-hero">
            <SplitText text={DOSSIER_DATA.identity.name} mode="words" />
          </h1>

          {/* Professional Role */}
          <div className="hero-role-el dossier-role-hero">
            <Shield size={18} style={{ color: "var(--color-accent)" }} />
            <span>{DOSSIER_DATA.identity.title}</span>
          </div>

          {/* Core Positioning Pillars */}
          <div className="dossier-pillars">
            {DOSSIER_DATA.identity.pillars.map((pillar) => (
              <div key={pillar} className="pillar-el dossier-pillar-tag">
                <span style={{ color: "var(--color-accent)" }}>×</span>
                <span>{pillar}</span>
              </div>
            ))}
          </div>

          {/* Short Positioning Subtext */}
          <p
            className="hero-role-el"
            style={{
              fontFamily: "var(--font-family-mono)",
              fontSize: "var(--font-size-xs)",
              color: "var(--color-text-muted)",
              maxWidth: "680px",
              lineHeight: "1.6",
            }}
          >
            OFFENSIVE SECURITY × DEFENSIVE SECURITY × AI SECURITY
          </p>
        </div>
      </div>

      {/* Scroll Cue Indicator */}
      <div
        ref={scrollCueRef}
        className="scroll-cue-el scroll-cue"
        style={{ opacity: scrolledAway ? 0 : 1 }}
        onClick={onScrollClick}
      >
        <span>SCROLL TO INVESTIGATE</span>
        <ChevronDown size={16} className="scroll-cue-arrow" />
      </div>
    </div>
  );
};
