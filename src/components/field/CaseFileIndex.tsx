import React from "react";
import type { ProjectCaseFile } from "../../types/dossier";
import { FolderArchive, Shield, Cpu } from "lucide-react";

export interface CaseFileIndexProps {
  caseFiles: ProjectCaseFile[];
}

export const CaseFileIndex: React.FC<CaseFileIndexProps> = ({ caseFiles }) => {
  const totalCount = caseFiles.length;
  const redCount = caseFiles.filter((c) => c.category === "RED TEAM").length;
  const blueCount = caseFiles.filter((c) => c.category === "BLUE TEAM").length;

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
      {/* Total Cases Counter */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <FolderArchive size={16} style={{ color: "var(--color-accent)" }} />
        <span style={{ fontWeight: "bold", color: "var(--color-text-primary)" }}>
          FIELD OPERATIONS INDEX
        </span>
        <span style={{ color: "var(--color-text-dim)" }}>|</span>
        <span style={{ color: "var(--color-accent)", fontWeight: "bold" }}>
          TOTAL CASES: [{totalCount.toString().padStart(2, "0")}]
        </span>
      </div>

      {/* Category Breakdowns */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-threat)" }}>
          <Shield size={12} />
          <span>RED TEAM: {redCount.toString().padStart(2, "0")}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-intelligence)" }}>
          <Cpu size={12} />
          <span>BLUE TEAM: {blueCount.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};
