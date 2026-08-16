import React from "react";
import type { SystemState } from "../../types/dossier";

export interface StatusBadgeProps {
  status: SystemState;
  size?: "sm" | "md";
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = "md", className = "" }) => {
  const configMap: Record<SystemState, { color: string; bg: string; border: string }> = {
    ONLINE: {
      color: "var(--color-success)",
      bg: "rgba(0, 230, 118, 0.1)",
      border: "var(--color-success)",
    },
    VERIFIED: {
      color: "var(--color-success)",
      bg: "rgba(0, 230, 118, 0.1)",
      border: "var(--color-success)",
    },
    ACTIVE: {
      color: "var(--color-intelligence)",
      bg: "rgba(0, 217, 255, 0.1)",
      border: "var(--color-intelligence)",
    },
    COMPLETE: {
      color: "var(--color-success)",
      bg: "rgba(0, 230, 118, 0.1)",
      border: "var(--color-success)",
    },
    COMPLETED: {
      color: "var(--color-success)",
      bg: "rgba(0, 230, 118, 0.1)",
      border: "var(--color-success)",
    },
    EXPERIMENTAL: {
      color: "var(--color-threat)",
      bg: "rgba(255, 43, 78, 0.1)",
      border: "var(--color-threat)",
    },
    TRAINING: {
      color: "var(--color-intelligence)",
      bg: "rgba(0, 217, 255, 0.1)",
      border: "var(--color-intelligence)",
    },
    "IN PROGRESS": {
      color: "var(--color-accent)",
      bg: "rgba(255, 90, 31, 0.1)",
      border: "var(--color-accent)",
    },


    DOCUMENTED: {
      color: "var(--color-accent)",
      bg: "rgba(255, 90, 31, 0.1)",
      border: "var(--color-accent)",
    },
    "LIMITED ACCESS": {
      color: "var(--color-intelligence)",
      bg: "rgba(0, 217, 255, 0.1)",
      border: "var(--color-intelligence)",
    },
    "UNDER DEVELOPMENT": {
      color: "var(--color-accent)",
      bg: "rgba(255, 90, 31, 0.1)",
      border: "var(--color-accent)",
    },
    "ACCESS PENDING": {
      color: "var(--color-accent)",
      bg: "rgba(255, 90, 31, 0.1)",
      border: "var(--color-accent)",
    },
    OFFLINE: {
      color: "var(--color-threat)",
      bg: "rgba(255, 43, 78, 0.1)",
      border: "var(--color-threat)",
    },

  };


  const config = configMap[status] || configMap["UNDER DEVELOPMENT"];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: size === "sm" ? "1px 6px" : "2px 8px",
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
        fontFamily: "var(--font-family-mono)",
        fontSize: size === "sm" ? "10px" : "var(--font-size-xs)",
        fontWeight: "bold",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
      className={className}
    >
      <span
        style={{
          width: size === "sm" ? "4px" : "6px",
          height: size === "sm" ? "4px" : "6px",
          backgroundColor: config.color,
          display: "inline-block",
        }}
      />
      {status}
    </span>
  );
};

