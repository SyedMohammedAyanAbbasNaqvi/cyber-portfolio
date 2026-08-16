import React from "react";

export const CornerBrackets: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: "var(--z-hud)",
      }}
    >
      {/* Top Left Corner */}
      <div
        className="animate-corner-pulse"
        style={{
          position: "absolute",
          top: "calc(16px + env(safe-area-inset-top, 0px))",
          left: "calc(16px + env(safe-area-inset-left, 0px))",
          width: "20px",
          height: "20px",
          borderTop: "2px solid var(--color-intelligence)",
          borderLeft: "2px solid var(--color-intelligence)",
        }}
      />

      {/* Top Right Corner */}
      <div
        className="animate-corner-pulse"
        style={{
          position: "absolute",
          top: "calc(16px + env(safe-area-inset-top, 0px))",
          right: "calc(16px + env(safe-area-inset-right, 0px))",
          width: "20px",
          height: "20px",
          borderTop: "2px solid var(--color-intelligence)",
          borderRight: "2px solid var(--color-intelligence)",
        }}
      />

      {/* Bottom Left Corner */}
      <div
        className="animate-corner-pulse"
        style={{
          position: "absolute",
          bottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
          left: "calc(16px + env(safe-area-inset-left, 0px))",
          width: "20px",
          height: "20px",
          borderBottom: "2px solid var(--color-intelligence)",
          borderLeft: "2px solid var(--color-intelligence)",
        }}
      />

      {/* Bottom Right Corner */}
      <div
        className="animate-corner-pulse"
        style={{
          position: "absolute",
          bottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
          right: "calc(16px + env(safe-area-inset-right, 0px))",
          width: "20px",
          height: "20px",
          borderBottom: "2px solid var(--color-intelligence)",
          borderRight: "2px solid var(--color-intelligence)",
        }}
      />
    </div>
  );
};
