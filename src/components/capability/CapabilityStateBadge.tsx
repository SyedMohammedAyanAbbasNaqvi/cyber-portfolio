import React from "react";
import type { CapabilityState } from "../../types/dossier";

export interface CapabilityStateBadgeProps {
  state: CapabilityState;
  className?: string;
  size?: "sm" | "md";
}

export const CapabilityStateBadge: React.FC<CapabilityStateBadgeProps> = ({
  state,
  className = "",
  size = "md",
}) => {
  const stateConfig: Record<
    CapabilityState,
    { color: string; bg: string; border: string }
  > = {
    DEPLOYED: {
      color: "var(--color-success)",
      bg: "rgba(0, 230, 118, 0.12)",
      border: "var(--color-success)",
    },
    PRACTICED: {
      color: "var(--color-intelligence)",
      bg: "rgba(0, 217, 255, 0.12)",
      border: "var(--color-intelligence)",
    },
    CERTIFIED: {
      color: "var(--color-success)",
      bg: "rgba(0, 230, 118, 0.12)",
      border: "var(--color-success)",
    },
    "WORKING KNOWLEDGE": {
      color: "var(--color-text-muted)",
      bg: "rgba(140, 150, 166, 0.12)",
      border: "var(--color-surface-border)",
    },
    LEARNING: {
      color: "var(--color-accent)",
      bg: "rgba(255, 90, 31, 0.12)",
      border: "var(--color-accent)",
    },
    "IN PROGRESS": {
      color: "var(--color-accent)",
      bg: "rgba(255, 90, 31, 0.12)",
      border: "var(--color-accent)",
    },
  };

  const config = stateConfig[state] || stateConfig["PRACTICED"];

  return (
    <span
      className={`capability-state-badge ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: size === "sm" ? "2px 6px" : "3px 10px",
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
        fontFamily: "var(--font-family-mono)",
        fontSize: size === "sm" ? "10px" : "11px",
        fontWeight: "bold",
        letterSpacing: "0.05em",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: config.color,
          display: "inline-block",
        }}
      />
      <span>[{state}]</span>
    </span>
  );
};
