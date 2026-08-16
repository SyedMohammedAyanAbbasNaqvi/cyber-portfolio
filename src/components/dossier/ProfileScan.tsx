import React, { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { StatusBadge } from "../primitives/StatusBadge";
import { Activity, CheckCircle2, ShieldAlert, Cpu, FileCheck } from "lucide-react";

export const ProfileScan: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".scan-row-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getIconForScan = (id: string) => {
    switch (id) {
      case "ps-eng": return <FileCheck size={14} style={{ color: "var(--color-success)" }} />;
      case "ps-sec": return <ShieldAlert size={14} style={{ color: "var(--color-threat)" }} />;
      case "ps-ai": return <Cpu size={14} style={{ color: "var(--color-intelligence)" }} />;
      case "ps-dep": return <Activity size={14} style={{ color: "var(--color-accent)" }} />;
      case "ps-syn": return <CheckCircle2 size={14} style={{ color: "var(--color-success)" }} />;
      default: return <Activity size={14} />;
    }
  };

  return (
    <div ref={containerRef} className="profile-scan-container">
      {/* Header bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--color-surface-border)",
          paddingBottom: "var(--space-3)",
          marginBottom: "var(--space-3)",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
        }}
      >
        <div style={{ color: "var(--color-intelligence)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <Activity size={14} className="animate-corner-pulse" />
          <span>SYSTEM TELEMETRY // PROFILE SCAN</span>
        </div>
        <div style={{ color: "var(--color-text-dim)", fontSize: "10px" }}>
          SYS.VERIFY // 200 OK
        </div>
      </div>

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {DOSSIER_DATA.profileScan.map((metric) => (
          <div key={metric.id} className="scan-row-item profile-scan-row">
            
            {/* Label */}
            <div className="profile-scan-label">
              {getIconForScan(metric.id)}
              <span>{metric.label}</span>
            </div>

            {/* Dotted progress line & Value */}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", overflow: "hidden" }}>
              <span className="profile-scan-value">{metric.value}</span>
              <span className="profile-scan-dots">...........................................................................</span>
            </div>

            {/* Status Badge */}
            <div>
              <StatusBadge status={metric.status} size="sm" />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
