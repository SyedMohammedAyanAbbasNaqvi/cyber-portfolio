import React from "react";

export interface TacticalPanelProps {
  children: React.ReactNode;
  title?: string;
  codeName?: string;
  variant?: "default" | "accent" | "intelligence" | "threat";
  className?: string;
  showBrackets?: boolean;
}

export const TacticalPanel: React.FC<TacticalPanelProps> = ({
  children,
  title,
  codeName,
  variant = "default",
  className = "",
  showBrackets = true,
}) => {
  const borderColorMap = {
    default: "var(--color-surface-border)",
    accent: "var(--color-accent)",
    intelligence: "var(--color-intelligence)",
    threat: "var(--color-threat)",
  };

  const selectedBorder = borderColorMap[variant];

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "var(--color-surface)",
        border: `2px solid ${selectedBorder}`,
        boxShadow: "var(--shadow-surface)",
        padding: "var(--space-6)",
      }}
      className={className}
    >
      {/* Corner Brackets */}
      {showBrackets && (
        <>
          <span
            style={{
              position: "absolute",
              top: "-4px",
              left: "-4px",
              width: "10px",
              height: "10px",
              borderTop: `2px solid ${selectedBorder}`,
              borderLeft: `2px solid ${selectedBorder}`,
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              width: "10px",
              height: "10px",
              borderTop: `2px solid ${selectedBorder}`,
              borderRight: `2px solid ${selectedBorder}`,
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "-4px",
              width: "10px",
              height: "10px",
              borderBottom: `2px solid ${selectedBorder}`,
              borderLeft: `2px solid ${selectedBorder}`,
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: "-4px",
              right: "-4px",
              width: "10px",
              height: "10px",
              borderBottom: `2px solid ${selectedBorder}`,
              borderRight: `2px solid ${selectedBorder}`,
            }}
          />
        </>
      )}

      {/* Header Label / Codename */}
      {(title || codeName) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid var(--color-surface-border)`,
            paddingBottom: "var(--space-3)",
            marginBottom: "var(--space-4)",
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size-xs)",
            color: "var(--color-text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          {title && <span style={{ color: "var(--color-text-primary)", fontWeight: "bold" }}>{title}</span>}
          {codeName && <span style={{ color: "var(--color-accent)" }}>[ {codeName} ]</span>}
        </div>
      )}

      {/* Panel Content */}
      <div>{children}</div>
    </div>
  );
};
