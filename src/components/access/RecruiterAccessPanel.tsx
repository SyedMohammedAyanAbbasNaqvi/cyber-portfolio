import React from "react";
import type { ContactConfig } from "../../types/dossier";
import { ExternalLink, Mail, Lock, MapPin, Clock } from "lucide-react";

export interface RecruiterAccessPanelProps {
  contact: ContactConfig;
  onFocusForm?: () => void;
}

export const RecruiterAccessPanel: React.FC<RecruiterAccessPanelProps> = ({ contact, onFocusForm }) => {
  return (
    <div className="recruiter-access-panel" style={{ scrollMarginTop: "100px" }}>

      {/* Availability Status */}
      <div>
        <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-sm)", fontWeight: "bold", color: "var(--color-text-primary)", marginBottom: "var(--space-3)" }}>
          AVAILABILITY: <span style={{ color: "var(--color-success)" }}>{contact.availability}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", fontFamily: "var(--font-family-mono)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <MapPin size={12} style={{ color: "var(--color-text-dim)" }} />
            <span>NODE: {contact.location}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Clock size={12} style={{ color: "var(--color-text-dim)" }} />
            <span>RESPONSE WINDOW: {contact.responseWindow}</span>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>

        {/* Direct Email Action */}
        {contact.email ? (
          <a href={`mailto:${contact.email}`} className="recruiter-action-btn">
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Mail size={14} />
              <span>DIRECT EMAIL</span>
            </span>
            <span>↗</span>
          </a>
        ) : (
          <div className="recruiter-action-btn pending">
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Lock size={14} />
              <span>EMAIL CHANNEL PENDING</span>
            </span>
          </div>
        )}

        {/* GitHub Dedicated Access Card */}
        {contact.github ? (
          <div
            style={{
              border: "1px solid var(--color-surface-border)",
              backgroundColor: "var(--color-bg)",
              padding: "var(--space-3)",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", color: "var(--color-text-primary)" }}>
                GITHUB
              </span>
              <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-dim)" }}>
                CODE / SECURITY / SYSTEMS
              </span>
            </div>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="recruiter-action-btn"
              style={{ minHeight: "44px" }}
            >
              <span>[ ACCESS GITHUB ↗ ]</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <div className="recruiter-action-btn pending">
            <span>GITHUB LINK PENDING</span>
          </div>
        )}

        {/* LinkedIn Dedicated Access Card */}
        {contact.linkedin ? (
          <div
            style={{
              border: "1px solid var(--color-surface-border)",
              backgroundColor: "var(--color-bg)",
              padding: "var(--space-3)",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", fontWeight: "bold", color: "var(--color-text-primary)" }}>
                LINKEDIN
              </span>
              <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-dim)" }}>
                PROFESSIONAL NETWORK
              </span>
            </div>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="recruiter-action-btn"
              style={{ minHeight: "44px" }}
            >
              <span>[ CONNECT ON LINKEDIN ↗ ]</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <div className="recruiter-action-btn pending">
            <span>LINKEDIN LINK PENDING</span>
          </div>
        )}

      </div>

      {/* Focus Form CTA Shortcut */}
      <div style={{ borderTop: "1px dashed var(--color-surface-border)", paddingTop: "var(--space-3)" }}>
        <button
          type="button"
          onClick={onFocusForm}
          style={{
            background: "none",
            border: "none",
            color: "var(--color-accent)",
            fontFamily: "var(--font-family-mono)",
            fontSize: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span>→ OPEN TRANSMISSION FORM</span>
        </button>
      </div>

    </div>
  );
};
