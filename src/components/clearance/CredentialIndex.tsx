import React from "react";
import type { Credential } from "../../types/dossier";
import { ShieldCheck, CheckCircle2, BookOpen, Clock } from "lucide-react";

export interface CredentialIndexProps {
  credentials: Credential[];
}

export const CredentialIndex: React.FC<CredentialIndexProps> = ({ credentials }) => {
  const verifiedCount = credentials.filter((c) => c.status === "VERIFIED").length;
  const trainingCount = credentials.filter((c) => c.status === "TRAINING").length;
  const inProgressCount = credentials.filter((c) => c.status === "IN PROGRESS").length;

  return (
    <div
      style={{
        border: "1px solid var(--color-surface-border)",
        backgroundColor: "var(--color-surface)",
        padding: "var(--space-4) var(--space-6)",
        marginBottom: "var(--space-6)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "var(--space-4)",
        fontFamily: "var(--font-family-mono)",
        fontSize: "var(--font-size-xs)",
      }}
    >
      {/* Title Tag */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <ShieldCheck size={16} style={{ color: "var(--color-success)" }} />
        <span style={{ fontWeight: "bold", color: "var(--color-text-primary)" }}>
          CLEARANCE & VERIFICATION AUDIT
        </span>
        <span style={{ color: "var(--color-text-dim)" }}>|</span>
        <span style={{ color: "var(--color-success)", fontWeight: "bold" }}>
          TOTAL RECORDS: [{credentials.length.toString().padStart(2, "0")}]
        </span>
      </div>

      {/* Dynamic Metric Counts */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-success)" }}>
          <CheckCircle2 size={12} />
          <span>VERIFIED: {verifiedCount}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-intelligence)" }}>
          <BookOpen size={12} />
          <span>TRAINING: {trainingCount}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-accent)" }}>
          <Clock size={12} />
          <span>IN PROGRESS: {inProgressCount}</span>
        </div>
      </div>
    </div>
  );
};
