import React, { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import type { OperationData } from "../../types/dossier";
import { StatusBadge } from "../primitives/StatusBadge";
import { CapabilityStateBadge } from "../capability/CapabilityStateBadge";
import { Shield, ArrowRight, ExternalLink, Activity, Lock } from "lucide-react";

export interface SentinelOperationCardProps {
  operation: OperationData;
  onPendingCtaClick?: () => void;
}

export const SentinelOperationCard: React.FC<SentinelOperationCardProps> = ({
  operation,
  onPendingCtaClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Scoped GSAP "Investigation" Entrance Reveal
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !cardRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".s-anim-frame", { opacity: 0, y: 15, duration: 0.4 })
        .from(".s-anim-title", { opacity: 0, x: -20, duration: 0.5 }, "-=0.2")
        .from(".s-anim-graph", { opacity: 0, scale: 0.95, duration: 0.5 }, "-=0.2")
        .from(".s-anim-feat", { opacity: 0, y: 15, stagger: 0.08, duration: 0.4 }, "-=0.2")
        .from(".s-anim-cta", { opacity: 0, y: 10, duration: 0.4 }, "-=0.2");
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    if (operation.url) {
      window.open(operation.url, "_blank", "noopener,noreferrer");
    } else {
      onPendingCtaClick?.();
    }
  };

  return (
    <article
      ref={cardRef}
      id={operation.anchorId}
      className="operation-flagship-card sentinel-card"
      style={{ scrollMarginTop: "100px" }}
    >
      {/* Operation 02 Watermark Number */}
      <div className="card-operation-watermark" aria-hidden="true">02</div>

      {/* Top Header Tag */}
      <div
        className="s-anim-frame"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--color-surface-border)",
          paddingBottom: "var(--space-3)",
          marginBottom: "var(--space-4)",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
        }}
      >
        <div style={{ color: "var(--color-intelligence)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <Shield size={14} />
          <span>OPERATION // 02 — {operation.codename}</span>
          <span style={{ color: "var(--color-text-dim)" }}>|</span>
          <span style={{ color: "var(--color-text-muted)" }}>{operation.classification}</span>
        </div>

        <StatusBadge status={operation.status} />
      </div>

      {/* Operation Title & Core Slogan */}
      <div className="s-anim-title" style={{ marginBottom: "var(--space-4)" }}>
        <h3
          style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            fontWeight: 900,
            color: "var(--color-text-primary)",
            lineHeight: 0.9,
            letterSpacing: "0.08em",
            marginBottom: "var(--space-2)",
            textTransform: "uppercase",
          }}
        >
          S E N T I N E L
        </h3>
        <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-intelligence)", fontWeight: "bold", letterSpacing: "0.05em" }}>
          "{operation.coreTagline}"
        </div>
      </div>

      {/* Technical System Status Grid */}
      <div className="s-anim-frame system-status-grid">
        <div className="system-status-item">
          <span className="system-status-key">SYSTEM CLASS:</span>
          <span className="system-status-val" style={{ color: "var(--color-intelligence)" }}>AI SOC ANALYST</span>
        </div>
        <div className="system-status-item">
          <span className="system-status-key">SIGNAL MODE:</span>
          <span className="system-status-val">CORRELATION & TRIAGE</span>
        </div>
        <div className="system-status-item">
          <span className="system-status-key">STATUS:</span>
          <span className="system-status-val" style={{ color: "var(--color-success)" }}>ACTIVE SYSTEM</span>
        </div>
        <div className="system-status-item">
          <span className="system-status-key">ACCESS STATE:</span>
          <span className="system-status-val">{operation.url ? "ONLINE" : "PENDING"}</span>
        </div>
      </div>

      {/* Detailed Description */}
      <p
        className="s-anim-title"
        style={{
          fontSize: "var(--font-size-sm)",
          color: "var(--color-text-muted)",
          lineHeight: "1.6",
          maxWidth: "800px",
          marginBottom: "var(--space-6)",
        }}
      >
        {operation.description}
      </p>

      {/* Investigation Signal Correlation Diagram (Pure HTML/CSS/SVG) */}
      <div className="s-anim-graph architecture-flow-container">
        <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-intelligence)", fontWeight: "bold", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "6px" }}>
          <Activity size={12} className="animate-corner-pulse" />
          <span>INVESTIGATION WORKSPACE // SIGNAL CORRELATION FLOW</span>
        </div>

        <div className="architecture-flow-grid">
          {operation.architectureNodes.map((node, idx) => (
            <React.Fragment key={node.id}>
              <div className="architecture-node-box" tabIndex={0} role="region" aria-label={`Architecture node: ${node.label}`}>
                <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", color: "var(--color-text-primary)" }}>
                  {node.label}
                </div>
                <div style={{ fontSize: "10px", color: "var(--color-text-dim)", marginTop: "2px" }}>
                  {node.subtext}
                </div>
              </div>

              {idx < operation.architectureNodes.length - 1 && (
                <div className="architecture-arrow" aria-hidden="true">
                  <ArrowRight size={14} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Feature Matrix */}
      <div className="s-anim-feat">
        <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", fontWeight: "bold", marginBottom: "var(--space-2)" }}>
          SECURITY ANALYSIS CAPABILITIES:
        </div>

        <div className="feature-matrix-grid">
          {operation.features.map((feat) => (
            <div key={feat.id} className="feature-matrix-item">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-intelligence)", fontWeight: "bold" }}>
                  {feat.category}
                </span>
                <CapabilityStateBadge state={feat.state} size="sm" />
              </div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", color: "var(--color-text-primary)", marginBottom: "4px" }}>
                {feat.name}
              </div>
              <p style={{ fontSize: "11px", color: "var(--color-text-muted)", lineHeight: "1.4" }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Tags & Main CTA */}
      <div
        className="s-anim-cta"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "var(--space-4)",
          marginTop: "var(--space-6)",
          paddingTop: "var(--space-4)",
          borderTop: "1px solid var(--color-surface-border)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {operation.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "10px",
                padding: "3px 8px",
                border: "1px solid var(--color-surface-border)",
                backgroundColor: "var(--color-surface)",
                fontFamily: "var(--font-family-mono)",
                color: "var(--color-text-primary)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Primary Investigation CTA */}
        <button
          type="button"
          onClick={handleCtaClick}
          className={`operation-cta-btn ${operation.url ? "active-sentinel" : "pending"}`}
        >
          {operation.url ? (
            <>
              <span>DEPLOY: SENTINEL</span>
              <ExternalLink size={16} />
            </>
          ) : (
            <>
              <Lock size={14} />
              <span>ACCESS PENDING // REQUEST ACCESS</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};
