import React from "react";

export const ThreatTicker: React.FC = () => {
  const manifestoItems = [
    "BUILD WHAT YOU CANNOT FIND",
    "BREAK WHAT SHOULD NOT BE TRUSTED",
    "DEFEND WHAT YOU CREATE",
    "AUTOMATE THE REPETITIVE",
    "LEARN THE SYSTEM",
    "UNDERSTAND THE FAILURE",
    "SHIP. TEST. BREAK. REBUILD.",
  ];

  const fullSequence = manifestoItems.map((item, idx) => (
    <React.Fragment key={idx}>
      <span style={{ color: "var(--color-text-primary)", fontWeight: "bold" }}>{item}</span>
      <span style={{ color: "var(--color-accent)", margin: "0 16px" }}>//</span>
    </React.Fragment>
  ));

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "calc(32px + env(safe-area-inset-bottom, 0px))",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        backgroundColor: "var(--color-bg)",
        borderTop: "1px solid var(--color-surface-border)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        zIndex: "var(--z-hud)",
        fontFamily: "var(--font-family-mono)",
        fontSize: "var(--font-size-xs)",
        letterSpacing: "0.06em",
        userSelect: "none",
      }}
    >
      <div className="animate-ticker">
        <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
          {fullSequence}
        </div>
        {/* Duplicate sequence for seamless loop */}
        <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
          {fullSequence}
        </div>
      </div>
    </div>
  );
};
