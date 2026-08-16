import React, { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { TerminalContactForm } from "./TerminalContactForm";
import { RecruiterAccessPanel } from "./RecruiterAccessPanel";
import { Radio } from "lucide-react";

export const AccessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".acc-anim-hdr", {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleFocusForm = () => {
    if (nameInputRef.current) {
      nameInputRef.current.scrollIntoView({ behavior: "smooth" });
      nameInputRef.current.focus({ preventScroll: true });
    }
  };

  const contact = DOSSIER_DATA.contact;

  return (
    <section ref={sectionRef} id="access" style={{ scrollMarginTop: "100px", position: "relative", overflow: "hidden" }}>
      {/* Oversized Chapter Watermark */}
      <div className="chapter-watermark" aria-hidden="true">06</div>

      {/* Chapter Tag Header */}
      <div

        className="acc-anim-hdr"
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
        <span>CH. 06 // ACCESS</span>
        <span style={{ color: "var(--color-surface-border)" }}>|</span>
        <span style={{ color: "var(--color-text-muted)" }}>CONTACT & RECRUITER TRANSMISSION</span>
      </div>

      {/* Main Chapter Title & Supporting Copy */}
      <h2
        className="acc-anim-hdr"
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 900,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-2)",
        }}
      >
        REQUEST CLEARANCE TO CONNECT.
      </h2>

      <p
        className="acc-anim-hdr"
        style={{
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-intelligence)",
          lineHeight: "1.6",
          maxWidth: "760px",
          marginBottom: "var(--space-6)",
        }}
      >
        "If something here is worth discussing, open a channel."
      </p>

      {/* Editorial Split Layout: Left Form + Right Recruiter Access Panel */}
      <div className="acc-anim-hdr access-split-grid">
        <TerminalContactForm contact={contact} inputRef={nameInputRef} />
        <RecruiterAccessPanel contact={contact} onFocusForm={handleFocusForm} />
      </div>

    </section>
  );
};
