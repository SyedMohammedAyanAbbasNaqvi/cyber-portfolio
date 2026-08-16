import React, { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { CredentialIndex } from "./CredentialIndex";
import { CredentialCard } from "./CredentialCard";
import { ShieldCheck } from "lucide-react";

export const ClearanceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".cred-anim-hdr", { opacity: 0, y: 15, stagger: 0.1, duration: 0.4, ease: "power2.out" })
        .from(".cred-anim-card", { opacity: 0, y: 20, stagger: 0.12, duration: 0.5, ease: "power3.out" }, "-=0.2")
        .from(".tactical-verification-stamp", { opacity: 0, scale: 1.4, rotate: -8, duration: 0.4, ease: "back.out(1.7)" }, "-=0.2");
    }, sectionRef);


    return () => ctx.revert();
  }, []);

  const credentials = DOSSIER_DATA.credentials;

  return (
    <section ref={sectionRef} id="clearance" style={{ scrollMarginTop: "100px", position: "relative", overflow: "hidden" }}>
      {/* Oversized Chapter Watermark */}
      <div className="chapter-watermark" aria-hidden="true">05</div>

      {/* Chapter Tag Header */}
      <div

        className="cred-anim-hdr"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-success)",
          fontWeight: "bold",
          letterSpacing: "0.08em",
          marginBottom: "var(--space-2)",
        }}
      >
        <ShieldCheck size={14} />
        <span>CH. 05 // CLEARANCE</span>
        <span style={{ color: "var(--color-surface-border)" }}>|</span>
        <span style={{ color: "var(--color-text-muted)" }}>CERTIFICATIONS & PROFESSIONAL PROOF</span>
      </div>

      {/* Main Chapter Title & Supporting Copy */}
      <h2
        className="cred-anim-hdr"
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 900,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-2)",
        }}
      >
        VERIFIED CREDENTIALS.
      </h2>

      <p
        className="cred-anim-hdr"
        style={{
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-text-muted)",
          lineHeight: "1.6",
          maxWidth: "760px",
          marginBottom: "var(--space-6)",
        }}
      >
        "Formal security certifications and practical training validating my offensive, defensive, and security operations capabilities."
      </p>

      {/* Dynamic Credential Metrics Bar */}
      <div className="cred-anim-hdr">
        <CredentialIndex credentials={credentials} />
      </div>

      {/* Clearance Cards Grid */}
      <div className="clearance-grid">
        {credentials.map((cred) => (
          <div key={cred.id} className="cred-anim-card">
            <CredentialCard credential={cred} />
          </div>
        ))}
      </div>

    </section>
  );
};
