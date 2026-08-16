import React from "react";

export const ScanlineOverlay: React.FC = () => {
  return (
    <div aria-hidden="true" style={{ pointerEvents: "none" }}>
      {/* Repeating 4px static grid scanlines */}
      <div className="scanlines-overlay" />
      {/* Sweeping GPU horizontal beam */}
      <div className="scanline-beam" />
    </div>
  );
};
