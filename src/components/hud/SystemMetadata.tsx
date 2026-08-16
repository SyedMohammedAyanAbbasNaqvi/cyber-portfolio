import React from "react";
import { LiveClock } from "./LiveClock";

export interface SystemMetadataProps {
  activeSection?: string;
}

export const SystemMetadata: React.FC<SystemMetadataProps> = ({ activeSection = "dossier-hero" }) => {
  const getNodeLabel = (sec: string) => {
    switch (sec) {
      case "identity":
        return "NODE // PROFILE";
      case "capabilities":
        return "NODE // SYSTEMS";
      case "operations":
        return "NODE // DEPLOYMENTS";
      case "field-operations":
        return "NODE // ARCHIVE";
      case "clearance":
        return "NODE // VERIFICATION";
      case "access":
        return "NODE // CONNECTION";
      default:
        return "NODE // LKO-IN";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        fontFamily: "var(--font-family-mono)",
        fontSize: "var(--font-size-xs)",
        color: "var(--color-text-muted)",
      }}
    >
      <div style={{ display: "none", sm: "block" } as React.CSSProperties}>
        <span style={{ color: "var(--color-intelligence)", fontWeight: "bold" }}>{getNodeLabel(activeSection)}</span>
      </div>
      <div>
        <span style={{ color: "var(--color-text-dim)" }}>SYS:</span>{" "}
        <span style={{ color: "var(--color-success)" }}>ONLINE</span>
      </div>
      <LiveClock />
    </div>
  );
};
