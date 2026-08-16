import React, { useState } from "react";
import type { CapabilityDomain } from "../../types/dossier";
import { CapabilityStateBadge } from "./CapabilityStateBadge";
import { Terminal, Shield, ShieldAlert, Cpu, ChevronDown, ChevronUp, ExternalLink, Tag } from "lucide-react";

export interface CapabilityDomainPanelProps {
  domain: CapabilityDomain;
}

export const CapabilityDomainPanel: React.FC<CapabilityDomainPanelProps> = ({ domain }) => {
  // Track expanded item IDs for 2-layer view
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (itemId: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleAnchorClick = (e: React.MouseEvent, anchorId?: string) => {
    e.stopPropagation();
    if (!anchorId) return;
    const targetEl = document.getElementById(anchorId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getDomainIcon = (category: string) => {
    switch (category) {
      case "BUILD": return <Terminal size={16} style={{ color: domain.accentColor }} />;
      case "DEFEND": return <Shield size={16} style={{ color: domain.accentColor }} />;
      case "ATTACK": return <ShieldAlert size={16} style={{ color: domain.accentColor }} />;
      case "AUTOMATE": return <Cpu size={16} style={{ color: domain.accentColor }} />;
      default: return <Terminal size={16} />;
    }
  };

  return (
    <div
      className="capability-domain-card"
      style={{
        border: "1px solid var(--color-surface-border)",
        backgroundColor: "var(--color-bg)",
        padding: "var(--space-6)",
        position: "relative",
      }}
    >
      {/* Domain Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `2px solid ${domain.accentColor}`,
          paddingBottom: "var(--space-3)",
          marginBottom: "var(--space-4)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          {getDomainIcon(domain.category)}
          <div>
            <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: domain.accentColor, fontWeight: "bold" }}>
              DOM // [{domain.num}]
            </div>
            <h3
              style={{
                fontFamily: "var(--font-family-display)",
                fontSize: "var(--font-size-lg)",
                fontWeight: 900,
                color: "var(--color-text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              {domain.name}
            </h3>
          </div>
        </div>

        <span
          style={{
            fontFamily: "var(--font-family-mono)",
            fontSize: "10px",
            padding: "2px 8px",
            border: "1px solid var(--color-surface-border)",
            backgroundColor: "var(--color-surface)",
            color: "var(--color-text-muted)",
          }}
        >
          {domain.category}
        </span>
      </div>

      {/* Subtitle & Summary */}
      <div style={{ marginBottom: "var(--space-4)" }}>
        <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-dim)", marginBottom: "4px" }}>
          {domain.subtitle}
        </div>
        <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
          {domain.summary}
        </p>
      </div>

      {/* Capability Items Grid / List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {domain.items.map((item) => {
          const isExpanded = !!expandedIds[item.id];

          return (
            <div
              key={item.id}
              style={{
                border: "1px solid var(--color-surface-border)",
                backgroundColor: "var(--color-surface)",
                transition: "all var(--motion-fast)",
              }}
            >
              {/* Layer 1: Header / Trigger Button */}
              <button
                type="button"
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "var(--space-3) var(--space-4)",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  fontFamily: "inherit",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-dim)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Tag size={10} />
                    {item.categoryTag}
                  </span>
                  <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", color: "var(--color-text-primary)" }}>
                    {item.name}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <CapabilityStateBadge state={item.state} size="sm" />
                  <span style={{ color: "var(--color-text-dim)" }}>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </span>
                </div>
              </button>

              {/* Layer 2: Expanded Detailed Context */}
              {isExpanded && (
                <div
                  style={{
                    padding: "var(--space-4)",
                    borderTop: "1px dashed var(--color-surface-border)",
                    backgroundColor: "var(--color-bg)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-3)",
                  }}
                >
                  <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                    {item.description}
                  </p>

                  {/* Tools array */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                    {item.tools.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "10px",
                          padding: "2px 6px",
                          border: "1px solid var(--color-surface-border)",
                          backgroundColor: "var(--color-surface)",
                          fontFamily: "var(--font-family-mono)",
                          color: "var(--color-accent)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Evidence Anchor Link */}
                  {item.evidenceLabel && (
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
                      <button
                        type="button"
                        onClick={(e) => handleAnchorClick(e, item.evidenceAnchor)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--color-intelligence)",
                          fontFamily: "var(--font-family-mono)",
                          fontSize: "10px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "2px 6px",
                        }}
                      >
                        <span>EVIDENCE: [{item.evidenceLabel}]</span>
                        <ExternalLink size={10} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
