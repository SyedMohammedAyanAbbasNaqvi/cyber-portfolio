import React from "react";
import type { Credential } from "../../types/dossier";
import { StatusBadge } from "../primitives/StatusBadge";
import { CheckCircle, ExternalLink, Link2, Terminal } from "lucide-react";
import { getLenis } from "../../lib/lenis";

export interface CredentialCardProps {
  credential: Credential;
}

export const CredentialCard: React.FC<CredentialCardProps> = ({ credential }) => {
  const handleAnchorClick = (e: React.MouseEvent, anchorId: string) => {
    e.preventDefault();
    const targetId = anchorId.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(targetEl);
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <article className="clearance-record-card">
      {/* Top Header Tag */}
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
        <span style={{ color: "var(--color-accent)", fontWeight: "bold" }}>
          {credential.number}
        </span>

        <StatusBadge status={credential.status} size="sm" />
      </div>

      {/* Main Issuer & Credential Title */}
      <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
        <div className="issuer-initials-box">{credential.initials}</div>
        <div>
          <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-dim)", fontWeight: "bold" }}>
            ISSUER: {credential.issuer}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "var(--font-size-lg)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              lineHeight: 1.25,
              marginTop: "2px",
            }}
          >
            {credential.name}
          </h3>
          {credential.issueDate && (
            <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-muted)", marginTop: "4px" }}>
              DATE: {credential.issueDate}
            </div>
          )}
          {credential.credentialId && (
            <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-accent)", marginTop: "2px", fontWeight: "bold" }}>
              TID: {credential.credentialId}
            </div>
          )}
          {credential.documentIdentifier && (
            <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-dim)", marginTop: "2px" }}>
              DOC ID: {credential.documentIdentifier}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "var(--font-size-xs)",
          color: "var(--color-text-muted)",
          lineHeight: "1.5",
          marginBottom: "var(--space-4)",
        }}
      >
        {credential.description}
      </p>

      {/* Skills / Verified Topics List */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "var(--space-4)" }}>
        {credential.skills.map((s) => (
          <span
            key={s}
            style={{
              fontSize: "10px",
              padding: "2px 6px",
              border: "1px solid var(--color-surface-border)",
              backgroundColor: "var(--color-surface)",
              fontFamily: "var(--font-family-mono)",
              color: "var(--color-text-primary)",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Tactical Verification Stamp */}
      <div style={{ marginBottom: "var(--space-4)" }}>
        <div className="tactical-verification-stamp">
          <CheckCircle size={12} />
          <span>VERIFIED AUDIT RECORD</span>
        </div>
      </div>

      {/* Evidence Anchor Connection */}
      {credential.evidenceAnchor && credential.evidenceLabel && (
        <div style={{ marginBottom: "var(--space-4)", paddingTop: "var(--space-2)", borderTop: "1px dashed var(--color-surface-border)" }}>
          <a
            href={credential.evidenceAnchor}
            onClick={(e) => handleAnchorClick(e, credential.evidenceAnchor!)}
            style={{
              fontFamily: "var(--font-family-mono)",
              fontSize: "10px",
              color: "var(--color-intelligence)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: "bold",
            }}
          >
            <Link2 size={12} />
            <span>→ EVIDENCE LINK: {credential.evidenceLabel}</span>
          </a>
        </div>
      )}

      {/* Action CTA: Verification URL or Link Not Provided */}
      <div style={{ marginTop: "auto", paddingTop: "var(--space-3)", borderTop: "1px solid var(--color-surface-border)" }}>
        {credential.verificationUrl ? (
          <a
            href={credential.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-family-mono)",
              fontSize: "var(--font-size-xs)",
              fontWeight: "bold",
              color: "var(--color-accent)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span>VERIFY CREDENTIAL</span>
            <ExternalLink size={12} />
          </a>
        ) : (
          <div
            style={{
              fontFamily: "var(--font-family-mono)",
              fontSize: "10px",
              color: "var(--color-text-dim)",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Terminal size={12} />
            <span>VERIFICATION LINK NOT PROVIDED</span>
          </div>
        )}
      </div>
    </article>
  );
};
