import React from "react";
import { DOSSIER_DATA } from "../../data/dossierData";
import { Zap, Terminal, Shield, ShieldAlert, Cpu } from "lucide-react";

export const RecruiterQuickScan: React.FC = () => {
  const getDomainIcon = (category: string) => {
    switch (category) {
      case "BUILD": return <Terminal size={14} style={{ color: "var(--color-accent)" }} />;
      case "DEFEND": return <Shield size={14} style={{ color: "var(--color-intelligence)" }} />;
      case "ATTACK": return <ShieldAlert size={14} style={{ color: "var(--color-threat)" }} />;
      case "AUTOMATE": return <Cpu size={14} style={{ color: "var(--color-intelligence)" }} />;
      default: return <Zap size={14} />;
    }
  };

  return (
    <div
      style={{
        border: "1px solid var(--color-surface-border)",
        backgroundColor: "var(--color-surface)",
        padding: "var(--space-6)",
        marginBottom: "var(--space-8)",
      }}
    >
      {/* Header Bar */}
      <div
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
        <div style={{ color: "var(--color-accent)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <Zap size={14} />
          <span>RECRUITER QUICK SCAN // TECHNICAL AT-A-GLANCE</span>
        </div>
        <div style={{ color: "var(--color-text-dim)", fontSize: "10px" }}>
          ESTIMATED SCAN TIME: 10 SECONDS
        </div>
      </div>

      {/* 4 Summary Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        {DOSSIER_DATA.capabilityDomains.map((domain) => (
          <div
            key={domain.id}
            style={{
              border: "1px solid var(--color-surface-border)",
              backgroundColor: "var(--color-bg)",
              padding: "var(--space-4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", color: domain.accentColor, marginBottom: "var(--space-2)" }}>
              {getDomainIcon(domain.category)}
              <span>{domain.name}</span>
            </div>

            <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", marginBottom: "var(--space-3)", lineHeight: "1.4" }}>
              {domain.summary}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {domain.quickSummary.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "10px",
                    padding: "2px 6px",
                    border: "1px solid var(--color-surface-border)",
                    backgroundColor: "var(--color-surface)",
                    fontFamily: "var(--font-family-mono)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
