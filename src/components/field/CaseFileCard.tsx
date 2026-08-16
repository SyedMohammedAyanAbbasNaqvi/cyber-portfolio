import React, { useState } from "react";
import type { ProjectCaseFile } from "../../types/dossier";
import { StatusBadge } from "../primitives/StatusBadge";
import { ChevronDown, ChevronUp, ExternalLink, Terminal, Shield, Cpu, Server } from "lucide-react";

export interface CaseFileCardProps {
  caseFile: ProjectCaseFile;
  onPendingCtaClick?: () => void;
}

export const CaseFileCard: React.FC<CaseFileCardProps> = ({ caseFile, onPendingCtaClick }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "RED TEAM":
      case "SECURITY":
        return <Shield size={14} style={{ color: "var(--color-threat)" }} />;
      case "BLUE TEAM":
      case "AI":
        return <Cpu size={14} style={{ color: "var(--color-intelligence)" }} />;
      default:
        return <Server size={14} style={{ color: "var(--color-accent)" }} />;
    }
  };

  const getCategoryAccent = (category: string) => {
    switch (category) {
      case "RED TEAM":
      case "SECURITY":
        return "var(--color-threat)";
      case "BLUE TEAM":
      case "AI":
        return "var(--color-intelligence)";
      default:
        return "var(--color-accent)";
    }
  };

  const accentColor = getCategoryAccent(caseFile.category);

  return (
    <article
      className={`field-case-card ${caseFile.featured ? "is-featured" : ""}`}
      style={{ "--card-accent-color": accentColor } as React.CSSProperties}
    >
      {/* Top Header Bar */}
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
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: accentColor, fontWeight: "bold" }}>
          {getCategoryIcon(caseFile.category)}
          <span>{caseFile.number}</span>
          <span style={{ color: "var(--color-text-dim)" }}>|</span>
          <span style={{ color: "var(--color-text-muted)" }}>{caseFile.classification}</span>
        </div>

        <StatusBadge status={caseFile.status} size="sm" />
      </div>

      {/* Project Title & Summary */}
      <div style={{ marginBottom: "var(--space-4)" }}>
        {caseFile.featured && (
          <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-accent)", fontWeight: "bold", marginBottom: "4px" }}>
            [ FEATURED FIELD CASE ]
          </div>
        )}
        <h3
          style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "var(--font-size-xl)",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-2)",
            lineHeight: 1.2,
          }}
        >
          {caseFile.title}
        </h3>

        <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
          {caseFile.summary}
        </p>
      </div>

      {/* Technology Tags List */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "var(--space-4)" }}>
        {caseFile.technologies.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "10px",
              padding: "2px 6px",
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

      {/* Expand / Collapse Button */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="case-expand-toggle-btn"
        aria-expanded={isExpanded}
        aria-controls={`case-details-${caseFile.id}`}
      >
        <span>{isExpanded ? ">> COLLAPSE CASE" : ">> VIEW CASE DETAILS"}</span>
        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {/* Expanded Accordion Panel */}
      {isExpanded && (
        <div id={`case-details-${caseFile.id}`} className="case-expanded-content">
          
          {/* Problem Statement */}
          <div style={{ marginBottom: "var(--space-3)" }}>
            <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-dim)", fontWeight: "bold", marginBottom: "2px" }}>
              CHALLENGE / PROBLEM:
            </div>
            <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
              {caseFile.problem}
            </p>
          </div>

          {/* Solution Narrative */}
          <div style={{ marginBottom: "var(--space-3)" }}>
            <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: accentColor, fontWeight: "bold", marginBottom: "2px" }}>
              ENGINEERED SOLUTION:
            </div>
            <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-primary)", lineHeight: "1.5" }}>
              {caseFile.solution}
            </p>
          </div>

          {/* Technical Approach Highlights */}
          <div style={{ marginBottom: "var(--space-4)" }}>
            <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-dim)", fontWeight: "bold", marginBottom: "4px" }}>
              TECHNICAL APPROACH:
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {caseFile.technicalApproach.map((item, idx) => (
                <li key={idx} style={{ fontSize: "11px", color: "var(--color-text-muted)", display: "flex", alignItems: "flex-start", gap: "6px" }}>
                  <span style={{ color: accentColor, fontFamily: "var(--font-family-mono)" }}>›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", paddingTop: "var(--space-2)", borderTop: "1px dashed var(--color-surface-border)" }}>
            {caseFile.liveUrl ? (
              <a
                href={caseFile.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "var(--color-bg)",
                  backgroundColor: accentColor,
                  padding: "6px 12px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>VIEW LIVE</span>
                <ExternalLink size={12} />
              </a>
            ) : caseFile.githubUrl ? (
              <a
                href={caseFile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "var(--color-text-primary)",
                  border: "1px solid var(--color-surface-border)",
                  backgroundColor: "var(--color-surface)",
                  padding: "6px 12px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>SOURCE CODE</span>
                <ExternalLink size={12} />
              </a>
            ) : (
              <button
                type="button"
                onClick={onPendingCtaClick}
                style={{
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "var(--color-text-muted)",
                  border: "1px solid var(--color-surface-border)",
                  backgroundColor: "var(--color-surface)",
                  padding: "6px 12px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Terminal size={12} />
                <span>ACCESS PENDING // DEPLOYMENT OFFLINE</span>
              </button>
            )}
          </div>

        </div>
      )}
    </article>
  );
};
